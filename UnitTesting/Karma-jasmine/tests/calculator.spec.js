describe('calculator tests', function(){

    var calc = new Calculator();

    it('should add two numbers', function(){
        expect( calc.add(2,4) ).toBe(6)
    });

    it('should sub two numbers', function(){
        expect( calc.sub(10, 5) ).toBe(5)
    });

});