function preload()
{
lipstick=loadImage("https://i.postimg.cc/qvJtKMcz/l1.png")
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
lipstick_x=0;
lipstick_y=0;
function draw()
{
    image(video,0,0, 400,400)
    image(lipstick, lipstick_x, lipstick_y,30,30)
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results)
    lipstick_x=results[0].pose.nose.x;
    lipstick_y=results[0].pose.nose.y;
    console.log("The lips x=" + lipstick_x+10);
    console.log("The lips y=" + lipstick_y+10);
 
;


}
}
function take_snapshot()
{
    save("lipstick_filter.png")
}