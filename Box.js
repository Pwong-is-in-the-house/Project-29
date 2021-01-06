class Box{
    constructor(x,y,color){
       
this.body=Bodies.rectangle(x,y,30,50)
World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,30,50)
}
}