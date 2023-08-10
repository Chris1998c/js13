function calculateAverageAge(persons) {
  if(persons.lenght == 0){
    return 0;
  }

  const sumAge= persons.reduce((sum, persons) => sum + persons.age, 0);
  const averageAge = sumAge / persons.length;

return Math.round(averageAge);
}

let text = " the averange age is"

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);



console.log( text + "=" + average);