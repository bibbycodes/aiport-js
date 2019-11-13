function Airport() {
  this.hangar = []
  this.capacity = 10;
}

// Airport.prototype.takeOff = function(plane) {
//   index = this.hangar.indexOf(plane)
//   this.hangar.splice(index, 1)
// }

Airport.prototype.hasSpace = function() {
  if (this.hangar.length >= this.capacity) {
    return false
  } else {
    return true
  }
}

Airport.prototype.getHangar = function() {
  return this.hangar
}

Airport.prototype.addPlaneToHangar = function(plane) {
  this.hangar.push(plane)
}

Airport.prototype.removePlaneFromHangar = function(plane) {
  index = this.hangar.indexOf(plane)
  this.hangar.splice(index, 1)
}
