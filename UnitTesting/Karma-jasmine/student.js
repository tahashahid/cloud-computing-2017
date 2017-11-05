/**
 * Created by tazz on 10/29/17.
 */



class SMS{

    constructor(){
        this.students = ['a', 'b', 'c'];
    }

    register(stu){
        this.students.push(stu);
    }

    removeStu(text){
        var index = this.students.indexOf(text);
        this.students.splice(index, 1);
    }

    getTotalStudents(){
        return this.students.length;
    }


}