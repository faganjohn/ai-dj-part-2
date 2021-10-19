var song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);

}
function draw(){
    image(video,0,0,600,500);
    fill("red");
    stroke("red");
if(scoreLeftWrist>0.2){


    circle(leftWristX,leftWristY,20);
    InNumberleftWristY=Number(leftWristY);
    remove_decimals=floor(InNumberleftWristY);
    volume=remove_decimals/500;
    document.getElementById("volume").innerHTML="volume ="+volume;
    song.setVolume(volume);}
}
function preload(){
    song=loadSound("music.mp3");
}

function play(){
    song.play();
}