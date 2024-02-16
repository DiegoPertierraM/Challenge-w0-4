import {
  removeFirstAndLastChar,
  isPalindrome,
  countVowels,
  isPangram,
  checkVowels,
  countBackwards,
  calcAge,
  isOfAge,
  isOfAgePrecise,
  rollDice,
  checkIfLeapyear,
  playRPS,
  giveRandomUsername,
  calcTip,
  calcDiscount,
  billRender,
} from './helpers.js';

console.log(
  'removeFirstAndLastChar -> Expected: amell',
  removeFirstAndLastChar('Camello')
);
console.log('isPalindrome -> Expected: false', isPalindrome('Caravana'));
console.log('isPalindrome -> Expected: true', isPalindrome('Sometemos'));
console.log('isPalindrome -> Expected: true', isPalindrome('Sometemós'));
console.log('countVowels -> Expected: 3', countVowels('Cabeza'));
console.log(
  'isPangram -> Expected: true',
  isPangram('The quick brown fox jumps over the lazy dog')
);
console.log(
  'isPangram -> Expected: false',
  isPangram('La casa es de color verde')
);
console.log('checkVowels -> Expected: true', checkVowels('Murcielago'));
console.log('checkVowels -> Expected: false', checkVowels('Carrito'));
console.log('countBackwards -> Expected: 23,22,21,20...0', countBackwards(23));
console.log('calcAge -> Expected: 26', calcAge(1998));
console.log('isOfAge -> Expected: true', isOfAge('1998-01-08'));
console.log('isOfAge -> Expected: false', isOfAge('2009-05-15'));
console.log('isOfAgePrecise -> Expected: true', isOfAgePrecise('2006-01-30'));
console.log('isOfAgePrecise -> Expected: false', isOfAgePrecise('2006-10-30'));
console.log('rollDice ->', rollDice());
console.log('rollDice ->', rollDice());
console.log('rollDice ->', rollDice());
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(1900));
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(2000));
console.log('checkIfLeapyear -> Expected: False', checkIfLeapyear(2001));
console.log('checkIfLeapyear -> Expected: True', checkIfLeapyear(2024));
console.log('playRPS ->', playRPS('rock'));
console.log('playRPS ->', playRPS('paper'));
console.log('playRPS ->', playRPS('scissors'));
console.log(
  'giveRandomeUsername -> Expected: Random username',
  giveRandomUsername(
    ['Pedro', 'Manolo', 'Lucía', 'Silvia'],
    ['García', 'Rodríguez', 'Pérez', 'Herrero']
  )
);
console.log('calcTip ->', calcTip(201.45, 20.5));
console.log('calcTip ->', billRender(201.45, 20.5));
console.log('calcDiscount ->', calcDiscount(124.5, 0.7));
