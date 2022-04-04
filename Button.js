class Button {
  constructor(x,y,fill,sound){
    this.x =x;
    this.y =y;
    this.fill1 = fill1;
    this.sound = sound;
    this.w = 100;
    this.h = 100;
    this.fill2 = color(255, 0, 0);
  }

  display(){
    noStroke();
    if(mouseOver(this.x, this.y, this.w, this.h)) fill(this.fill2);
    else fill(this.fill1);
    rect(this.x, this.y, this.w, this.h);
  }

  playSound(){
    if (mouseOver(this.x, this.y, this.w, this.h)){
      this.sound.play();
    }
  }
  jiggle(){
    this.x = this.x+random(-2,2);
    this.y = this.y+random(-2,2);
  }
}