let uy, uz, fy, fz;
let xaxis = [];
let yaxis = [];
let zaxis = [];
let xrot=[];
let yrot=[];
let zrot=[];
let lax = [];
let lay = [];
let laz = [];
let lfax = [];
let lfay = [];
let lfaz = [];
let rax = [];
let ray = [];
let raz = [];
let rfax = [];
let rfay = [];
let rfaz = [];
let ltx = [];
let lty = [];
let ltz = [];
let llx = [];
let lly = [];
let llz = [];
let rtx = [];
let rty = [];
let rtz = [];
let rlx = [];
let rly = [];
let rlz = [];
let walktoken = [];
let bendcheck = [];
let llcheck = [];
let rlcheck = [];
let clapcheck = [];
let robots;

function robotcontrol(){
  if(frameCount % 30 == 0){
    for(let i = 0; i<robots; i++){
      if (walktoken[i] == true){
        walktoken[i] = false;
      }
      else{
        walktoken[i] = true;
        if(rlcheck[i] == true){
          rlcheck[i] = false;
          llcheck[i] = true;
        }
        else{
          rlcheck[i] = true;
          llcheck[i] = false;
        }
      }
    }
  }

  if(frameCount % 30 == 15 || frameCount % 30 == 0 ){
    for(let i = 0; i<robots; i++){
      if (bendcheck[i] == true){
        bendcheck[i] = false;
      }
      else{
        bendcheck[i] = true;
      }
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  robots = 3;
  for(let i = 0; i<robots; i++){
     xaxis[i]=0;
     yaxis[i]=0;
     zaxis[i]=0;
     xrot[i]=0;
     yrot[i]=0;
     zrot[i]=0;
     lax[i]=0;
     lay[i]=0;
     laz[i]=0;
     lfax[i]=(HALF_PI/3);
     lfay[i]=0;
     lfaz[i]=0;
     rax[i]=0;
     ray[i]=0;
     raz[i]=0;
     rfax[i]=(HALF_PI/3);
     rfay[i]=0;
     rfaz[i]=0;
     ltx[i]=0;
     lty[i]=0;
     ltz[i]=0;
     llx[i]=-(HALF_PI/4);
     lly[i]=0;
     llz[i]=0;
     rtx[i]=0;
     rty[i]=0;
     rtz[i]=0;
     rlx[i]=-(HALF_PI/4);
     rly[i]=0;
     rlz[i]=0;
     walktoken[i]=true;
     bendcheck[i]=true;
     llcheck[i] = false;
     rlcheck[i] = true;
     clapcheck[i] = false;
  }
  xaxis[0] = -400;
  xaxis[1] = 0;
  xaxis[2] = 400;
}


function draw() {
background(0);
lights();

translate(0,0,-600);
rotateX(radians(-90));
//rotateZ(radians(35));


//create robots
for(let i = 0; i<robots; i++){
  Humanoid(xaxis[i], yaxis[i], zaxis[i], xrot[i], yrot[i], zrot[i], lax[i], lay[i], laz[i], lfax[i], lfay[i], lfaz[i], rax[i], ray[i], raz[i], rfax[i], rfay[i], rfaz[i], ltx[i], lty[i], ltz[i], llx[i], lly[i], llz[i], rtx[i], rty[i], rtz[i], rlx[i], rly[i], rlz[i]);
}


//robot control part
leftsidewalk(0);
clappingarms(0);

walk(1);
waggingarms(1);

rightsidewalk(2);
walkingarms(2);

robotcontrol();
}
