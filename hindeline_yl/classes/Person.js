class Person{
    constructor(name) {
        this.name = name;
        this.dateOfBirth = null;
    }
    setDateOfBirth(year) {
        this.dob = year
    }
    getDateOfBirth() {
        return this.dob
    }
    age() {
        return 2024 - this.dob
    }
    getName() {
        return this.name
    }
    description() {
        return `Person (name: ${this.name})`;
    }      
}

module.exports = Person; 