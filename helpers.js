// 1

export const removeFirstAndLastChar = (str) => {
  return str.slice(1, -1);
};

// 2

const removeAccents = (str) => {
  const arr = str.split('').map((letter) => {
    if (letter === 'á' || letter === 'à' || letter === 'ä') {
      return (letter = 'a');
    }
    if (letter === 'é' || letter === 'è' || letter === 'ë') {
      return (letter = 'e');
    }
    if (letter === 'í' || letter === 'ì' || letter === 'ï') {
      return (letter = 'i');
    }
    if (letter === 'ó' || letter === 'ò' || letter === 'ö') {
      return (letter = 'o');
    }
    if (letter === 'ú' || letter === 'ù' || letter === 'ü') {
      return (letter = 'u');
    }
  });
  return arr.join('');

  // -> No está bien, corregir
};

export const isPalindrome = (str) => {
  // const middle = Math.trunc(str.length / 2);
  // const firstPart = str.slice(0, middle).toLowerCase();
  // let secondPart = str.slice(middle + 1, str.length).toLowerCase();
  // if (firstPart === secondPart.split('').reverse().join('')) {
  //   return true;
  // }
  // return false;

  // --> Mal, me he complicado la vida muy innecesariamente

  // --> Para estar perfecto hay que crear una función aparte para
  //     quitar los acentos, y aplicarla a la palabra.

  const lowerCaseStr = str.toLowerCase();
  const reversedStr = lowerCaseStr.split('').reverse().join('');
  return lowerCaseStr === reversedStr;
};

// 3

export const countVowels = (str) => {
  // let counter = 0;
  // str = str.toLowerCase();
  // for (let i = 0; i < str.length; i++) {
  //   if (
  //     str[i] === 'a' ||
  //     str[i] === 'e' ||
  //     str[i] === 'i' ||
  //     str[i] === 'o' ||
  //     str[i] === 'u'
  //   ) {
  //     counter++;
  //   }
  // }
  // return counter;

  // --> SOLUCIÓN CORRECTA
  // ------------------------------------------

  const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      counter++;
    }
  }
  return counter;
};

// 4

export const isPangram = (str) => {
  // const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // let arr = str.replace(/ +/g, '').toLowerCase().split('').sort();
  // let sortedStr = arr
  //   .filter((value, index) => arr.indexOf(value) === index)
  //   .join('');
  // if (alphabet === sortedStr) {
  //   return true;
  // }
  // return false;

  // --> Muy complicado innecesariamente, es mucho más simple

  // --> SOLUCIÓN CORRECTA
  // ------------------------------------------

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (!lowerStr.includes(alphabet[i])) {
      return false;
    }
  }
  return true;
};

// 5

export const checkVowels = (str) => {
  return str.toLowerCase().includes('a' && 'e' && 'i' && 'o' && 'u');
  // -> No tiene en cuenta acentos
};

// 6

export const countBackwards = (num) => {
  let countdown = [];
  while (num >= 0) {
    countdown.push(num);
    num--;
  }
  // --> Mejor un bucle for, queda más limpio
  return countdown.join(', ');
};

// 7

export const calcAge = (year) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  return currentYear - year;
  // const actualDate = {
  //   actDay: 16,
  //   actMonth: 2,
  //   actYear: 2024,
  // };
  // const birthdate = {
  //   bDay: day,
  //   bMonth: month,
  //   bYear: year,
  // };
  // const age = actualDate.actYear - birthdate.bYear;
  // if (actualDate.actMonth > birthdate.bMonth) {
  //   return age;
  // }
  // if (actualDate.actDay > birthdate.bDay) {
  //   return age;
  // }
  // return age - 1;
};

// 8

// export const isOfAge = (age) => {
//   return age > 18 ? true : false;
// };

export const isOfAge = (dateIso) => {
  const birthDate = new Date(dateIso);
  const now = new Date();
  const currentYear = now.getFullYear();
  const age = currentYear - birthDate.getFullYear();
  if (age >= 18) {
    return 'Es mayor de edad';
  }
  return 'Es menor de edad';
};

export const isOfAgePrecise = (dateIso) => {
  const birthDate = new Date(dateIso);
  const now = new Date();
  const time = now - birthDate;
  const age = time / 1000 / 60 / 60 / 24 / 365;
  if (age >= 18) {
    return 'Es mayor de edad';
  }
  return 'Es menor de edad';
};

//9

export const rollDice = () => {
  return Math.trunc(Math.random() * 6) + 1;
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

  // --> Lo correcto sería hacerlo con Date
};

// 11

export const playRPS = (move) => {
  const options = ['rock', 'paper', 'scissors'];
  const machineChoice = options[Math.trunc(Math.random() * options.length)];
  const play = {
    user: move,
    machine: machineChoice,
  };
  if (machineChoice === move.toLowerCase()) {
    play.result = 'Empate';
    return play;
  } else if (
    (machineChoice === 'rock' && move === 'paper') ||
    (machineChoice === 'paper' && move === 'scissors') ||
    (machineChoice === 'scissors' && move === 'rock')
  ) {
    play.result = 'Ganaste';
    return play;
  }
  play.result = 'Perdiste';
  return play;
};

// 12

export const giveRandomUsername = (names, surnames) => {
  const name = names[Math.trunc(Math.random() * names.length)];
  const surname = surnames[Math.trunc(Math.random() * surnames.length)];
  const num = Math.trunc(Math.random() * 101);
  return `${name} ${surname} ${num}`;
};

// 13

export const calcTip = (total, percentage) => {
  const tip = total * (percentage / 100);
  const totalToPay = total + tip;
  return {
    total: Math.round(total * 100) / 100,
    tip: Math.round(tip * 100) / 100,
    totalToPay: Math.round(totalToPay * 100) / 100,
  };
};

export const billRender = (total, percentage) => {
  const data = calcTip(total, percentage);
  const formattedData = `
  Total: ${data.total.toFixed(2)}
  Propina: ${data.tip.toFixed(2)}
  ---------------------
  Total a pagar: ${data.totalToPay.toFixed(2)}
  `;
  console.log(formattedData);
};

// 14

export const calcDiscount = (price, discount) => {
  const x = {
    bill: price.toFixed(2),
    discount: discount,
    discountedCost: (price - price * discount).toFixed(2),
  };
  return x;
};
