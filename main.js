'use strict';

function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
}

let myObject = createMyObject();

// console.log(myObject);
// console.log(myObject.sayHello());

const newObject = {
  test: 'test',
  whatever: 'whatever'
};

function updateObject(obj) {
  obj['foo'] = 'foo';
  obj['bar'] = 'bar';
  obj['bizz'] = 'bizz';
  obj['bang'] = 'bang';
  return obj;
}

// console.log(updateObject(newObject));

function personMaker() {
  let person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

const person = personMaker();
// console.log(person.fullName());

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

keyDeleter(sampleObj);
console.log(sampleObj);