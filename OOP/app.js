class Shape {
    constructor(w, h) {
      this.width = w;
      this.height = h;
    }
  }

  calculateArea() {
    throw new Error("Method not implemented");
  }

  class Rectangle extends Shape {
       displayFormula () {
       console.log('width*height = Areal of rectangle');
  }


    calculateArea(){
        let area = this.width * this.height;
        console.log(${this.width} + )
            return super.calculateArea() + 'is' ;
    }
}



