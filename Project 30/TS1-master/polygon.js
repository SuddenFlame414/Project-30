class polygon {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50,200,options);
        World.add(world,this.body);
    }
    display() {
        
    }
}