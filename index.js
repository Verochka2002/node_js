const colors = require("colors");
const [arg1, arg2] = process.argv.slice(2);
const primeArray = [];

if (!arg1 || !arg2) { //проверка правильности аргументов
  console.log(colors.red("Должно быть 2 аргументы"));
} else if (arg1 > arg2) {
  console.log(colors.red("arg1 не может быть больше, чем arg2"));
} else {
  for (let i = arg1; i <= arg2; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  if (primeArray.length === 0) {
    console.log(colors.red("Интервал не содержит простые числа"));
  } else {
    for (let i = 0; i < primeArray.length; i++) {
      if (3 * i < primeArray.length)
        console.log(colors.green(primeArray[3 * i]));
      if (1 + 3 * i < primeArray.length)
        console.log(colors.yellow(primeArray[1 + 3 * i]));
      if (2 + 3 * i < primeArray.length)
        console.log(colors.red(primeArray[2 + 3 * i]));
    }
    console.log(primeArray);
  }
}

function isPrime(i) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0 || i % (j + 1) === 0) {
      return false;
    } else {
      return i;
    }
  }
