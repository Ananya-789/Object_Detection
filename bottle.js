status = "";
img = "";

function preload(){
    img = loadImage("https://i.postimg.cc/nzBdHwHC/plastic-bottle-pic.jpg");
}

function setup(){
    canvas = createCanvas(380,320);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("h3").innerHTML = "Status : Detecting Objects";
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