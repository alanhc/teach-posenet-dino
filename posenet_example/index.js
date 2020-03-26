let video;
let poseNet;

function setup()
{
    createCanvas(640,480);
    background(250);

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet已經載入');
}
let pose;
function draw()
{
    image(video, 0,0);
    if (pose) {
        fill(255,0,0);
        circle(pose.nose.x, pose.nose.y, 50);
        for (let i=0; i<pose.keypoints.length; i++) {
            let x = pose.keypoints[i].position.x;
            let y = pose.keypoints[i].position.y;
            fill(0,255,0);
            circle(x,y,10);
        }
    }
    
    
}

function gotPoses(poses)
{
    if (poses.length>0) {
        pose = poses[0].pose;
    }
}