  //classes
  class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getadius(){ return this.radius; }

    getArea(){ return this.radius * this.radius * Math.PI;}
}

//create an pobject from the class
const c1 = new Circle(2);
console.log(c1);
console.log(c1.getadius());

console.log(c1.getArea());