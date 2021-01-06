class Ground{
    constructor(x,y){
        var option={
            isStatic:true
        }
       
this.body=Bodies.rectangle(x,y,600,20,option)
World.add(world,this.body)
    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,600,20)
}
}