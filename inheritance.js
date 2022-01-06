class teamMember {
    name;
    designation = "Support web dev";
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends teamMember {
    startSession() {
        console.log(this.name, "start a support sessin");
    }
}
class StudentCare extends teamMember {
    buildARoutine() {
        console.log(this.name, "build a routine");
    }
}

const max = new Support("Max", "USA");
console.log(max);
const sarah = new StudentCare("Sarah", "UK");
console.log(sarah);