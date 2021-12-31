function navigation(){
    window.location = "index.html";
}

status = "";
img = "";

function preload(){
    img = loadImage("https://i.postimg.cc/ry4jWb2m/pencil-case-img.jpg");
}

function setup(){
    canvas = createCanvas(380,320);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_class").innerHTML = "Status : Detecting Objects";
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