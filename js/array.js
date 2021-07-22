// INITIALIZATION

var averageTemp = [];

averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
averageTemp[2] = 42;
averageTemp[3] = 38;
averageTemp[4] = 25.5;

console.log(averageTemp);

var weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// ITERATION

for (var index = 0; index < weekDays.length; index++) {
  console.log(weekDays[index]);
}

var fibonacci = [];

fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 2;

for (var index = 3; index < 20; index++) {
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}

console.log(fibonacci);

// ADD AND REMOVE ELEMENTS
var numbers = [1, 2, 3];

numbers[numbers.length] = 4;
numbers[numbers.length] = 5;

numbers.push(9);
numbers.unshift(0);

console.log(numbers);

numbers.pop();
numbers.shift();

console.log(numbers);

numbers.splice(1, 2);

console.log(numbers);

numbers.splice(1, 0, 8, 9);

console.log(numbers);

// TWO-DIMENSIONAL

var averageTempWeek = [];

var averageTemp1 = [10, 20, 30, 40];
var averageTemp2 = [50, 60, 70, 80];

averageTempWeek[0] = averageTemp1;
averageTempWeek[1] = averageTemp2;

console.log(averageTempWeek);

for (var index = 0; index < averageTempWeek; index++) {
  for (var j = 0; j < averageTempWeek[index].lenght; j++) {
    console.log(averageTempWeek[index][j]);
  }
}

// THREE-DIMENSIONAL

var month = [];

var firstWeeks = [];
var lastWeeks = [];

var temp1 = [10, 20, 30, 40];
var temp2 = [50, 60, 70, 80];
var temp3 = [1, 2, 3, 4];
var temp4 = [4, 5, 7, 8];

firstWeeks = [temp1, temp2];
lastWeeks = [temp3, temp4];

month = [firstWeeks, lastWeeks];

console.log(month[0][1][3]);

for (x = 0; x < month.length; x++) {
  for (y = 0; y < month[x].length; y++) {
    for (z = 0; z < month[x][y].length; z++) {
      console.log(month[x][y][z]);
    }
  }
}
