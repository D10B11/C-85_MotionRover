Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");
Roverwidth=110;
Roverhieght=99;
Roverx=17;
Rovery=15;
background_image="mars.jpg";
rover_image="rover.png";
function add()
{
  background_img=new Image();
  background_img.onload=upload_background;
  background_img.src=background_image;
  
  rover_img=new Image();
  rover_img.onload=upload_rover;
  rover_img.src=rover_image;
} 
function upload_background()
{
   ctx.drawImage(background_img,0,0,Canvas.width,Canvas.height);
}

function upload_rover()
{
   ctx.drawImage(rover_img,Roverx,Rovery,Roverwidth,Roverhieght);
}
   
window.addEventListener("keydown",digkeydown);
function digkeydown(e) 
{
    key_pressed=e.keyCode;console.log(key_pressed);
    if (key_pressed=="38")
{
    up();
    console.log("up");
}

if (key_pressed=="40")
{
    down();
    console.log("down");
}


if (key_pressed=="37")
{
    left();
    console.log("left");
}

if (key_pressed=="39")
{
    right();
    console.log("right");
}
}

function up() 
{
    if
    (
        Rovery>=0
        
    )
    {
       Rovery=Rovery-10;
       console.log("when up pressed x= "+Roverx+" y= "+Rovery);
       upload_background();
       upload_rover();

    }
}

function down() 
{
    if
    (
        Rovery<=550
        
    )
    {
       Rovery=Rovery+10;
       console.log("when down pressed x= "+Roverx+" y= "+Rovery);
       upload_background();
       upload_rover();

    }
}

function left() 
{
    if
    (
        Roverx>=0
        
    )
    {
       Roverx=Roverx-10;
       console.log("when left pressed x= "+Roverx+" y= "+Rovery);
       upload_background();
       upload_rover();
    }
}

function right() 
{
    if
    (
        Roverx<=750
        
    )
    {
       Roverx=Roverx+10;
       console.log("when right pressed x= "+Roverx+" y= "+Rovery);
       upload_background();
       upload_rover();

    }
}

mars_angleimages_array=["camera1.jpg","camera2.jpg","camera3.jpg","camera4.jpg"];
ramdom_number=Math.floor(Math.random()*4);
background_image=mars_angleimages_array[ramdom_number];
console.log("background_image"+background_image);











