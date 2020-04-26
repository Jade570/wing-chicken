const robots = 3;
let xaxis = [robots];
let yaxis = [robots];
let zaxis = [robots];
let xrot=[robots];
let yrot=[robots];
let zrot=[robots];
let lax = [robots];
let lay = [robots];
let laz = [robots];
let lfax = [robots];
let lfay = [robots];
let lfaz = [robots];
let rax = [robots];
let ray = [robots];
let raz = [robots];
let rfax = [robots];
let rfay = [robots];
let rfaz = [robots];
let ltx = [robots];
let lty = [robots];
let ltz = [robots];
let llx = [robots];
let lly = [robots];
let llz = [robots];
let rtx = [robots];
let rty = [robots];
let rtz = [robots];
let rlx = [robots];
let rly = [robots];
let rlz = [robots];
let walktoken = [robots];
let bendcheck = [robots];
let llcheck = [robots];
let rlcheck = [robots];
let armposition = [robots];
let armreset = [robots];
let legreset = [robots];
let kicktoken = [robots];
let snaretoken = [robots];


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
  frameRate(60);
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
     armposition[i] = 0;
     legreset[i] = false;
     armreset[i] = false;
     kicktoken[i] = false;
     snaretoken[i] = false;
  }
  xaxis[0] = -400;
  xaxis[1] = 0;
  xaxis[2] = 400;
}


function draw() {
  background(0);
  lights();

  translate(0,0,-800);
  rotateX(radians(-90));
  //rotateZ(radians(35));


  //create robots
  for(let i = 0; i<robots; i++){
    push();
    translate(-400+(400*i),0,0);
    Humanoid(xaxis[i], yaxis[i], zaxis[i], xrot[i], yrot[i], zrot[i], lax[i], lay[i], laz[i], lfax[i], lfay[i], lfaz[i], rax[i], ray[i], raz[i], rfax[i], rfay[i], rfaz[i], ltx[i], lty[i], ltz[i], llx[i], lly[i], llz[i], rtx[i], rty[i], rtz[i], rlx[i], rly[i], rlz[i]);
    pop();
  }


  //robot control part
  //leftsidewalk(0);
  clappingarms(0);
  leftturn(0);
  //rightturn(1);
  walk(1);
  //waggingarms(1);
  //rhythm(1);
  //raisearms(1);
  raiseleftarm(1);

  rightturn(2);
  //rightsidewalk(2);
  walkingarms(2);

  switch (armposition[1]){
    case 1:
    walk(1);
    break;

    case 2 :
    rightsidewalk(1);
    break;

    case 3:
    leftsidewalk(1);
    break;

    case 4:
    rhythm(1);
    break;

    case 5 :
    leftsiderhythm(1);
    break;

    case 6:
    rightsiderhythm(1);
    break;

    default:
    break;
  }




  robotcontrol();
}


function keyPressed() {
  switch (key){
    case '1':
    legreset[1] = false;
    armposition[1] = 1;
    break;

    case '2' :
    legreset[1] = false;
    armposition[1] = 2;
    break;

    case '3':
    legreset[1] = false;
    armposition[1] = 3;
    break;

    case '4':
    legreset[1] = false;
    armposition[1] = 4;
    break;

    case '5' :
    legreset[1] = false;
    armposition[1] = 5;
    break;

    case '6':
    legreset[1] = false;
    armposition[1] = 6;
    break;
  }
}
