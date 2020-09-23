class Box{

    constructor(x,y){

        var options={
            isStatic:false,
            density:1.2,
            friction:0.5
        }
        this.image=loadImage("rec.png")
        this.visiblity=255
        this.body=Matter.Bodies.rectangle(x,y,100,50,options);
        World.add(world,this.body);



    }
    display(){

       // rectMode(CENTER);
       // rect(this.body.position.x,this.body.position.y,100,50)

       if(this.body.speed < 5){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,100,50);
  
      }else {
        World.remove(world,this.body);
        this.visiblity=this.visiblity-5
        push();
        tint(255,this.visiblity)
        image(this.image,this.body.position.x,this.body.position.y,100,50);
        pop();
      }
      //console.log(this.body.speed)

    }
    score(){

      if(this.visiblity<0 && this.visiblity>-105){
        score++;
      }

    }

}