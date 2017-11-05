class Calculator{
    add(a, b){
        return parseFloat(a) + parseFloat(b);
    }
    sub(a, b){
        return a - b;
    }
}

describe('calculator tests', function(){
    var calc = new Calculator();

    it('should add two number', function(){
        expect(calc.add(0.1, 0.2)).toBe(0.3);
    });

    it('should add two number', function(){
        expect(calc.add('2', 4)).toBe(6);
    });

    // it('should sub two number', function(){
    //     expect(5 - 2).toBe(3);
    // });
})