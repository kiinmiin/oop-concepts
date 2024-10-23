class Student {
    #nimi;
    #id;
    constructor(nimi, id) {
        this.#nimi = nimi;
        this.#id = id;
        this.staatus = "Active";
    }
     getId() {
        return this.#id;
     }
     setName(name) {
        this.#nimi = name
     }
     getName() {
        return this.#nimi
     }
     setStatus(status) {
        if (status == "Active" || status == "Expelled" || status == "Finished" || status == "Inactive") {
            this.staatus = status
        } else {
            return;
        }  
     }
     getStatus() {
        return this.staatus
     }     
}

const student1 = new Student("Mati", 42);
console.log(student1.getId());  // 42
console.log(student1.getName()); // Mati
console.log(student1.getStatus()); // Active 

student1.setName("Kati");
student1.setStatus("Finished");
console.log(student1.getName()); // Kati
console.log(student1.getStatus()); // Finished

student1.setStatus("Silly");
console.log(student1.getStatus()) // Outputib Finished default variandina eelmise setStatuse pärast?