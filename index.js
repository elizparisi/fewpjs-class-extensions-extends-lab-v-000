// Your code here

class Polygon {
  constructor(sides){
    this.sides = sides;
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

    return ((s1 + s2 > s3) && (s2 + s3 > s1) && (s1 + s3 > s2))
  }
}

class Square extends Polygon {
  get area(){
    return (side1 * side1);
  }
}