//building robot
function Humanoid (xaxis,yaxis, zaxis, xrot, yrot, zrot, lax, lay, laz, lfax, lfay, lfaz, rax, ray, raz, rfax, rfay, rfaz, ltx, lty, /*ltz,*/ llx, /*lly, llz,*/ rtx, rty, /*rtz,*/ rlx, /*rly, rlz*/){
  push();
  translate(xaxis,yaxis,zaxis);
  rotateX(xrot);
  rotateY(yrot);
  rotateZ(zrot);
    push();
    translate(0,0,-200);
    head();
    push();
    translate(0,0,150);
    body();
    pop();
    pop();

    translate(0,0,-130);
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
    let leftthigh = Limb(ltx,lty,0,20,50,50,100);
    translate(0,0,50);
    let leftleg = Limb(llx,0,0,40,50,50,100);
    translate(0,-20,10);
    let leftfoot = Limb(0,0,0,0,70,120,30);
    pop();

    push();
    translate(40,0,180);
    let rightthigh = Limb(rtx,rty,0,20,50,50,100);
    translate(0,0,50);
    let rightleg = Limb(rlx,0,0,40,50,50,100);
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
    sphere(rad, 12, 12);
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
  cylinder(25,25,12,1);
  pop();
  push();
  translate(60,0,0);
  rotateZ(HALF_PI);
  cylinder(25,25,12,1);
  pop();

  push();   //T accessory
  fill(255,255,255);
  translate(0,-50,-25);
  box(85,10,12);

    push();
    fill(0,0,0);
    translate(-35,-4,0);
    cylinder(3,3,12,1);
    translate(17.5,0,0);
    cylinder(3,3,12,1);
    translate(17.5,0,0);
    cylinder(3,3,12,1);
    translate(17.5,0,0);
    cylinder(3,3,12,1);
    translate(17.5,0,0);
    cylinder(3,3,12,1);
    pop();

  translate(0,0,15);
  box(12,10,40);

  push();
  fill(0,0,0);
  translate(0,-4,0);
  cylinder(3,3,12,1);
  translate(0,0,15);
  cylinder(3,3,12,1);
  pop();

  translate(0,0,8); //eyes
  fill(255,0,0);
  push();
  translate(-27,0,0);
  sphere(15,12,12);
  pop();
  push();
  translate(27,0,0);
  sphere(15,12,12);
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

//leg movement
function walk(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }

  if(walktoken[i] == true){
    if(rtx[i]<HALF_PI/2 && rlcheck[i] == true){
      rtx[i]+=(radians(4));
      ltx[i]-=(radians(4));
      rlx[i]-=(radians(4));
      llx[i]-=(radians(2));
      zaxis[i]+=(50*sin(radians(2)));
      xrot[i]-=(radians(1));
      kicktoken[i] = true;

    }
    else if(ltx[i]<(HALF_PI/2) && llcheck[i] == true){
      rtx[i]-=(radians(4));
      ltx[i]+=(radians(4));
      rlx[i]-=(radians(2));
      llx[i]-=(radians(4));
      zaxis[i]+=(50*sin(radians(2)));
      xrot[i]-=(radians(1));
      kicktoken[i] = true;

    }
    else if(rtx[i]>=HALF_PI/2 && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
    else if(ltx[i]>=(HALF_PI/2) && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("B1", "8n", "+0" , 0.5);
    }
  }
  else{
    if(rtx[i]>radians(4) && rlcheck[i] == true){
        rtx[i]-=(radians(4));
        ltx[i]+=(radians(4));
        rlx[i]+=(radians(4));
        llx[i]+=(radians(2));
        zaxis[i]-=(50*sin(radians(2)));
        xrot[i]+=(radians(1));
        kicktoken[i] = true;

    }
    else if(ltx[i]>0 && llcheck[i] == true){
        rtx[i]+=(radians(4));
        ltx[i]-=(radians(4));
        rlx[i]+=(radians(2));
        llx[i]+=(radians(4));
        zaxis[i]-=(50*sin(radians(2)));
        xrot[i]+=(radians(1));
        kicktoken[i] = true;

    }
    else if(rtx[i]<=radians(4) && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("G1", "8n", "+0" , 0.5);
    }
    else if(ltx[i]<=0 && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("G1", "8n", "+0" , 0.5);
    }
  }
}
function rightsidewalk(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }


  if(walktoken[i] == true){
    if(rty[i]<HALF_PI/4 && rlcheck[i] == true){
      rty[i]+=(radians(2));
      yrot[i]-=(radians(2));
      xaxis[i]+=12*sin((radians(30)));
      rtx[i]+=(radians(2));
      rlx[i]-=(radians(2));
      xrot[i]-=(radians(0.5));
      zaxis[i]+=(50*sin(radians(2)));
      yaxis[i]+=(50*sin(radians(2)));
      kicktoken[i] = true;
    }
    else if(lty[i]>-(HALF_PI/4) && llcheck[i] == true){
      lty[i]-=(radians(2));
      yrot[i]+=(radians(2));
      xaxis[i]-=12*sin((radians(30)));
      ltx[i]+=(radians(2));
      llx[i]-=(radians(2));
      xrot[i]-=(radians(0.5));
      zaxis[i]+=(50*sin(radians(2)));
      yaxis[i]+=(50*sin(radians(2)));
      kicktoken[i] = true;
    }
    else if(rty[i]>=HALF_PI/4 && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("B1", "8n", "+0" , 0.5);
    }
    else if(lty[i]<=-(HALF_PI/4) && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("D1", "8n", "+0" , 0.5);
    }
  }
  else{
    if(rty[i]>radians(2) && rlcheck[i] == true){
        rty[i]-=(radians(2));
        yrot[i]+=(radians(2));
        rtx[i]-=(radians(2));
        rlx[i]+=(radians(2));
        xrot[i]+=(radians(0.5));
        zaxis[i]-=(50*sin(radians(2)));
        yaxis[i]-=(50*sin(radians(2)));
        kicktoken[i] = true;
    }
    else if(lty[i]<-radians(2) && llcheck[i] == true){
        lty[i]+=(radians(2));
        yrot[i]-=(radians(2));
        ltx[i]-=(radians(2));
        llx[i]+=(radians(2));
        xrot[i]+=(radians(0.5));
        zaxis[i]-=(50*sin(radians(2)));
        yaxis[i]-=(50*sin(radians(2)));
        kicktoken[i] = true;
    }
    else if(rty[i]<=radians(2) && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
    else if(lty[i]>=-radians(2) && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
  }
}
function leftsidewalk(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }

  if(walktoken[i] == true){
    if(rty[i]<HALF_PI/4 && llcheck[i] == true){
      rty[i]+=(radians(2));
      yrot[i]-=(radians(2));
      xaxis[i]+=12*sin((radians(30)));
      rtx[i]+=(radians(2));
      rlx[i]-=(radians(2));
      xrot[i]-=(radians(0.5));
      zaxis[i]+=(50*sin(radians(2)));
      yaxis[i]+=(50*sin(radians(2)));
      kicktoken[i] = true;
    }
    else if(lty[i]>-(HALF_PI/4) && rlcheck[i] == true){
      lty[i]-=(radians(2));
      yrot[i]+=(radians(2));
      xaxis[i]-=12*sin((radians(30)));
      ltx[i]+=(radians(2));
      llx[i]-=(radians(2));
      xrot[i]-=(radians(0.5));
      zaxis[i]+=(50*sin(radians(2)));
      yaxis[i]+=(50*sin(radians(2)));
      kicktoken[i] = true;
    }
    else if (rty[i]>=HALF_PI/4 && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("D1", "8n", "+0" , 0.5);
    }
    else if (lty[i]<=-(HALF_PI/4) && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("B1", "8n", "+0" , 0.5);
    }
  }
  else{
    if(rty[i]>radians(2) && llcheck[i] == true){
        rty[i]-=(radians(2));
        yrot[i]+=(radians(2));
        rtx[i]-=(radians(2));
        rlx[i]+=(radians(2));
        xrot[i]+=(radians(0.5));
        zaxis[i]-=(50*sin(radians(2)));
        yaxis[i]-=(50*sin(radians(2)));
        kicktoken[i] = true;
    }
    else if(lty[i]<-radians(2) && rlcheck[i] == true){
        lty[i]+=(radians(2));
        yrot[i]-=(radians(2));
        ltx[i]-=(radians(2));
        llx[i]+=(radians(2));
        xrot[i]+=(radians(0.5));
        zaxis[i]-=(50*sin(radians(2)));
        yaxis[i]-=(50*sin(radians(2)));
        kicktoken[i] = true;
    }
    else if (rty[i]<=radians(2) && llcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
    else if (lty[i]>=-radians(2) && rlcheck[i] == true){
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
  }
}
function rhythm(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }

  if(bendcheck[i] == true){
    if(rtx[i]<HALF_PI/8){
    rtx[i]+=(radians(2));
    rlx[i]-=(radians(2));
    ltx[i]+=(radians(2));
    llx[i]-=(radians(2));
    zaxis[i]+=10*sin((radians(2)));
    yaxis[i]+=80*sin((radians(2)));
  }
  else{
    bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
  }
  }
  else{
    if(rtx[i]>0){
    rtx[i]-=(radians(2));
    rlx[i]+=(radians(2));
    ltx[i]-=(radians(2));
    llx[i]+=(radians(2));
    zaxis[i]-=10*sin((radians(2)));
    yaxis[i]-=80*sin((radians(2)));
  }
  else{
    bass[i].triggerAttackRelease("D1", "8n", "+0" , 0.5);
  }
  }
}
function leftsiderhythm(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }


  if(bendcheck[i] == true){
    if(ltx[i]<HALF_PI/2){
      rtx[i]+=(radians(2));
      rlx[i]-=(radians(2));
      ltx[i]+=(radians(16));
      llx[i]-=(radians(16));
      zaxis[i]+=10*sin((radians(2)));
      yaxis[i]+=80*sin((radians(2)));
      bass[i].triggerAttackRelease("G1", "8n", "+0" , 0.5);
    }
  }
  else{
    if(ltx[i]>0){
      rtx[i]-=(radians(2));
      rlx[i]+=(radians(2));
      ltx[i]-=(radians(16));
      llx[i]+=(radians(16));
      zaxis[i]-=10*sin((radians(2)));
      yaxis[i]-=80*sin((radians(2)));
      bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
    }
  }
}
function rightsiderhythm(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }


  if(bendcheck[i] == true){
    if(rtx[i]<HALF_PI/2){
    rtx[i]+=(radians(16));
    rlx[i]-=(radians(16));
    ltx[i]+=(radians(2));
    llx[i]-=(radians(2));
    zaxis[i]+=10*sin((radians(2)));
    yaxis[i]+=80*sin((radians(2)));
    bass[i].triggerAttackRelease("B1", "8n", "+0" , 0.5);
  }
  }
  else{
    if(rtx[i]>0){
    rtx[i]-=(radians(16));
    rlx[i]+=(radians(16));
    ltx[i]-=(radians(2));
    llx[i]+=(radians(2));
    zaxis[i]-=10*sin((radians(2)));
    yaxis[i]-=80*sin((radians(2)));
    bass[i].triggerAttackRelease("E1", "8n", "+0" , 0.5);
  }
  }
}
function rightturn(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }

  if(walktoken[i] == true){
    if(zrot[i]<TWO_PI){
      zrot[i]+=(radians(15));
      ltx[i]+=radians(4);
      llx[i]-=radians(4);
    }
  }
  else{
    zrot[i]=0;
    if(ltx[i]>0){
      ltx[i]-=radians(4);
      llx[i]+=radians(4);
      kicktoken[i] = true;
    }
    else{
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
    }
  }
} //only drum
function leftturn(i){
  if(legreset[i] == false){
    rtx[i]=0;
    ltx[i]=0;
    rty[i]=0;
    lty[i]=0;
    //rtz[i]=0;
    //ltz[i]=0;
    rlx[i]=-HALF_PI/4;
    llx[i]=-HALF_PI/4;
    //rly[i]=0;
    //lly[i]=0;
    //rlz[i]=0;
    //llz[i]=0;
    xaxis[i]=0;
    yaxis[i]=0;
    zaxis[i]=0;
    xrot[i]=0;
    yrot[i]=0;
    zrot[i]=0;
    legreset[i] = true;
  }

  if(walktoken[i] == true){
    if(zrot[i]>-TWO_PI){
      zrot[i]-=(radians(15));
      rtx[i]+=radians(4);
      rlx[i]-=radians(4);
    }
  }
  else{
    zrot[i]=0;
    if(rtx[i]>0){
      rtx[i]-=radians(4);
      rlx[i]+=radians(4);
      kicktoken[i] = true;
    }
    else{
      if(kicktoken[i] == true){
        kick.start();
        kicktoken[i] = false;
      }
    }
  }
} //only drum




//arm movement
function walkingarms(i){
  if(armreset[i] == false){
    rax[i]=0;
    lax[i]=0;
    ray[i]=0;
    lay[i]=0;
    raz[i]=0;
    laz[i]=0;
    rfax[i]=HALF_PI/3;
    lfax[i]=HALF_PI/3;
    rfay[i]=0;
    lfay[i]=0;
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }

  if(walktoken[i] == true){
    if(lax[i]<HALF_PI/2 && rlcheck[i] == true){
      rax[i]-=(radians(4));
      lax[i]+=(radians(4));
      melody[i].triggerAttackRelease(["E4"], "4n" , "+0", 0.5);
    }
    else if(rax[i]<HALF_PI/2 && llcheck[i] == true){
      rax[i]+=(radians(4));
      lax[i]-=(radians(4));
      melody[i].triggerAttackRelease(["A4"], "4n" , "+0", 0.5);
    }
    else if(lax[i]>=HALF_PI/2 && rlcheck[i] == true){
      melody[i].triggerAttackRelease(["F#4"], "4n" , "+0", 0.5);
    }
    else if(rax[i]>=HALF_PI/2 && llcheck[i] == true){

      melody[i].triggerAttackRelease(["G4"], "4n" , "+0", 0.5);
    }
  }
  else{
    if(lax[i]>radians(4) && rlcheck[i] == true){
      rax[i]+=(radians(4));
      lax[i]-=(radians(4));
      melody[i].triggerAttackRelease(["B4", "G4"], "4n" , "+0", 0.5);
    }
    else if(rax[i]>0 && llcheck[i] == true){
      rax[i]-=(radians(4));
      lax[i]+=(radians(4));
      melody[i].triggerAttackRelease(["B4", "G4"], "4n" , "+0", 0.5);
    }
  }
}

function waggingarms(i){
  if(armreset[i] == false){
    rax[i]=0;
    lax[i]=0;
    ray[i]=0;
    lay[i]=0;
    raz[i]=0;
    laz[i]=0;
    rfax[i]=HALF_PI/3;
    lfax[i]=HALF_PI/3;
    rfay[i]=0;
    lfay[i]=0;
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }

  if(walktoken[i] == true){
    if(ray[i] < HALF_PI/4){
      ray[i]+=(radians(2));
      lay[i]-=(radians(2));
      melody[i].triggerAttackRelease(["G4"], "4n" , "+0", 0.5);
    }
    else if(ray[i] >= HALF_PI/4){
      melody[i].triggerAttackRelease(["F#4"], "4n" , "+0", 0.5);
    }
  }
  else{
    if(ray[i] > 0){
      ray[i]-=(radians(2));
      lay[i]+=(radians(2));
      melody[i].triggerAttackRelease(["E4"], "4n" , "+0", 0.5);
    }
    else if (ray[i] <= 0){
      melody[i].triggerAttackRelease(["E4"], "4n" , "+0", 0.5);
    }
  }
}

function clappingarms(i){
  if(armreset[i] == false){
    rax[i]=radians(45);
    lax[i]=radians(45);
    ray[i]=radians(10);
    lay[i]=-(radians(10));
    raz[i]=0;
    laz[i]=0;
    rfax[i]=HALF_PI/3;
    lfax[i]=HALF_PI/3;
    rfay[i]=radians(45);
    lfay[i]=-(radians(45));
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }


  if(walktoken[i] == true){
    if(rfay[i] < HALF_PI/4){
      ray[i]+=(radians(2));
      lay[i]-=(radians(2));
      rfay[i]+=(radians(6));
      lfay[i]-=(radians(6));
    }
  }
  else{
    if(rfay[i] > -HALF_PI/3){
      ray[i]-=(radians(2));
      lay[i]+=(radians(2));
      rfay[i]-=(radians(6));
      lfay[i]+=(radians(6));
      snaretoken[i] = true;
    }
    else{
      if(snaretoken[i] == true){
        snare.start();
        snaretoken[i] = false;
      }
    }
  }
} // only drum
function raisearms(i){
  if(armreset[i] == false){
    rax[i]=0;
    lax[i]=0;
    ray[i] = radians(120);
    lay[i] = -radians(120);
    raz[i]=0;
    laz[i]=0;
    rfax[i] = radians(120);
    lfax[i] = radians(120);
    rfay[i]=0;
    lfay[i]=0;
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }
  if(bendcheck[i] == true ){
    if(lfay[i]>-(HALF_PI/2)){
      lay[i] -= radians(1);
      lfax[i] -= radians(10);
      lfay[i] -= radians(5);
      ray[i] += radians(1);
      rfax[i] -= radians(10);
      rfay[i] += radians(5);
      melody[i].triggerAttackRelease(["E5", "G5"], "4n" , "+0", 0.3);
    }
  }
  else{
    if(lfay[i]<0){
      lay[i] += radians(1);
      lfax[i] += radians(10);
      lfay[i] += radians(5);
      ray[i] -= radians(1);
      rfax[i] += radians(10);
      rfay[i] -= radians(5);
      melody[i].triggerAttackRelease(["B4", "E5"], "4n" , "+0", 0.3);
    }
  }
}
function raiseleftarm(i){
  if(armreset[i] == false){
    rax[i]=0;
    lax[i]=0;
    ray[i] = 0;
    lay[i] = -radians(120);
    raz[i]=0;
    laz[i]=0;
    rfax[i] = 0;
    lfax[i] = radians(120);
    rfay[i]=0;
    lfay[i]=0;
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }

  if(bendcheck[i] == true ){
    if(lfay[i]>-(HALF_PI/2)){
      lay[i] -= radians(1);
      lfax[i] -= radians(10);
      lfay[i] -= radians(5);
      melody[i].triggerAttackRelease(["E5"], "4n" , "+0", 0.4);
    }
  }
  else{
    if(lfay[i]<0){
      lay[i] += radians(1);
      lfax[i] += radians(10);
      lfay[i] += radians(5);
      melody[i].triggerAttackRelease(["B4"], "4n" , "+0", 0.4);
    }
  }
}
function raiserightarm(i){
  if(armreset[i] == false){
    rax[i]=0;
    lax[i]=0;
    ray[i] = radians(120);
    lay[i] = 0;
    raz[i]=0;
    laz[i]=0;
    rfax[i] = radians(120);
    lfax[i] = 0;
    rfay[i]=0;
    lfay[i]=0;
    rfaz[i]=0;
    lfaz[i]=0;
    armreset[i] = true;
  }


  if(bendcheck[i] == true ){
    if(rfay[i]<(HALF_PI/2)){
      ray[i] += radians(1);
      rfax[i] -= radians(10);
      rfay[i] += radians(5);
      melody[i].triggerAttackRelease(["G5"], "4n" , "+0", 0.4);
    }
  }
  else{
    if(rfay[i]>0){
      ray[i] -= radians(1);
      rfax[i] += radians(10);
      rfay[i] -= radians(5);
      melody[i].triggerAttackRelease(["E5"], "4n" , "+0", 0.4);
    }
  }
}
