function Airport() {
  this.hangar = []
  this.capacity = 10;
}

// Airport.prototype.takeOff = function(plane) {
//   index = this.hangar.indexOf(plane)
//   this.hangar.splice(index, 1)
// }

Airport.prototype.hasSpace = function() {
  if (this.getHangar.length >= this.capacity) {
    return false
  } else {
    return true
  }
}
Airport.prototype.getHangar = function() {
  return this.hangar
}
