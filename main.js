leftShoulderX = 0;
leftShoulderY = 0;
function preload()
{
necklace = loadImage("necklace.png");
}

function setup()
{
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose" , gotPoses);
}

function modelLoaded()
{
   console.log("poseNet is initialised"); 
}


function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
    leftShoulderX = results[0].pose.leftShoulder.x - 350;
    leftShoulderY = results[0].pose.leftShoulder.y - 200;

}
}
function draw()
{
image(video , 0,0, 300,300);
image(necklace , leftShoulderX, leftShoulderY, 100,100);
}


function takeSnapshot()
{
    save("MyFilterImage.png");
}