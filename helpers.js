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
