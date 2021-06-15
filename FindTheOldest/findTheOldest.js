const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

console.log(`Oldest Person Is : ${findTheOldest(people)}`);

function findTheOldest(people){
  let oldest = 'noone',age = 0;
  people.forEach(element => {
    if ((element.yearOfDeath-element.yearOfBirth) > age) {
      age = (element.yearOfDeath-element.yearOfBirth);
      oldest = element.name;
    }
  });
  return oldest;
}
