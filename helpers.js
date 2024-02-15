export const cutString = (str) => {
  return str.slice(1, str.length - 1);
};

export const isPalindrome = (str) => {
  const middle = Math.trunc(str.length / 2);
  const firstPart = str.slice(0, middle).toLowerCase();
  let secondPart = str.slice(middle + 1, str.length).toLowerCase();
  if (firstPart === secondPart.split('').reverse().join('')) {
    return true;
  }
  return false;
};

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

export const checkIfPangram = (str) => {
  return str
    .toLowerCase()
    .includes(
      'a' &&
        'b' &&
        'c' &&
        'd' &&
        'e' &&
        'f' &&
        'g' &&
        'h' &&
        'i' &&
        'j' &&
        'k' &&
        'l' &&
        'm' &&
        'n' &&
        'ñ' &&
        'o' &&
        'p' &&
        'q' &&
        'r' &&
        's' &&
        't' &&
        'u' &&
        'v' &&
        'w' &&
        'x' &&
        'y' &&
        'z'
    )
    ? 'True'
    : 'False';
};

export const checkVowels = (str) => {
  return str.toLowerCase().includes('a' && 'e' && 'i' && 'o' && 'u');
};

export const countBackwards = (num) => {
  let countdown = [];
  while (num >= 0) {
    countdown.push(num);
    num--;
  }
  return countdown.join(', ');
};

// export const calcAge = (birthdate) => {
//   const today = new Date();
//   const birthDate = new Date(birthdate);
//   let age = today.getFullYear() - birthDate.getFullYear();
//   const monthDiff = today.getMonth() - birthDate.getMonth();

//   if (
//     monthDiff < 0 ||
//     (monthDiff === 0 && today.getDate() < birthDate.getDate())
//   ) {
//     age--;
//   }

//   return age;
// };

export const isOfAge = (age) => {
  return age > 18 ? true : false;
};

export const throwDice = () => {
  return Math.trunc(Math.random() * 7);
};

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
