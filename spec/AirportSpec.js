describe("Airport", function () {
  beforeEach(function() {
    planeSpy = jasmine.createSpyObj('plane', ['land', 'takeOff'])
    plane = new Plane()
    airport = new Airport()
  })

  it("doesnt allow planes to land when over capacity", function() {
    for(i = 0; i < 10; i++) {
      plane.land(airport)
    }
    expect(plane.land(airport)).toEqual("Can't land! Aiport full!")
  })

  it("can take off from an airport", function() {
    plane.land(airport)
    plane.takeOff(airport)
    expect(airport.hangar).not.toContain(plane)
    })

  it("contains a plane when a plane lands", function () {
    plane.land(airport)
    expect(airport.hangar).toContain(plane)
  })

  it("has a capacity of 10", function () {
    expect(airport.capacity).toEqual(10)
  })

  it("has an empty hanagr", function() {
    expect(airport.hangar).toEqual([])
  })
})