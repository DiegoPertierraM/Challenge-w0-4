import {
  cutString,
  isPalindrome,
  countVowels,
  checkIfPangram,
} from './helpers.js';

console.log('cutString -> Expected: amell', cutString('Camello'));
console.log('isPalindrome -> Expected: false', isPalindrome('caravana'));
console.log('isPalindrome -> Expected: true', isPalindrome('Sometemos'));
console.log('countVowels -> Expected: 5', countVowels('muerciélago'));
console.log(
  'checkIfPangram -> Expected: ',
  checkIfPangram('El veloz murciélago hindú comía feliz cardillo y kiwi')
);
console.log(
  'checkIfPangram -> Expected: ',
  checkIfPangram('La casa es de color verde')
);
