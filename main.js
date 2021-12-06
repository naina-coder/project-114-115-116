noseX = 0;
noseY = 0;


function preload()
{
 clown_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}

function modelLoaded()
{
    console.log("Pose is Intialized");
}

function draw()
{
 image(video,0, 0, 300, 300);
 image(clown_nose, noseX, noseY, 70, 50);
}

function take_snapshot()
{
    save('You_Have_a_Giant_Moustache.png');
}

function gotPose(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-33;
        noseY = results[0].pose.nose.y-10;

        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y = " + results[0].pose.nose.y);

        
    }
}