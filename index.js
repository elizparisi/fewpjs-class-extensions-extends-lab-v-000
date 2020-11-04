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
    let [side1, side2, side3] = this.sides;
    
    if (this.countSides === 3){
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1));
    }
  }
}

class Square extends Polygon {
  get area(){
    return (side1 * side1);
  }
}