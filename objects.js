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
  let words = word.split(' ');
  let output = '';
  let cipher = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
  };
  for (let i=0;i<words.length;i++) {
    let currentWord = words[i];
    let firstLetter = currentWord[0];
    if (firstLetter in cipher) {
      output += currentWord[cipher[firstLetter]];
    } else {
      output += ' ';
    }
  }
  return output;
}

// console.log(decode('craft block argon meter bells brown croon droop'));

function createCharacter(name, nickName, race, origin, weapon, attack, defense) {
  return {
    name,
    nickName,
    race,
    origin,
    attack,
    defense,
    weapon,
    describe : function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`);
    },
    evaluateFight : function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      return `Your opponent takes ${x} damage and you receive ${y} damage`;
    }
  };
}

let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 'Wizard Staff', 10, 6), createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 'Ring', 2, 1), createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 'String and Barrow Blade', 3, 2), createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunneain', 'Anduril', 6, 8), createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 'Bow and Arrow', 8, 5), createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 'Hadhafang', 5, 5)];

let gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth','Wizard Staff', 10, 6);
let bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1);

// characters.find(function (character) {
//   return character.nickName === 'aragorn';
// }).describe();


// // console.log(characters.filter(character => character.race === 'Hobbit'));
// console.log((characters.filter(character => character.attack > 5)));







const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];


function findOne(arr, query) {
  let keys = Object.keys(query);
  let filtered = [];
  for (let i = 0; i < keys.length; i++) {
    if (i === keys.length - 1) {
      if (filtered.length) {
        arr = filtered;
      }
      let foundHero = arr.find(function(hero) {
        return hero[keys[i]] === query[keys[i]];
      });
      if (foundHero) {
        return foundHero;
      }
    }
    filtered = arr.filter(function(hero) {
      return hero[keys[i]] === query[keys[i]];
    });
  }
  return null;
}

// console.log(findOne(HEROES, { squad: 'Justice League', id : 6}));

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne : function(query) {
    let arr = this.store.heroes;
    let keys = Object.keys(query);
    let filtered = [];
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        if (filtered.length) {
          arr = filtered;
        }
        let foundHero = arr.find(function(hero) {
          return hero[keys[i]] === query[keys[i]];
        });
        if (foundHero) {
          return foundHero;
        }
      }
      filtered = arr.filter(function(hero) {
        return hero[keys[i]] === query[keys[i]];
      });
    }
    return null;
  }
};

console.log(Database.findOne({ squad: 'Avengers', id: 3 }));