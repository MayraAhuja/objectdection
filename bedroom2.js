image1111="";
modelStatus="";
resultsArray=[];

function preload() {
    image1111=loadImage("bedroom.jpeg");
}


function setup() {
    canvas=createCanvas(700,500);
    canvas.center();
    model=ml5.objectDetector("cocossd", ml);
}


function ml() {
    console.log("model loaded!!!");
    document.getElementById("status").innerHTML="Detecting objects...";
    modelStatus=true;
    model.detect(image1111, results);
}


function results(errorArray, resultsArray1) {
    if (errorArray) {
        console.error(errorArray);
    } else {
        console.log(resultsArray1);
        resultsArray=resultsArray1;
    }
}

function back() {
    window.location="home.html";
}


function draw() {
    image(image1111,0,0,700,500);
    if (modelStatus != "") {
      for (h=0; h<resultsArray.length; h=h+1){
        document.getElementById("status").innerHTML="Objects Dectected!!!!";
        stroke("fuchsia");
        fill("fuchsia");
        confidence= Math.floor(resultsArray[h].confidence*100); 
        text(confidence+"% "+ resultsArray[h].label, resultsArray[h].x, resultsArray[h].y);
        noFill();
        stroke("fuchsia");
        rect( resultsArray[h].x, resultsArray[h].y, resultsArray[h].width, resultsArray[h].height);
      }
      }  
}


    