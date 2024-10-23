// Person/isiku klass
class Person {
    constructor() {
        this.firstname = "";
        this.lastname = "";
        this.age = 0;
    } 
}

// Student klass
class Student {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    } 
} 

// Loob kolm objekti Person klassi kohta ja kolm õpilase/student omaga
// Isikud
const isik1 = new Person()
isik1.firstname = "John";
isik1.lastname = "Smith";
isik1.age = 20;

const isik2 = new Person()
isik2.firstname = "Mati";
isik2.lastname = "Maasikas";
isik2.age = 22;

const isik3 = new Person()
isik3.firstname = "Jüri";
isik3.lastname = "Saar";
isik3.age = 19

// Väljastab loodud isikud
console.log(isik1)
console.log(isik2)
console.log(isik3)

// Õpilased
const student1 = new Student("Mary", "Campbell", 22)
const student2 = new Student("Fred", "Durst", 19)
const student3 = new Student("Mike", "Brown", 21)

// Väljastab loodud õpilased
console.log(student1)
console.log(student2)
console.log(student3)