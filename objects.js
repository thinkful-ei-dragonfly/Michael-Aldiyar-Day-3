/* eslint-disable strict */
// let loaf = {
//   flour: 300,
//   water: 210,
//   hydration: function () {
//     return (this.water / this.flour)*100
//   }
// }

// console.log(loaf.hydration());



// let object = {
//   foo: 1,
//   bar: 2,
//   fum: 3,
//   quux: 4,
//   spam: 5
// }

// for (let key in object) {
//   console.log(`${key}:${object[key]}`);
// }


// let object = {
//   meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }

// console.log(object.meals[3]);

// let people = [
//   { name: 'John', jobTitle: 'Sales', boss: 'James'},
//   { name: 'Derek', jobTitle: 'Officer', boss: 'Dough'},
//   { name: 'Al', jobTitle: 'Manager', boss: 'Alan'},
//   { name: 'Joe', jobTitle: 'Owner'}
// ]

// for (let i = 0; i < people.length; i++){
//   if (people[i].boss === undefined) {
//     console.log(`${people[i].jobTitle} ${people[i].name} does not report to anybody`);
//   } else {
//     console.log(`${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}.`);
//   }
// }

function decode(word) {
  let words = word.split(" ");
  let output = "";
  for (let i=0;i<words.length;i++) {
    if (words[i].substring(0,1) == 'a') {
      output += words[i][1];
    } else if (words[i].substring(0,1) == 'b') {
      output += words[i][2];
    } else if (words[i].substring(0,1) == 'c') {
      output += words[i][3];
    } else if (words[i].substring(0,1) == 'd') {
      output += words[i][4];
    } else {
      output += ' ';
    }
  
  }
  return output;
}

console.log(decode('craft block argon meter bells brown croon droop'));