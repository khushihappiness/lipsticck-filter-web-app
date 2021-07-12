function preload()
{

}
function setup()
{
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log(" The poseNet model is loaded")
}

function draw()
{
    image(video,0,0, 400,400)
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results)
    console.log("The lips x=" + results[0].pose.lips.x);
    console.log("The lips y=" + results[0].pose.lips.y);


}
}
function take_snapshot()
{
    save("lipstick_filter.png")
}