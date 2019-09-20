const weather = document.querySelector(".js-weather");

// openWeatherMap API key
const API_KEY = "7de7a9e545c57a3b7fe224c48e31ae0b";
const COORDS_LS = "coords2";

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        })
}

function saveCoords(locationObj){
    localStorage.setItem(COORDS_LS, JSON.stringify(locationObj));
}

function handleGeoError(){
    console.log("can't access geo location");
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationObj = {
        latitude,
        longitude
    };

    saveCoords(locationObj);
    getWeather(latitude,longitude);
}

function getCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const lsCoords = localStorage.getItem(COORDS_LS);
    if (lsCoords){
        const currentCoords = JSON.parse(lsCoords);
        getWeather(currentCoords.latitude, currentCoords.longitude);
    }else{
        getCoords();
    }
}
function init(){
    loadCoords();
}
init();