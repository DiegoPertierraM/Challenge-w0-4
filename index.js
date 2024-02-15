import {
  cutString,
  isPalindrome,
  countVowels,
  checkIfPangram,
  checkVowels,
  countBackwards,
  // calcAge,
  isOfAge,
  throwDice,
  // checkIfLeapyear
  playRPS,
  giveRandomUsername,
  calcTip,
} from './helpers.js';

console.log('cutString -> Expected: amell', cutString('Camello'));
console.log('isPalindrome -> Expected: false', isPalindrome('Caravana'));
console.log('isPalindrome -> Expected: true', isPalindrome('Sometemos'));
console.log('countVowels -> Expected: 3', countVowels('Cabeza'));
console.log(
  'checkIfPangram -> Expected: true',
  checkIfPangram('El veloz murciélago hindú comía feliz cardillo y kiwi')
);
console.log(
  'checkIfPangram -> Expected: false',
  checkIfPangram('La casa es de color verde')
);
console.log('checkVowels -> Expected: true', checkVowels('Murcielago'));
console.log('checkVowels -> Expected: false', checkVowels('Carrito'));
console.log('countBackwards -> Expected: 23,22,21,20...0', countBackwards(23));
// console.log('calcAge -> Expected: 26', calcAge('1998-01-08'));
console.log('isOfAge -> Expected: true', isOfAge(26));
console.log('isOfAge -> Expected: false', isOfAge(12));
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
console.log('throwDice -> Expected: 1,2,3,4,5 or 6', throwDice());
// 10. checkIfLeapyear
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
