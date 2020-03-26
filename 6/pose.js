function setup()
{

}
function draw()
{
    
    if (keyIsPressed === true) {
        dino_runner.playSound(dino_runner.soundFx.BUTTON_PRESS);
        dino_runner.tRex.startJump(dino_runner.currentSpeed);
    } else {
        
    }
}