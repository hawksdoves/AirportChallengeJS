describe("Plane", function(){
	var plane;

	beforeEach(function(){
		plane = new Plane();
	});

	describe("flying status", function(){

		it('has a flying status false at initialization', function(){
			expect(plane.flying).toEqual(false);
		});

		it("changes to true when taking off", function(){
			plane.takeOff();
			expect(plane.flying).toEqual(true);
		});

		it("changes to false when landing", function(){
			plane.takeOff();
			plane.land();
			expect(plane.flying).toEqual(false);
		})

	});

});