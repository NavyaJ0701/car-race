 canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width=100;
car1_height=90;

car2_width=100;
car2_height=90;

 background_img="background!.jpeg";

 car1_img="car1.png";
 car2_img="car2.jpeg";

car1_x=10;
car1_y=10;

car2_x=10;
car2_y=110;

function add(){
     background_image=new Image();
    background_image.onload=uploadBackground;
    background_image.src=background_img;

     car1_image=new Image();
     car1_image.onload=uploadcar1;
     car1_image.src=car1_img;

     car2_image=new Image();
     car2_image.onload=uploadcar2;
     car2_image.src=car2_img;
}
function uploadBackground(){
    ctx.drawImage(background_image,0,0,canvas.width,canvas.height); 
}
function uploadcar1(){
    ctx.drawImage(car1_image,car1_x,car1_y,car1_width,car1_height);  
}

function uploadcar2(){
    ctx.drawImage(car2_image,car2_x,car2_y,car2_width,car2_height);  
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
var key_press=e.keyCode;
console.log(key_press);

if(key_press=="38"){
    up1();
    console.log("up");

}
if(key_press=="40"){
    down1();
    console.log("down");
    
}
if(key_press=="37"){
    left1();
    console.log("left");
    
}
if(key_press=="39"){
    right1();
    console.log("right");
    
}
if(key_press=="87"){
    up2();
    console.log("up");

}
if(key_press=="83"){
    down2();
    console.log("down");
    
}
if(key_press=="65"){
    left2();
    console.log("left");
    
}
if(key_press=="68"){
    right2();
    console.log("right");
    
}

}
function up1(){
    if (car1_y >= 0){
        car1_y=car1_y-10;
        console.log("when up is pressed, x="+car1_x+" and y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function down1(){
    if (car1_y <= 500){
        car1_y=car1_y+10;
        console.log("when down is pressed, x="+car1_x+" and y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function right1(){
    if (car1_x <= 700){
        car1_x=car1_x+10;
        console.log("when right is pressed, x="+car1_x+" and y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}
function left1(){
    if (car1_x >= 0){
        car1_x=car1_x-10;
        console.log("when left is pressed, x="+car1_x+" and y="+car1_y);
        uploadBackground();
        uploadcar1();
    }
}

function up2(){
    if (car2_y >= 0){
        car2_y=car2_y-10;
        console.log("when up is pressed, x="+car2_x+" and y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function down2(){
    if (car2_y <= 500){
        car2_y=car2_y+10;
        console.log("when down is pressed, x="+car2_x+" and y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function right2(){
    if (car2_x <= 700){
        car2_x=car2_x+10;
        console.log("when right is pressed, x="+car2_x+" and y="+car2_y);
        uploadBackground();
        uploadcar2();
    }
}
function left2(){
    if (car2_x >= 0){
        car2_x=car2_x-10;
        console.log("when left is pressed, x="+car2_x+" and y="+car2_y);
        uploadBackground()
        uploadcar2();
    }
}