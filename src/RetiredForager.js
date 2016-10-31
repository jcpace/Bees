var RetiredForagerBee = function(){
ForagerBee.call(this);
this.age = 40;
this.job = "gamble";
this.canFly = false;
this.color = "grey";
this.treasureChest = [];
// food property inherited from Grub
// eat method inherited from Grub
};
RetiredForagerBee.prototype.forrage = function(){
	return "I am too old, let me play cards instead";
};
RetiredForagerBee.prototype.gamble = function(treasure){
	this.treasure.push(treasure);


};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;