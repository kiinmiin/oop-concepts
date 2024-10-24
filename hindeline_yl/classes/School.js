class School {
    constructor(name) {
        this.name = name;
        this.students = [];
        this.courses = [];  
    }
    addCourse(course) {
        if (!this.courses.some(c => c.name === course.name)) {
            this.courses.push(course);
        } 
    }
    addStudent(student) {
        if (!this.students.some(s => s.getId() === student.getId())) {
            student.setId(this.students.length + 1);
            this.students.push(student);
        } 
    }
    addStudentGrade(student, course, grade) {
        if (this.courses.includes(course) && this.students.includes(student)) {
            student.addGrade(course, grade);
            course.addGrade(student, grade);
        } 
    }
    getStudents() {
        return this.students;
    }
    getCourses() {
        return this.courses;
    }
    getStudentsOrderedByAverageGrade() {
        return this.students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());
    }       
}

module.exports = School;