/*
class Humanoid {
  constructor (xaxis,yaxis, zaxis, xrot, yrot, zrot, lax, lay, laz, lfax, lfay, lfaz, rax, ray, raz, rfax, rfay, rfaz, ltx, lty, ltz, llx, lly, llz, rtx, rty, rtz, rlx, rly, rlz){
    this.xaxis = xaxis;
    this.yaxis = yaxis;
    this.zaxis = zaxis;
    this.xrot=xrot;
    this.yrot=yrot;
    this.zrot=zrot;
    this.lax = lax;
    this.lay = lay;
    this.laz = laz;
    this.lfax = lfax;
    this.lfay = lfay;
    this.lfaz = lfaz;
    this.rax = rax;
    this.ray = ray;
    this.raz = raz;
    this.rfax = rfax;
    this.rfay = rfay;
    this.rfaz = rfaz;
    this.ltx = ltx;
    this.lty = lty;
    this.ltz = ltz;
    this.llx = llx;
    this.lly = lly;
    this.llz = llz;
    this.rtx = rtx;
    this.rty = rty;
    this.rtz = rtz;
    this.rlx = rlx;
    this.rly = rly;
    this.rlz = rlz;

    push();
      push();
      translate(this.xaxis,this.yaxis,this.zaxis-200);
      head();
      push();
      translate(0,0,150);
      body();
      pop();
      pop();

      translate(this.xaxis,this.yaxis,this.zaxis-130);
      push();
      translate(-100,0,0);
      this.leftarm = Limb(this.lax, this.lay, this.laz, 35,30,30,100);
      translate(0,0,50);
      this.leftforearm = Limb(this.lfax,this.lfay,this.lfaz,25,30,30,100);
      pop();

      push();
      translate(100,0,0);
      this.rightarm = Limb(this.rax,this.ray,this.raz,35,30,30,100);
      translate(0,0,50);
      this.rightforearm = Limb(this.rfax,this.rfay,this.rfaz,25,30,30,100);
      pop();

      push();
      translate(-40,0,180);
      this.leftthigh = Limb(this.ltx,this.lty,this.ltz,20,50,50,100);
      translate(0,0,50);
      this.leftleg = Limb(this.llx,this.lly,this.llz,40,50,50,100);
      translate(0,-20,10);
      this.leftfoot = Limb(0,0,0,0,70,120,30);
      pop();

      push();
      translate(40,0,180);
      this.rightthigh = Limb(this.rtx,this.rty,this.rtz,20,50,50,100);
      translate(0,0,50);
      this.rightleg = Limb(this.rlx,this.rly,this.rlz,40,50,50,100);
      translate(0,-20,10);
      this.rightfoot = Limb(0,0,0,0,70,120,30);
      pop();
    pop();
  }



  render(){
    push();
    translate(this.xaxis,this.yaxis,this.zaxis-200);
    this.head();
    push();
    translate(0,0,150);
    this.body();
    pop();
    pop();
  }
}
*/
function Humanoid (xaxis,yaxis, zaxis, xrot, yrot, zrot, lax, lay, laz, lfax, lfay, lfaz, rax, ray, raz, rfax, rfay, rfaz, ltx, lty, ltz, llx, lly, llz, rtx, rty, rtz, rlx, rly, rlz){
  push();

    push();
    translate(xaxis,yaxis,zaxis-200);
    rotateX(xrot);
    rotateY(yrot);
    rotateZ(zrot);

    head();
    push();
    translate(0,0,150);
    body();
    pop();
    pop();

    translate(xaxis,yaxis,zaxis-130);
    push();
    translate(-100,0,0);
    let leftarm = Limb(lax, lay, laz, 35,30,30,100);
    translate(0,0,50);
    let leftforearm = Limb(lfax,lfay,lfaz,25,30,30,100);
    pop();

    push();
    translate(100,0,0);
    let rightarm = Limb(rax,ray,raz,35,30,30,100);
    translate(0,0,50);
    let rightforearm = Limb(rfax,rfay,rfaz,25,30,30,100);
    pop();

    push();
    translate(-40,0,180);
    let leftthigh = Limb(ltx,lty,ltz,20,50,50,100);
    translate(0,0,50);
    let leftleg = Limb(llx,lly,llz,40,50,50,100);
    translate(0,-20,10);
    let leftfoot = Limb(0,0,0,0,70,120,30);
    pop();

    push();
    translate(40,0,180);
    let rightthigh = Limb(rtx,rty,rtz,20,50,50,100);
    translate(0,0,50);
    let rightleg = Limb(rlx,rly,rlz,40,50,50,100);
    translate(0,-20,10);
    let rightfoot = Limb(0,0,0,0,70,120,30);
    pop();
  pop();
}



function Limb (xrot, yrot, zrot, rad, w, h, d) {
    rotateX(xrot);
    rotateY(yrot);
    rotateZ(zrot);
    noStroke();
    fill(128,128,128);
    sphere(rad);
    translate(0,0,50);
    fill(0, 255, 255);
    box(w, h, d);
}

function head(){
  noStroke();
  fill(14, 230, 57);
  box(100,100,80);

  push(); //ears
  translate(-60,0,0);
  rotateZ(HALF_PI);
  cylinder(25);
  pop();
  push();
  translate(60,0,0);
  rotateZ(HALF_PI);
  cylinder(25);
  pop();

  push();   //T accessory
  fill(255,255,255);
  translate(0,-50,-25);
  box(85,10,12);

    push();
    fill(0,0,0);
    translate(-35,-4,0);
    cylinder(3);
    translate(17.5,0,0);
    cylinder(3);
    translate(17.5,0,0);
    cylinder(3);
    translate(17.5,0,0);
    cylinder(3);
    translate(17.5,0,0);
    cylinder(3);
    pop();

  translate(0,0,15);
  box(12,10,40);

  push();
  fill(0,0,0);
  translate(0,-4,0);
  cylinder(3);
  translate(0,0,15);
  cylinder(3);
  pop();

  translate(0,0,8); //eyes
  fill(255,0,0);
  push();
  translate(-27,0,0);
  sphere(15);
  pop();
  push();
  translate(27,0,0);
  sphere(15);
  pop();

  translate(0,0,30);
  fill(255,255,255);
  box(62,10,17);
  push();
  fill(0,0,0);
  translate(-25,-1,0);
  box(4,10,14);
  translate(12.5,0,0);
  box(4,10,14);
  translate(12.5,0,0);
  box(4,10,14);
  translate(12.5,0,0);
  box(4,10,14);
  translate(12.5,0,0);
  box(4,10,14);
  pop();
  pop();
}

function body(){
  noStroke();
  box(150,150,200);
}






function walk (i){
  if(bendcheck[i] == true){
    if(zaxis[i]<50){
      zaxis[i]+=(50*sin(radians(2)));
      xrot[i]-=(radians(0.1));
    }
    else{
      bendcheck[i] = false;
    }
  }
  else{
    if(zaxis[i]>0){
      zaxis[i]-=(50*sin(radians(2)));
      xrot[i]+=(radians(0.1));
    }
    else{
      bendcheck[i] = true;
    }
  }

  if(walktoken[i] == true){
    if(rtx[i]<HALF_PI/2){
      rtx[i]+=(radians(2));
      ltx[i]-=(radians(2));
      rax[i]-=(radians(2));
      lax[i]+=(radians(2));
    }
    else{
      walktoken[i] = false;
      console.log('a');
    }
  }
  else{
    if(ltx[i]<(HALF_PI/2)){
      rtx[i]-=(radians(2));
      ltx[i]+=(radians(2));
      rax[i]+=(radians(2));
      lax[i]-=(radians(2));
    }
    else{
      walktoken[i] = true;
      console.log('a');
    }
  }
}

function rightsidewalk (i){
  if(walktoken[i] == true){
    if(rty[i]<HALF_PI/4 && rlcheck[i] == true){
      rty[i]+=(radians(1));
    }
    else if(lty[i]>-(HALF_PI/4) && llcheck[i] == true){
      lty[i]-=(radians(1));
    }
    else{
      walktoken[i] = false;
      console.log("b");
    }
  }
  else{
    if(rlcheck[i] == true){
      if(rty[i]>0){
        rty[i]-=(radians(1));
      }
      else{
        walktoken[i] = true;
        rlcheck[i] = false;
        llcheck[i] = true;

      }
    }
    else if(llcheck[i] == true){
      if(lty[i]<0){
      lty[i]+=(radians(1));
      }
      else{
        walktoken[i] = true;
        rlcheck[i] = true;
        llcheck[i] = false;
      }
    }
  }
}

function waggingarms(i){
  if(walktoken[i] == true){
    ray[i]+=(radians(1));
    lay[i]-=(radians(1));
  }
  else{
    ray[i]-=(radians(0.5));
    lay[i]+=(radians(0.5));
  }
}

function clap(i){

  if(lax[i]<radians(45)){
    ray[i]-=radians(1);
    lay[i]+=radians(1);
    rfay[i]-=(radians(4.5));
    lfay[i]+=(radians(4.5));
    lax[i]+=radians(4.5);
    rax[i]+=radians(4.5);
  }
  else if(lax[i]>radians(45)){
    ray[i]+=radians(1);
    lay[i]-=radians(1);
    rfay[i]+=(radians(4.5));
    lfay[i]-=(radians(4.5));
    lax[i]-=radians(4.5);
    rax[i]-=radians(4.5);
  }


  if(walktoken[i] == true){
    ray[i]+=(radians(0.5));
    lay[i]-=(radians(0.5));
    rfay[i]+=(radians(1));
    lfay[i]-=(radians(1));
  }
  else{
    ray[i]-=(radians(0.5));
    lay[i]+=(radians(0.5));
    rfay[i]-=(radians(1));
    lfay[i]+=(radians(1));
  }
}
