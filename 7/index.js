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
    pose_pre = 0;
    pose_pre = 0;
    y_sh=0;
}

function modelLoaded()
{
    console.log('PoseNet已經載入');
}
let pose;

let pose_pre;
let pose_now;
let y_sh;
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
        pose_now = pose.nose.y;
        y_sh = pose_now - pose_pre;
        if (frameCount%2==0) {
            pose_pre = pose_now;
            fill(0);
            if (y_sh>20) {
                text("跳", pose.nose.x, pose.nose.y);
                console.log("跳")
            } else {
                text("", pose.nose.x, pose.nose.y);
            }
            console.log(y_sh);
        }
        
        
       
    }
    
}

function gotPoses(poses)
{
    if (poses.length>0) {
        pose = poses[0].pose;
    }
}