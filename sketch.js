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
let stop_;

let tx, ty, tz, rx, ry, rz;

let font;
let lightdirection;

let lightbulb = [10];
let red = [robots];
let green = [robots];
let blue = [robots];


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
  stop_ = loadImage("assets/stop.jpg");
  font = loadFont('assets/ARCADE_N.TTF');
}

function setup() {
  tx = 0;
  ty = -100;
  tz = -800;
  rx=0;
  ry=0;
  rz=0;
  lightdirection = 0;
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(50);

  for(let i = 0; i<10; i++){
    lightbulb[i] = random(360);
  }

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

  red[0] = 132
  green[0] =100
  blue[0] =  100
  red[1] =5
  green[1] =100
  blue[1] = 100
  red[2] =245
  green[2] =100
  blue[2] = 100
}


function draw() {
  background(0);
  //light part
  lights();
  specularColor(255,255,255);
  directionalLight(255,255,255,1025*cos(lightdirection+=HALF_PI/360), -100, 1025*sin(lightdirection+=HALF_PI/360));
  shininess(100);

  //ui part
  textSize(8);
  textFont(font);
  fill(176, 111, 111);
  square(-windowWidth/2+20,-windowHeight/2+20,10);
  fill(200,200,200);
  text(":only plays drum",-windowWidth/2+35,-windowHeight/2+28);
  text("drag: move stage",-windowWidth/2+20,-windowHeight/2+43);
  text("ctrl+drag: rotation",-windowWidth/2+20,-windowHeight/2+58);
  controller1 = new Controller(-windowWidth/2,windowHeight/4, 1);
  controller2 = new Controller(-125,windowHeight/4, 2);
  controller3 = new Controller(windowWidth/2-250,windowHeight/4, 3);

  //translate part
  translate(tx, ty, tz);
  rotateX(radians(-90)+rx);
  rotateY(ry);
  rotateZ(rz);

  //stage part
  push();
  fill(200,200,200);
  noStroke();
  translate(0,200,400);
  rotateX(radians(90));
  cylinder(800,200);
  colorMode(HSB);

  for(let i = 0; i<10; i++){
    push();
    translate(825*cos(PI/5*i), -100, 825*sin(PI/5*i));
    fill(lightbulb[i], 80, 100, 0.3);
    specularMaterial(lightbulb[i], 80, 100, 0.3);
    sphere(25,8,8);
    pop();
  }
  pop();

  //create robots
  for(let i = 0; i<robots; i++){
    push();
    translate(-500+(500*i),0,20);
    Humanoid(red[i], green[i], blue[i] ,xaxis[i], yaxis[i], zaxis[i], xrot[i], yrot[i], zrot[i], lax[i], lay[i], laz[i], lfax[i], lfay[i], lfaz[i], rax[i], ray[i], raz[i], rfax[i], rfay[i], rfaz[i], ltx[i], lty[i], /*ltz[i],*/ llx[i], /*lly[i], llz[i],*/ rtx[i], rty[i], /*rtz[i],*/ rlx[i], /*rly[i], rlz[i]*/);
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
      stoplegs(i);
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
      stoparms(i);
      break;
    }
  }
  robotcontrol();
}

function mouseDragged(){
  tx+=(mouseX-pmouseX);
  ty+=(mouseY-pmouseY);
  if(keyIsPressed && keyCode === CONTROL){
    rz+=(mouseX-pmouseX)/100;
    rx+=(mouseY-pmouseY)/100;
  }
}

function mouseWheel(event){
  tz+=(event.delta);
}
