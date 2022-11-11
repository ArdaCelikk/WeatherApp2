const url='https://api.openweathermap.org/data/2.5/'
const key='d14814ca98cbf863421dc95f4647c08e'

let ara=document.getElementById("txtAra")
let backGroundImage= document.getElementById("bGround")
let durum



const setQuery=(e)=>{
    if(e.keyCode =='13')
    getResult(ara.value)
}

const getResult=(cityName) => {
   let quary =`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
   fetch(quary)
   .then(weather=> {
    return weather.json()
   })
   .then(display)
}

const display= (result)=> {
    // console.log(result)

    let place =document.querySelector(".place")
    let derece = document.querySelector(".yazi")
    durum = document.querySelector(".durum")
    let feels = document.querySelector(".feel")
    let humidity = document.querySelector(".humidity")
    let wind = document.querySelector(".windSpeed")
    let paragraflar = document.querySelector(".parag")
    let middle  = document.querySelector(".orta")


    place.innerHTML=`${result.name}, ${result.sys.country}`
    derece.innerHTML = `${Math.round(result.main.temp)}°C`
    durum.innerHTML= result.weather[0].description
    feels.innerHTML=`${Math.round(result.main.feels_like)}°C <p>Feels Like</p>`
    humidity.innerHTML=`${result.main.humidity} % <p>Humidity</p>`
    wind.innerHTML=`${result.wind.speed}.m/s  <p>Wind Speed</p>`

    switch(durum.innerHTML)
    {
        case "açık":
            backGroundImage.style.background="url('/img/gunesli.jpg')"

            break;
        
        case "az bulutlu":
            backGroundImage.style.background="url('/img/azBulutlu.jpg')"
            backGroundImage.style.backgroundSize="100% 100%"
            break;

        case "kapalı":
            backGroundImage.style.background="url('/img/smap-weather.jpg')"
            backGroundImage.style.backgroundSize="100% 100%"
            break;

        case "parçalı bulutlu":
            backGroundImage.style.background="url('/img/siddetliYagmur.jpg')"
            backGroundImage.style.backgroundSize="100% 100%"
            break;


        case "şiddetli yağmur":
        case "orta şiddetli yağmur":
            backGroundImage.style.background="url('/img/siddetliYagmur.jpg')"
            backGroundImage.style.backgroundSize="100% 100%"
            break;

        case "hafif kar yağışlı":
            backGroundImage.style.background="url('/img/kar.jpg')"
            backGroundImage.style.backgroundSize="100% 100%"
            break;



        

    }
    }
const searcH = document.getElementById('txtAra')
searcH.addEventListener('keypress',setQuery)

