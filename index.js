// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides;
    this.count = this.sides.length;
  }
  
  get countSides(){
    return this.sides.length;
  }
  
  get perimeter(){
    let total = 0;
    
    for (let num of this.sides) {
      total += num;
    }
    return total;
    }
  }

class Triangle extends Polygon {
  get IsValid(){
    if (this.count !=3) return;
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];

    return ((s1 + s2 > s3) && (s2 + s3 > s1) && (s1 + s3 > s2));
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !=4) return;
    let s1 = this.sides[0];
    let s2 = this.sides[1];
    let s3 = this.sides[2];
    let s4 = this.sides[3];

    return ((s1 === s2) && (s2 === s3) && (s4 === s4))
  }

  get area() {
    if (this.count !==4) return;
    return(this.sides[0] * this.sides[1])
  }
}