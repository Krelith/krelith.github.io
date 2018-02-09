let clear = false;
let cloudy = false;
let storm = false;

function preload(){
    let url = "http://api.openweathermap.org/data/2.5/weather?q=plymouth,uk&units=metric&APPID=842fbb38545fe9578a86fd7ce9dfb7f1";
    httpGet(url, 'jsonp', false, function(response){
        let result = response.weather[0].id;
        console.log(result);
        if (result > 800){
            cloudy = true;
        } else
        if (result == 800){
            clear = true;
        } else
        if (result >= 200 && result < 300){
            storm = true;
        }
    });
}

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(255);
    if (cloudy == true){
        console.log("The weather is cloudy");   
        cloudy = false; // Prevents the call from occurring more than once due to draw loop.
    } else 
    if (clear == true){
        console.log("The weather is clear");
        clear = false;
    }
    if (storm == true){
        console.log("The weather is stormy");
        stormy = false;
    }
}