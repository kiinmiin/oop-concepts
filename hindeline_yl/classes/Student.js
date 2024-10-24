const Person = require('./Person')

class Student extends Person {
    constructor(name) {
        super(name);
        this.grades = [] ;
        this.id = null; 
    }
    setId(id) {
        this.id = id
    }
    getId() {
        return this.id
    }
    getGrades() {
        return this.grades
    }
    addGrade(course, grade) {
        this.grades.push({course, grade});
    } 
    getAverageGrade() {
        if (this.grades.length == 0) {
            return -1
        } else {
            return this.grades.reduce((sum, mark) => sum + mark.grade, 0) / this.grades.length
        } 
    }
    description() {
        return `Student (name: ${this.name}, average grade: ${this.getAverageGrade()})`
    }      
}

module.exports = Student;