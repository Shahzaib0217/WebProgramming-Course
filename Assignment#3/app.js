// getData is called by Forcat button 
const getData = () => {
    let name = document.getElementById("name").value;
    getWeather(name);
}

/*This function makes AJAX call
to get Weather for entered city name
*/
const getWeather = (cityName) => {
    // Api to request data from (openwaethermap.org)
    const api_endpoint = "https://api.openweathermap.org/data/2.5/weather?";
    const api_key = "efdc720d1d913e6c8f75c0bf6686e5e6";
    // units=metric will show temp in Celcius
    var API = api_endpoint + "q=" + cityName + "&appid=" + api_key + "&units=metric";

    //setting up request using AJAX
    let xhr = new XMLHttpRequest();
    //open connection
    xhr.open("GET", API);
    // for JSON data
    xhr.responseType = "json";

    //action when data is returned (ready state is Done(4) or status 200)
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(API);
            const data = this.response;
            let inner_html = `
            <p>City: ${data.name}</p>
            <p>Temprature: ${data.main.temp}</p>
            <p>Feels Like: ${data.main.feels_like}</p>
            <p>Description: ${data.weather[0].description}</p>
            <p>Min. Temp: ${data.main.temp_min}</p>
            <p>Max. Temp: ${data.main.temp_max}</p>
            `;
            document.getElementById("weatherInfo").innerHTML = inner_html;

        }
        else {
            alert("Unable to Load Data");
        }
    }
    //send data
    xhr.send();
}