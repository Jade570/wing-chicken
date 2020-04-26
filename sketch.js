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

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  for(let i = 0; i<2; i++){
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
  xaxis[0] = -200;
  xaxis[1] = 200;
}


function draw() {
background(255);
lights();

rotateX(radians(-90));
//rotateZ(radians(90));
// draw a grid on xy plane


let h1 = Humanoid(xaxis[0], yaxis[0], zaxis[0], xrot[0], yrot[0], zrot[0], lax[0], lay[0], laz[0], lfax[0], lfay[0], lfaz[0], rax[0], ray[0], raz[0], rfax[0], rfay[0], rfaz[0], ltx[0], lty[0], ltz[0], llx[0], lly[0], llz[0], rtx[0], rty[0], rtz[0], rlx[0], rly[0], rlz[0]);
let h2 = Humanoid(xaxis[1], yaxis[1], zaxis[1], xrot[1], yrot[1], zrot[1], lax[1], lay[1], laz[1], lfax[1], lfay[1], lfaz[1], rax[1], ray[1], raz[1], rfax[1], rfay[1], rfaz[1], ltx[1], lty[1], ltz[1], llx[1], lly[1], llz[1], rtx[1], rty[1], rtz[1], rlx[1], rly[1], rlz[1]);

rightsidewalk(0);
//waggingarms(0);
walk(1);

if(frameCount % 30 == 0){
  for(let i = 0; i<2; i++){
    if (walktoken[i] == true){
      walktoken[i] = false;
    }
    else{
      walktoken[i] = true;
    }
  }
}

if(frameCount % 30 == 15 || frameCount % 30 == 0 ){
  for(let i = 0; i<2; i++){
    if (bendcheck[i] == true){
      bendcheck[i] = false;
    }
    else{
      bendcheck[i] = true;
    }
  }
}




}
