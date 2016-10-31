var HoneyMakerBee = function(){
	Bee.call(this);
	// food property inherited from Grub
	// eat method inherited from Grub
	//color inherited from bee
	this.age = 10;
	this.color = "yellow";
	this.job = "make honey";
	this.honeyPot = 0;
}
HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function(val) {
	this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function(val) {
	this.honeyPot--;
};