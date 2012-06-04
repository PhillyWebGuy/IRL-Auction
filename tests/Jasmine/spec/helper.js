describe("produce a random int between 1 and 100", function(){   
	it('number is between 1 and 100', function(){
		var i = randomInt(1, 100);
		expect(i).toBeLessThan(parseInt(100));
		expect(i).toBeGreaterThan(parseInt(1));	   
	});
});

describe("produce a random int between 1 and 10 from an array", function(){   
	it('number is between 1 and 10 and from array', function(){
		var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var i = randomOneOf(list);
		expect(i).toBeLessThan(parseInt(11));
		expect(i).toBeGreaterThan(parseInt(0));	   
	});
});




