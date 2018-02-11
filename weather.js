let weather_id = 9999;
let weather_category = "null";
let weather_description = "null";
let wind = 9999;
let temp = 9999;
let img_url = "null";

function setup(){
    createCanvas(600, 600);
    let d = new Date();
    let hrs = d.getHours();
    let mins = d.getMinutes();
    if (hrs >= 0 && hrs < 10) hrs = "0" + d.getHours();
    if (mins >= 0 && mins < 10) mins = "0" + d.getMinutes();
    document.getElementsByClassName("date")[0].innerHTML = "At " + hrs + ":" + mins + " on " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    let url = "https://api.openweathermap.org/data/2.5/weather?q=plymouth,uk&units=metric&APPID=842fbb38545fe9578a86fd7ce9dfb7f1";
    httpGet(url, 'jsonp', false, function(response){
        temp = response.main.temp;
        weather_id = response.weather[0].id;
        weather_category = response.weather[0].main;
        weather_description = response.weather[0].description;
        wind = response.wind.speed;
        img_url = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
        document.getElementById("weather_img").src = img_url;
        let readings = document.getElementsByClassName("readings");
        readings[0].innerHTML = "Weather Category: " + weather_category;
        readings[1].innerHTML = "Type of " + weather_category + ": " + weather_description;
        readings[2].innerHTML = "Wind Speed: " + wind + " metres/sec";
        readings[3].innerHTML = "Current Temperature is " + temp + " celsius";
    });
}

function draw(){
    
}