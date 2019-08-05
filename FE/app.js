document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

    const rides = document.querySelector("#rideSearch")
    const sRides =  document.querySelector("#savedRides")
    const savedRideCont = document.querySelector("#saved")
    const searchbutton = document.querySelector(".searchButton")
    const lat = document.querySelector(".lat")
    const long = document.querySelector(".long")
    const search = document.querySelector(".search")
    const dist = document.querySelector(".Dist")
    const SaveBtn = document.querySelector(".svBtn")
    const addNote = document.querySelector("#addnote")
    const noteSection = document.querySelector("#note")
    const trailsDB = 'http://localhost:3000/trails'
    const userDB = 'http://localhost:3000/users'


    searchbutton.addEventListener('click',event =>{
      firstname = document.querySelector(".first")
      lastname = document.querySelector(".last")

        const latitude = lat.value
        const longitude = long.value
        const distance = dist.value
        const uLastname = lastname.value
        const uFirstname = firstname.value
        searchApi(latitude, longitude, distance)
        generateUserPost(uFirstname, uLastname)
    })

    addNote.addEventListener('click',event =>{
      createNoteCard()
      CreateNoteTtl()
    })


    rides.addEventListener("click", event =>{const SaveBtn = document.querySelector(".svBtn")
      const postItem = event.target.parentNode
        generateTrailPost(postItem)
        SavedCardRunner()
        createSideCardTtl()
    })

    sRides.addEventListener('click',event =>{
      SavedCardRunner()
      createSideCardTtl()
    })

    function SavedCardRunner(postItem){
        savedRideCont.setAttribute("class","rides")
        getSavedRides()
        createSidecard()
    }

    // Comment back in for note title.
    //  function CreateNoteTtl(){
      //  const NoteTitle = document.querySelector("#noteTtl")
      //   NoteTitle.innerText = "Notes:"
    // }

    function createNoteCard(){
        noteSection.setAttribute("class", "notes") 
          const editButton = document.createElement("button")
              editButton.setAttribute("class","createPost")
              editButton.innerText = "Edit / Save Note"
              noteField = document.createElement("TextArea")
              noteField.setAttribute("class", "noteFieldText")
              noteField.value = localStorage.getItem('note')
          noteSection.appendChild(noteField)
          noteSection.appendChild(editButton)
      

      editButton.addEventListener('click', event =>{
          const noteArea =document.querySelector(".noteFieldText")
          const notes = noteArea.value
        generateUserUpdate(notes)
      })
    } 

      

    function searchApi(latitude, longitude, distance){
          //Api = `https://www.mtbproject.com/data/get-trails?lat=39.754185&lon=-105.2305&maxDistance=100&maxResults=150&key=200542632-6cf320d9c23f0a8db10aab395888ac94`
        Api =`https://www.mtbproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=75&key=200542632-6cf320d9c23f0a8db10aab395888ac94`
          fetch(Api)
          .then(parseJSON)
          .then(iterateAPI)
    }

    function parseJSON(API){
          return API.json()
    }

    function iterateAPI(result){
      result.trails.forEach(trail => {
        createCard(trail)
        })
      }

    function createCard(trail){
              
      const navSavRide = document.querySelector('#savedRides')
            navSavRide.innerText = "Your Saved Rides"    
            
      const navNotes = document.querySelector('#addnote')
            navNotes.innerText = "Add a Note"    

      // SearchResTitle = document.querySelector("#sResultsTttl")
            //SearchResTitle.innerText = `Hey ${localStorage.getItem('firstname')}! Here are your search results:`

            rides.setAttribute("class", "rides")
      const ridecrd = document.createElement("div")
      const h2 = document.createElement("h2")
      const img = document.createElement("img")
      const trailStat = document.createElement("p")
      const length = document.createElement("p")
      const difficulty = document.createElement("p")
      const rting = document.createElement("p")
      const ascDesc = document.createElement("p")
      const svBttn = document.createElement("button")
      const link = document.createElement("a")

            h2.innerText = trail.name
            svBttn.innerText = "Save Me"
            trailStat.innerText = `Current Condition: ${trail.conditionStatus}`
            img.src = trail.imgSmall
            ascDesc.innerText = `Elevation change: +${trail.ascent}/${trail.descent}`
            rting.innerText = `Rating: ${trail.stars}`
            difficulty.innerText = `Difficulty: ${trail.difficulty}`
            length.innerText = `Length: ${trail.length} miles`

            img.setAttribute("class", "imgCls")
            h2.setAttribute("class", "trlttl")
            rting.setAttribute("class", "rtingT")
            trailStat.setAttribute("class", "trailStatus")
            difficulty.setAttribute("class", "diff")
            ascDesc.setAttribute("class", "AscDesc")
            length.setAttribute("class", "trailLength")
            svBttn.setAttribute("class", "svBtn")
            link.setAttribute("href",`${trail.url}`)
            link.innerHTML = "Info"
            link.setAttribute("class","trlUrl" )
        

            rides.appendChild(ridecrd)
            ridecrd.appendChild(h2)
            ridecrd.appendChild(img)
            ridecrd.appendChild(difficulty)
            ridecrd.appendChild(length)
            ridecrd.appendChild(ascDesc)
            ridecrd.appendChild(rting)
            ridecrd.appendChild(trailStat)
            ridecrd.appendChild(link)
            ridecrd.appendChild(svBttn)
    }


    function generateTrailPost(postItem){
        title = postItem.querySelector(".trlttl")
        difficulty = postItem.querySelector(".diff")
        rating = postItem.querySelector(".rtingT")
        webAddress = postItem.querySelector(".trlUrl")
        image = postItem.querySelector(".imgCls")
        trailDist = postItem.querySelector(".trailLength")
        eChange = postItem.querySelector(".AscDesc")
        firstname = document.querySelector(".first")
        lastname = document.querySelector(".last")


        let newTrailObj = {
          name: title.innerText,
          difficulty: difficulty.innerText,
          rating: rating.innerText,
          url: webAddress.href, 
          img: image.src,
          length: trailDist.innerText,
          eChange: eChange.innerText,
          user_id: localStorage.getItem('user')
        }
          trailPostReq(newTrailObj)
    }

    function trailPostReq(newTrailObj){
      fetch(trailsDB, {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrailObj)
      })
    }

    function generateUserPost(uFirstname, uLastname){
      let newUserObj = {
        firstname: uFirstname,
        lastname: uLastname, 
        note: ""
        }
        userPostReq(newUserObj)
      }

    function userPostReq(newUserObj){
      fetch(userDB, {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUserObj)
      })

        .then(parseJSON)
        .then(saveUser)
    }

    function generateUserUpdate(notes){
      const  firstnameO = localStorage.getItem('firstname')
      const  lastnameO = localStorage.getItem('lastname')

      let updateUserObj = {
        firstname: firstnameO,
        lastname: lastnameO,
        note: notes
      }
      userUpdateReq(updateUserObj)
    }

    function userUpdateReq(updateUserObj){
      const showUsersDB = `http://localhost:3000/users/${localStorage.getItem('user')}`
      fetch(showUsersDB, {
        method:'PATCH',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateUserObj)
      })
        .then(parseJSON)
        .then(saveUser)

    }



    function saveUser(result){
        localStorage.setItem('user',result.id)
        localStorage.setItem('firstname',result.firstname.toLowerCase())
        localStorage.setItem('lastname', result.lastname.toLowerCase())
        localStorage.setItem('note', result.note)
    }
    function getSavedRides(){
      const showUsersDB = `http://localhost:3000/users/${localStorage.getItem('user')}`
      fetch(showUsersDB)
      .then(parseJSON)
      .then(iterateAPIResponse)
    }

    function iterateAPIResponse(result){
      result.trails.forEach(trail => { 
          console.log("IterateAPI",trail)
          createSidecard(trail)
        });
    }

      
    function createSidecard(trail){
      const SavedRidesTtl = document.querySelector("#savedTtl")
            SavedRidesTtl.innerText = `Hey ${capitalizer(localStorage.getItem('firstname'))}! Here are your saved rides:`  
              
      const sRidecrd = document.createElement("div")
      const srTitle = document.createElement("h2")
      const simg = document.createElement("img")
      const slength = document.createElement("p")
      const sdifficulty = document.createElement("p")
      const srting = document.createElement("p")
      const sascDesc = document.createElement("p")
      const delBttn = document.createElement("button")
      const slink = document.createElement("a")
      const featid = document.createElement("p")

          srTitle.innerText = trail.name
          delBttn.innerText = "Delete"
          delBttn.dataset.id = trail.id
          simg.src = trail.img
          sascDesc.innerText = trail.eChange
          srting.innerText = trail.rating
          sdifficulty.innerText = trail.difficulty
          slength.innerText = trail.length
          featid.innerText = trail.id

          slink.setAttribute("href",`${trail.url}`)
          slink.innerHTML = "Info"
          slink.setAttribute("class","trlUrl" )
          srTitle.setAttribute("class", "trlttl")

          sdifficulty.setAttribute("class", "diff")
          sascDesc.setAttribute("class", "AscDesc")
          slength.setAttribute("class", "trailLength")
          delBttn.setAttribute("class", "delBtn")
          srting.setAttribute("class", "rtingT")
          simg.setAttribute("class", "imgCls")

          savedRideCont.appendChild(sRidecrd)
          sRidecrd.appendChild(srTitle)
          sRidecrd.appendChild(simg)
          sRidecrd.appendChild(sdifficulty)
          sRidecrd.appendChild(slength)
          sRidecrd.appendChild(sascDesc)
          sRidecrd.appendChild(srting)
          sRidecrd.appendChild(slink)
          sRidecrd.appendChild(delBttn)

      delBttn.addEventListener('click', event =>{const delBtn = document.querySelector(".delBtn")
        const delItem = event.target
          sRidecrd.remove(delItem)
          deleteTrailPost(delItem)
      })

      function deleteTrailPost(delItem){
          fetch(`${trailsDB}/${delItem.dataset.id}`,{
              method:'DELETE',
            headers: {
              'Content-Type': 'application/json'
                }
              })
      }

    }
                    

    function getLocation() {
      console.log(navigator.geolocation.getCurrentPosition(window.location))
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
          let lati = position.coords.latitude
          let longi = position.coords.longitude
          console.log(lati)
          console.log(longi)
          showPosition(lati, longi);
          });
      // navigator.geolocation.getCurrentPosition(showPosition(position));
      } else { 
        console.log(lat.innerHTML = "Geolocation is not supported by this browser.");
      }
    }
                            
    function showPosition(lati, longi) {
      console.log(lati)
      console.log(longi)
      lat.innerText = lati
      search.appendChild(lat)
      long.innerText = longi
      search.appendChild(long)
    }

    function capitalizer(string){
      return string.charAt(0).toUpperCase() + string.slice(1)
    }



})
              
