var Bee = function() {
  Grub.call(this);
// food property inherited from Grub
// eat method inherited from Grub
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
}

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;