describe("Plane", function () {
  beforeEach(function() {
    plane = new Plane()
    airport = new Airport()
    airport.hasSpace = jasmine.createSpy().and.returnValue(true)
  })
  
  it("can land at an airport", function() {
    plane.land(airport)
    expect(airport.hasSpace).toHaveBeenCalled() //.and.returnValue(true)
    expect(airport.hangar).toContain(plane)
  })
})