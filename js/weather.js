const url='https://api.openweathermap.org/data/2.5/'
const key='d14814ca98cbf863421dc95f4647c08e'

let ara=document.getElementById("txtAra")

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
    place.innerHTML=`${result.name}, ${result.sys.country}`
    let derece = document.querySelector(".yazi")
    derece.innerHTML = `${Math.round(result.main.temp)}°C`
    let durum = document.querySelector(".durum")
    durum.innerHTML= result.weather[0].description
    let feels = document.querySelector(".feel")
    feels.innerHTML=`${Math.round(result.main.feels_like)}°C <p>Feels Like</p>`
    let humidity = document.querySelector(".humidity")
    humidity.innerHTML=`${result.main.humidity} % <p>Humidity</p>`
    let wind = document.querySelector(".windSpeed")
    wind.innerHTML=`${result.wind.speed}.m/s  <p>Wind Speed</p>`
    let weather1= document.querySelector(".weather")
    weather1.innerHTML="<img src='result.weather.icon'>"
    let flag = document.querySelector(".countryFlag")
    flag.innerHTML="<img src='#'>"
    backGroundImage(durum)
    }


const searcH = document.getElementById('txtAra')
searcH.addEventListener('keypress',setQuery)
