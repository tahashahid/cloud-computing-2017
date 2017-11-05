describe('student management system', function(){

    var sms = new SMS();

    it('should not be null', function(){
        expect( sms ).not.toBe(null);
    })

    it('should register a student', function(){
        sms.register('d');
        sms.register('e');
        expect( sms.getTotalStudents() ).toMatch();
    })


    it('should remove a student', function(){
        sms.removeStu('b');
        expect( sms.getTotalStudents() ).toBe(4);
    })
});