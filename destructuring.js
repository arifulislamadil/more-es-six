const fish = { id: 58, name: "king Hilsha", price: 9000, phone: "0183443439930", address: "chandpur", dress: "silver" };

console.log(fish.phone);
// const phone = fish.price;
const { id, name } = fish
console.log(id, name);

const person = {
    id: 0133,
    name: "Robert",
    positon: "web-developer",
    salary: 8000,
    pColor: "red",
    pSports: "football",
    pMovies: ["word war 1", "destroy the world", "long way", "Where is my home"],
    pChild: {
        firstChild: "Adiba",
        secondChild: {
            nameChild: "Shafi"
        }
    }
}
const { nameChild } = person.pChild.secondChild;
console.log(nameChild);
