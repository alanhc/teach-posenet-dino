let video;
let poseNet;

function setup()
{
    createCanvas(640,480);
    background(250);

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded()
{
    console.log('PoseNet已經載入');
    poseNet.on("pose", gotPoses);
}
function draw()
{
    image(video, 0,0);
}
function gotPoses(poses)
{
    if(poses.length>0) {
        console.log(poses[0]);
    }
}