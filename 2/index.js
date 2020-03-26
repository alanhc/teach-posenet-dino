function setup()
{
    createCanvas(640,480);
    background(250);

    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0,0);
}