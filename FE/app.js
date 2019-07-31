document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')

const rides = document.querySelector(".rides")
const searchbutton = document.querySelector(".searchButton")
const lat = document.querySelector(".lat")
const long = document.querySelector(".long")
const search = document.querySelector(".search")
const dist = document.querySelector(".Dist")
const SaveBtn = document.querySelector(".svBtn")
//const x = document.getElementById("demo");
//const geoButton = document.querySelector(".geobutton")
const trailsDB = 


searchbutton.addEventListener('click',event =>{
    const latitude = lat.value
    const longitude = long.value
    const distance = dist.value
    searchApi(latitude, longitude, distance)
})


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

  function searchApi(latitude, longitude, distance){
      Api = `https://www.mtbproject.com/data/get-trails?lat=39.754185&lon=-105.2305&maxDistance=100&maxResults=150&key=200542632-6cf320d9c23f0a8db10aab395888ac94`
    //Api = https://www.mtbproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&maxResults=75&key=200542632-6cf320d9c23f0a8db10aab395888ac94`
      fetch(Api)
      .then(parseJSON)
      .then (iterateAPI)
}

function parseJSON(mtbAPI){
    return mtbAPI.json()
    }

    function iterateAPI(result){
     const array = result.trails.forEach(trail => {
        createCard(trail)
     });
        }

        function createCard(trail){
          const ridecrd = document.createElement("div")
          const h2 = document.createElement("h2")
          const img = document.createElement("img")
          const difficulty = document.createElement("p")
          const rting = document.createElement("p")
          const svBttn = document.createElement("button")
          const link = document.createElement("a")

          h2.innerText = trail.name
          svBttn.innerText = "Save Me"
          img.src = trail.imgSmall
          rting.innerText = `Rating: ${trail.stars}`
          difficulty.innerText = `Difficulty: ${trail.difficulty}`
          link.innerHTML = 

          img.setAttribute("class", "imgCls")
          h2.setAttribute("class", "trlttl")
          rting.setAttribute("class", "rtingT")
          difficulty.setAttribute("class", "diff")
          svBttn.setAttribute("class", "svBtn")
          link.setAttribute("href",`${trail.url}`)
          link.innerHTML = "Info"
          link.setAttribute("class","trlUrl" )

          rides.appendChild(ridecrd)
          ridecrd.appendChild(h2)
          ridecrd.appendChild(img)
          ridecrd.appendChild(difficulty)
          ridecrd.appendChild(rting)
          ridecrd.appendChild(link)
          ridecrd.appendChild(svBttn)
        }
console.log(SaveBtn)
  rides.addEventListener("click", Event =>{const SaveBtn = document.querySelector(".svBtn")
    console.log("I Was Clicked")
    const formData = new FormData(event.target)
   // createComment(formData.get("comment"))
      let newTrailObj = {
              name: trail.name,
              summary: trail.summary,
              type: trail.type, 
              difficulty: trail.difficulty,
              stars: trail.stars,
              location: trail.location,
              url:trail.url, 
              consitionStatus: trails.conditionStatus,
              conditionDate: trails.conditionDate,
              img: trail.imgSqSmall,
              length: trail.length,
              ascent: trail.ascent,
              descent: trail.descent,
              lat: trail.latitude,
              long: trail.longitude, 
              apiid: trail.id,
      }
      fetch(trailsDB, {
        method:'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrailObj)
      })
  })
})
