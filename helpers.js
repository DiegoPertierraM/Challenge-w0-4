// 1

export const removeFirstAndLastChar = (str) => {
  return str.slice(1, str.length - 1);
};

// 2

export const isPalindrome = (str) => {
  const middle = Math.trunc(str.length / 2);
  const firstPart = str.slice(0, middle).toLowerCase();
  let secondPart = str.slice(middle + 1, str.length).toLowerCase();
  if (firstPart === secondPart.split('').reverse().join('')) {
    return true;
  }
  return false;
};

// 3

export const countVowels = (str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() === 'a' ||
      str[i].toLowerCase() === 'e' ||
      str[i].toLowerCase() === 'i' ||
      str[i].toLowerCase() === 'o' ||
      str[i].toLowerCase() === 'u'
    ) {
      counter++;
    }
  }
  return counter;
};

// 4

export const checkIfPangram = (str) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  str = str.replace(/ +/g, '').toLowerCase().split('').sort();
  str = str.filter((value, index) => str.indexOf(value) === index).join('');
  if (alphabet === str) {
    return true;
  }
  return false;
};

// 5

export const checkVowels = (str) => {
  return str.toLowerCase().includes('a' && 'e' && 'i' && 'o' && 'u');
};

// 6

export const countBackwards = (num) => {
  let countdown = [];
  while (num >= 0) {
    countdown.push(num);
    num--;
  }
  return countdown.join(', ');
};

// 7

export const calcAge = (day, month, year) => {
  const actualDate = {
    actDay: 16,
    actMonth: 2,
    actYear: 2024,
  };
  const birthdate = {
    bDay: day,
    bMonth: month,
    bYear: year,
  };
  const age = actualDate.actYear - birthdate.bYear;
  if (actualDate.actMonth > birthdate.bMonth) {
    return age;
  }
  if (actualDate.actDay > birthdate.bDay) {
    return age;
  }
  return age - 1;
};

// 8

export const isOfAge = (age) => {
  return age > 18 ? true : false;
};

//9

export const throwDice = () => {
  return Math.trunc(Math.random() * 7);
};

// 10

export const checkIfLeapyear = (year) => {
  if (
    year.toString().lastIndexOf('0') === 4 &&
    year.toString().indexOf('0') === 3
  ) {
    if (year % 400 === 0) {
      return true;
    }
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
};

// 11

export const playRPS = (play) => {
  const options = ['rock', 'paper', 'scissors'];
  const machineChoice = options[Math.trunc(Math.random() * options.length)];
  console.log(machineChoice);
  if (machineChoice === play.toLowerCase()) {
    return 'Empate!';
  }
  if (
    (machineChoice === 'rock' && play === 'paper') ||
    (machineChoice === 'paper' && play === 'scissors') ||
    (machineChoice === 'scissors' && play === 'rock')
  ) {
    return 'Enhorabuena! Has ganado.';
  }
  return 'Lo siento, has perdido :(';
};

// 12

export const giveRandomUsername = (names, surnames) => {
  const name = names[Math.trunc(Math.random() * names.length)];
  const surname = surnames[Math.trunc(Math.random() * surnames.length)];
  const num = Math.trunc(Math.random() * 101);
  return `${name} ${surname} ${num}`;
};

// 13

export const calcTip = (bill, percentage) => {
  const totalCost = bill + bill * percentage;
  return `
  Cuenta: ${bill.toFixed(2)} 
  Propina: ${percentage * 100}% 
  Precio: ${totalCost.toFixed(2)}`;
};

// 14

export const calcDiscount = (price, discount) => {
  const totalCost = price - price * discount;
  return `
  Precio: ${price.toFixed(2)} 
  Descuento: ${discount * 100}% 
  Precio con descuento: ${totalCost.toFixed(2)}`;
};
