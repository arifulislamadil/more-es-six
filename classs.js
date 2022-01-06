class Support {
    name;
    designation;
    address;
    constructor(name, designation, address) {
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    startSession() {
        console.log("start a support session");
    }
}

const abraham = new Support("Abraham", "Web developer", "US");
console.log(abraham);
//output:
/* Support {
    name: 'Abraham',
    designation: 'Web developer',
    address: 'US'
  } */