class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.title = 'Employee';
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getRole() {
        return this.title;
    }

    getEmail() {
        return this.email;
    }

}
module.exports = Employee;