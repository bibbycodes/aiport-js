describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = new Airport()
    airport.hasSpace = jasmine.createSpy().and.returnValue(true)
    airportSpy = jasmine.createSpyObj('AirportSpy', ['hasSpace'])
  })
  
  it("can land at an airport", function() {
    plane.land(airport)
    expect(airport.hasSpace).toHaveBeenCalled() //.and.returnValue(true)
    expect(airport.hangar).toContain(plane)
  })

  it("can land at an airport of a spy", function () {
    plane.land(airportSpy)
    expect(airportSpy.hasSpace).toHaveBeenCalled()
  })

  it("spy on poroperty test", function() {
    airport.hangar = spyOnProperty(airport, 'hangar', 'get').and.returnValue([])
    expect(airport.hangar).toEqual([])
  })
})