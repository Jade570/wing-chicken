class Button{
  constructor(x,y,img){
    this.img = img;
    this.x = x;
    this.y = y;

    this.click = false;
    push();
    if (this.clicked()==true){
      tint(50);
    }
    if (this.click==true){
      tint(50);
    }
    image(this.img, this.x, this.y,40,40);
    pop();
  }

  clicked(){
    if(mouseIsPressed){
      if(mouseX>windowWidth/2+this.x && mouseY>windowHeight/2+this.y && mouseX<windowWidth/2+this.x+40 && mouseY<windowHeight/2+this.y+40){
        this.click=true;
      }
      else{
        this.click=false;
      }
       return this.click;
    }
  }
}


class Controller {
  constructor(x,y,num){
    this.x = x;
    this.y = y;
    this.num = num;
    textSize(8);
    textFont(font);

    noStroke();
    fill(57, 59, 64);
    rect(this.x,this.y,250, 220);
    fill(255);
    text('robot '+num, this.x+70, this.y+15);
    text('l\ne\ng\ns', this.x+5, this.y+55);
    fill(205, 209, 221);
    rect(this.x+17, this.y+22, 181,91);
    this.walk = new Button(this.x+20, this.y+25, walk_);
    this.rightsidewalk = new Button(this.x+65, this.y+25, rightsidewalk_);
    this.leftsidewalk = new Button(this.x+110, this.y+25, leftsidewalk_);
    this.rhythm = new Button(this.x+155, this.y+25, rhythm_);
    this.leftsiderhythm = new Button(this.x+20, this.y+70, leftsiderhythm_);
    this.rightsiderhythm = new Button(this.x+65, this.y+70, rightsiderhythm_);
    fill(176, 111, 111);
    rect(this.x+107, this.y+67, 91,46);
    this.rightturn = new Button(this.x+110, this.y+70, rightturn_);
    this.leftturn = new Button(this.x+155, this.y+70, leftturn_);
    this.stoplegs = new Button(this.x+202, this.y+70, stop_);
    fill(255);
    text('a\nr\nm\ns', this.x+5, this.y+155);
    fill(205, 209, 221);
    rect(this.x+17, this.y+122, 181,91);
    this.walkingarms = new Button(this.x+20, this.y+125, walkingarms_);
    this.waggingarms = new Button(this.x+65, this.y+125, waggingarms_);
    this.raisearms = new Button(this.x+110, this.y+125, raisearms_);
    this.raiseleftarm = new Button(this.x+155, this.y+125, raiseleftarm_);
    this.raiserightarm = new Button(this.x+20, this.y+170, raiserightarm_);
    fill(176, 111, 111);
    square(this.x+62, this.y+167, 46);
    this.clappingarms = new Button(this.x+65, this.y+170, clappingarms_);
    this.stoparms = new Button(this.x+202, this.y+170, stop_);

    if(this.stoparms.click == true){
      armreset[num-1]=false;
      armposition[num-1] = 0;
    }
    if(this.stoplegs.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 0;
    }


    if(this.walk.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 1;
    }
    if(this.rightsidewalk.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 2;
    }
    if(this.leftsidewalk.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 3;
    }
    if(this.rhythm.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 4;
    }
    if(this.rightsiderhythm.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 5;
    }
    if(this.leftsiderhythm.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 6;
    }
    if(this.leftturn.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 7;
    }
    if(this.rightturn.click == true){
      legreset[num-1]=false;
      legposition[num-1] = 8;
    }

    if(this.walkingarms.click == true){
      armreset[num-1]=false;
      armposition[num-1]=1;
    }
    if(this.waggingarms.click == true){
      armreset[num-1]=false;
      armposition[num-1]=2;
    }
    if(this.raisearms.click == true){
      armreset[num-1]=false;
      armposition[num-1]=3;
    }
    if(this.raiseleftarm.click == true){
      armreset[num-1]=false;
      armposition[num-1]=4;
    }
    if(this.raiserightarm.click == true){
      armreset[num-1]=false;
      armposition[num-1]=5;
    }
    if(this.clappingarms.click == true){
      armreset[num-1]=false;
      armposition[num-1]=6;
    }
  }
}

function robotcontrol(){

  if(frameCount % 60 == 0){
  for(let i = 0; i<12; i++){
    lightbulb[i] = (lightbulb[i]+30)%360;
  }
}

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

  if(frameCount % 15 == 0){
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
