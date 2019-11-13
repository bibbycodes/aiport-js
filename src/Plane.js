function Plane () {

}

Plane.prototype.land = function(airport) {
  if (airport.hasSpace()) {
    airport.addPlaneToHangar(this)
    return airport
  } else {
    return "Can't land! Aiport full!"
  }
}

Plane.prototype.takeOff = function(airport) {
  airport.removePlaneFromHangar(this)
}