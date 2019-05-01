/* eslint-disable strict */

// function makeStudentsReport(data) {
//   let newArr = [];
//   for (i = 0; i < data.length; i++){
//     newArr.push(`${data[i].name}:${data[i].grade}`);
//   }
//   return newArr;
// }

// const testData = [
//   { name: 'Jane Doe', grade: 'A' },
//   { name: 'John Dough', grade: 'B' },
//   { name: 'Jill Do', grade: 'A' },
// ];

//console.log(makeStudentsReport(testData));



// let initial = [
//   {
//     name: 'Tim',
//     status: 'Current student',
//     course: 'Biology'
//   },
//   {
//     name: 'Sue',
//     status: 'Withdrawn',
//     course: 'Mathematics'
//   }
// ];

// function enrollInSummerSchool(students) {
//   let newArr = [];
//   for (i = 0; i < students.length; i++){
//     students[i].status = 'In summer school';
//     newArr.push(students[i]);
//   }
//   return newArr;
// }

// console.log(enrollInSummerSchool(initial));




// const scratchData = [
//   { id: 22, foo: 'bar' },
//   { id: 28, foo: 'bizz' },
//   { id: 19, foo: 'bazz' },
// ];

// function findById(items, idNum) {
//   for (i = 0; i < items.length; i++) {
//     if (items[i].id === idNum) {
//       return items[i];
//     }
//   }
// }

// console.log(findById(scratchData, 19));




// should return `false`
const objectB = {
  id: 3,
  age: 33,
  city: 'Peoria',
  lol: 'lol'
};

const objectA = {
  id: 2,
  name: 'Jane Doe',
  age: 34,
  city: 'Chicago',
};

const expectedKeys = ['id', 'name', 'age', 'city'];

function validateKeys(object, expectedKeys) {


  if (Object.keys(object).length !== expectedKeys.length) {
    return false;
  }
  for (let i = 0; i < expectedKeys.length; i++){
    if (!Object.keys(object).find(key => key === expectedKeys[i])) {
      return false;
    } 
  }
  return true;
}


console.log(validateKeys(objectB, expectedKeys));