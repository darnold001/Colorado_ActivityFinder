addEventListener('DOMContentLoaded', (event)=> console.log("Dom Fully Loaded and Parsed"))


const container = document.querySelector(".card")
const searchbutton = document.querySelector(".searchButton")
const lat = document.querySelector(".lat")
const long = document.querySelector(".long")
const dist = document.querySelector(".Dist")


searchbutton.addEventListener('click',event =>{
    const latitude = lat.value
    const longitude = long.value
    const distance = dist.value
    searchApi(latitude, longitude, distance)
})

function searchApi(latitude, longitude, distance){
   Api = `https://www.mtbproject.com/data/get-trails?lat=${latitude}&lon=${longitude}&maxDistance=${distance}&key=
    200542632-6cf320d9c23f0a8db10aab395888ac94`
    fetch(Api)
    .then(parseJSON)
    //.then(iterateAPI)
}
function parseJSON(mtbAPI){
    console.log (mtbAPI.json())
    return mtbAPI
    }

    let x = document.getElementById("demo");
            
            function getLocation() {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
              } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
              }
            }
            
            function showPosition(position) {
              x.innerHTML = "Latitude: " + position.coords.latitude + 
              "<br>Longitude: " + position.coords.longitude;
            }




            
//     function CreateAPICalls(artAPI){
//         artAPI.forEach(element => {createAPIString(element)
//         });  
//     }

//     function createAPIString(element){
//         artAPI = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${element}`
//         console.log(artAPI)
//         APIcall(artAPI)
//     }

//     function APIcall(artAPI){
//     fetch(artAPI)
//     .then(parseJSON)
//     .then(CreateCard)
//     }

//     function iterateAPI(result){
//         console.log(result)
//         const idArray = result.objectIDs.map(x => {createAPIString(x)
//     }
//     )}
//     function CreateCard(mtbAPI){

//         container1 = document.createElement("div")
//         container.appendChild(container1)

//         img = document.createElement("img")
//         img.src = mtbAPI.primaryImage
//         container1.appendChild(img)

//         h3 = document.createElement("h3")
//         h3.innerText = mtbnAPI.title
//         container1.appendChild(h3)

//         h4 = document.createElement("h4")
//         h4.innerText = mtbAPI.artistDisplayName
//         container1.appendChild(h4)

//         p = document.createElement("p")
//         p.innerText = mtbAPI.artistDisplayName
//         container1.appendChild(p)
// }


