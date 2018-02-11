let weather_id = 9999;
let weather_id_check = true;
let weather_category = "null";
let weather_description = "null";
let wind = 9999;
let temp = 9999;
let temp_check = true;

function setup(){
    createCanvas(600, 600);
    let url = "https://api.openweathermap.org/data/2.5/weather?q=plymouth,uk&units=metric&APPID=842fbb38545fe9578a86fd7ce9dfb7f1";
    httpGet(url, 'jsonp', false, function(response){
        temp = response.main.temp;
        weather_id = response.weather[0].id;
        weather_category = response.weather[0].main;
        weather_description = response.weather[0].description;
        wind = response.wind.speed;
        console.log("Weather category: " + weather_category);
        console.log("Type of " + weather_category + ": " + weather_description);
        console.log("Wind speed: " + wind + " metres/sec");
    });
}

function draw(){
    background(255);
    if (temp_check == true && temp != 9999){
        console.log("Fo real the temp is " + temp);
        temp_check = false;
    }
}