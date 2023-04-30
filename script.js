//complete this code
class Rectangle {
	constructor(width,height){
		this._width = width;
		this._height=height;
	}
	get width(){
		return this._width;
	}
	get height(){
		return this_height;
	}
	getArea(){
		let Area = width() * height();
		return Area;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		let perimeter = 4 * width();
		return perimeter;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
