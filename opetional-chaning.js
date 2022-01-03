const person = {
    id: 33,
    name: "Abrar",
    child: ["Afifa", "Shafiya", "kalba"],
    jobDetails: {
        salary: 2000,
        jobTailes: "web-developer",
        address: "torento"
    }
}

const { address } = person.jobDetails;
console.log(address);


const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer?.name;
console.log(dogName);
  // expected output: undefined





