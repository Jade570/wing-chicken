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
//let ltz = [robots];
let llx = [robots];
//let lly = [robots];
//let llz = [robots];
let rtx = [robots];
let rty = [robots];
//let rtz = [robots];
let rlx = [robots];
//let rly = [robots];
//let rlz = [robots];
let walktoken = [robots];
let bendcheck = [robots];
let llcheck = [robots];
let rlcheck = [robots];

let armposition = [robots];
let legposition = [robots];
let armreset = [robots];
let legreset = [robots];
let kicktoken = [robots];
let snaretoken = [robots];

let controller1, controller2, controller3;
let walk_;
let rightsidewalk_;
let leftsidewalk_;
let rhythm_;
let leftsiderhythm_;
let rightsiderhythm_;
let rightturn_;
let leftturn_;
let walkingarms_;
let waggingarms_;
let clappingarms_;
let raisearms_;
let raiseleftarm_;
let raiserightarm_;

let font;

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


function preload(){
  walk_ = loadImage("assets/walk.jpg");
  rightsidewalk_ = loadImage("assets/rightsidewalk.jpg");
  leftsidewalk_ = loadImage("assets/leftsidewalk.jpg");
  rhythm_ = loadImage("assets/rhythm.jpg");
  leftsiderhythm_ = loadImage("assets/leftsiderhythm.jpg");
  rightsiderhythm_ = loadImage("assets/rightsiderhythm.jpg");
  rightturn_ = loadImage("assets/rightturn.jpg");
  leftturn_ = loadImage("assets/leftturn.jpg");
  walkingarms_ = loadImage("assets/walkingarms.jpg");
  waggingarms_ = loadImage("assets/waggingarms.jpg");
  clappingarms_ = loadImage("assets/clappingarms.jpg");
  raisearms_ = loadImage("assets/raisearms.jpg");
  raiseleftarm_ = loadImage("assets/raiseleftarm.jpg");
  raiserightarm_ = loadImage("assets/raiserightarm.jpg");
  font = loadFont('assets/ARCADE_N.TTF');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(50);
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
     //ltz[i]=0;
     llx[i]=-(HALF_PI/4);
     //lly[i]=0;
     //llz[i]=0;
     rtx[i]=0;
     rty[i]=0;
     //rtz[i]=0;
     rlx[i]=-(HALF_PI/4);
     //rly[i]=0;
     //rlz[i]=0;
     walktoken[i]=true;
     bendcheck[i]=true;
     llcheck[i] = false;
     rlcheck[i] = true;
     armposition[i] = 0;
     legposition[i] = 0;
     legreset[i] = false;
     armreset[i] = false;
     kicktoken[i] = false;
     snaretoken[i] = false;
  }
}


function draw() {
  background(0);
  lights();

  textSize(8);
  textFont(font);
  fill(176, 111, 111);
  square(-windowWidth/2+20,-windowHeight/2+20,10);
  fill(200,200,200);
  text(":only plays drum",-windowWidth/2+35,-windowHeight/2+28);
  controller1 = new Controller(-windowWidth/2,windowHeight/4, 1);
  controller2 = new Controller(-100,windowHeight/4, 2);
  controller3 = new Controller(windowWidth/2-200,windowHeight/4, 3);


  
  translate(0,-100,-800);
  rotateX(radians(-90));
  //rotateZ(radians(35));
  push();
  fill(200,200,200);
  //strokeWeight(5);
  noStroke();
  translate(0,300,420);
  rotateX(radians(90));
  cylinder(1000,200);
  pop();
  //create robots
  for(let i = 0; i<robots; i++){
    push();
    translate(-400+(400*i),0,0);
    Humanoid(xaxis[i], yaxis[i], zaxis[i], xrot[i], yrot[i], zrot[i], lax[i], lay[i], laz[i], lfax[i], lfay[i], lfaz[i], rax[i], ray[i], raz[i], rfax[i], rfay[i], rfaz[i], ltx[i], lty[i], /*ltz[i],*/ llx[i], /*lly[i], llz[i],*/ rtx[i], rty[i], /*rtz[i],*/ rlx[i], /*rly[i], rlz[i]*/);
    pop();
  }


  //robot control part
  for (let i = 0; i<robots; i++){
    switch (legposition[i]){
      case 1:
      walk(i);
      break;

      case 2 :
      rightsidewalk(i);
      break;

      case 3:
      leftsidewalk(i);
      break;

      case 4:
      rhythm(i);
      break;

      case 5 :
      leftsiderhythm(i);
      break;

      case 6:
      rightsiderhythm(i);
      break;

      case 7:
      rightturn(i);
      break;

      case 8:
      leftturn(i);
      break;

      default:
      break;
    }
    switch (armposition[i]){
      case 1:
      walkingarms(i);
      break;

      case 2 :
      waggingarms(i);
      break;

      case 3:
      raisearms(i);
      break;

      case 4:
      raiseleftarm(i);
      break;

      case 5 :
      raiserightarm(i);
      break;

      case 6:
      clappingarms(i);
      break;

      default:
      break;
    }
  }

  robotcontrol();
}
