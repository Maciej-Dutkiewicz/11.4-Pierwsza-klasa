function Phone(brand, price, color){
	this.brand = brand;
	this.price = price;
	this.color = color;
}
Phone.prototype.printInfo = function(){
	console.log("The phone brand " + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + 'zl' + '.');
};

var samsungGalaxyS6 = new Phone('Samsung', 3500, 'black');
samsungGalaxyS6.printInfo();
var iPhone6S = new Phone("Apple", 2250, "silver");
iPhone6S.printInfo();
var onePlusOne = new Phone('OnePlus', 2000, 'blue');
onePlusOne.printInfo();

Phone.prototype.priceIndolar = function (){
	var x = this.price/3.6;
	console.log('Price in USA ' + x.toFixed(2) + "$");
};
samsungGalaxyS6.priceIndolar();
iPhone6S.priceIndolar();
onePlusOne.priceIndolar();