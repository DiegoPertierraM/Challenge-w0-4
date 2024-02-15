import {
  cutString,
  isPalindrome,
  countVowels,
  checkIfPangram,
  checkVowels,
  countBackwards,
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
