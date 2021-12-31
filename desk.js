function nav_to(){
    window.location = "index.html";
}

status = "";
img = "";

function preload(){
    img = loadImage("https://i.postimg.cc/cH2DZGyq/desk-picture.jpg");
}

function setup(){
    canvas = createCanvas(380,320);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    status = true;
    console.log("Model Loaded!");
    objectDetector.detect(img , gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}