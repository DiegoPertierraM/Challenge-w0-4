import {
  removeFirstAndLastChar,
  isPalindrome,
  countVowels,
  checkIfPangram,
  checkVowels,
  countBackwards,
  calcAge,
  isOfAge,
  throwDice,
  checkIfLeapyear,
  playRPS,
  giveRandomUsername,
  calcTip,
  calcDiscount,
} from './helpers.js';

console.log(
  'removeFirstAndLastChar -> Expected: amell',
  removeFirstAndLastChar('Camello')
);
console.log('isPalindrome -> Expected: false', isPalindrome('Caravana'));
console.log('isPalindrome -> Expected: true', isPalindrome('Sometemos'));
console.log('countVowels -> Expected: 3', countVowels('Cabeza'));
console.log(
  'checkIfPangram -> Expected: true',
  checkIfPangram('The quick brown fox jumps over the lazy dog')
);
console.log(
  'checkIfPangram -> Expected: false',
  checkIfPangram('La casa es de color verde')
);
console.log('checkVowels -> Expected: true', checkVowels('Murcielago'));
console.log('checkVowels -> Expected: false', checkVowels('Carrito'));
console.log('countBackwards -> Expected: 23,22,21,20...0', countBackwards(23));
console.log('calcAge -> Expected: 26', calcAge(9, 10, 1998));
console.log('isOfAge -> Expected: true', isOfAge(26));
console.log('isOfAge -> Expected: false', isOfAge(12));
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(1900));
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(2000));
console.log('checkIfLeapyear -> Expected: False', checkIfLeapyear(2001));
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(2024));
console.log('playRPS -> Expected: Win, loss or draw', playRPS('rock'));
console.log(
  'giveRandomeUsername -> Expected: Random username',
  giveRandomUsername(
    ['Pedro', 'Manolo', 'Lucía', 'Silvia'],
    ['García', 'Rodríguez', 'Pérez', 'Herrero']
  )
);
console.log(
  'calcTip -> Expected: Bill, Amount of tip and Total cost',
  calcTip(201.45, 0.2)
);
console.log(
  'calcDiscount -> Expected: Price, Discount and Total price',
  calcDiscount(124.5, 0.7)
);
