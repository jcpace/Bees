var ForagerBee = function(){
	Bee.call(this);
// food property inherited from Grub
// eat method inherited from Grub
	this.age = 10;
	this.color = "yellow";
	this.job = "find pollen";
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);
ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
	this.treasureChest.push(treasure);
};
