export const cutString = (str) => {
  return str.slice(1, str.length - 1);
};

export const isPalindrome = (str) => {
  const middle = Math.trunc(str.length / 2);
  const firstPart = str.slice(0, middle);
  let secondPart = str.slice(middle + 1, str.length);
  if (firstPart === secondPart.split('').reverse().join('')) {
    return true;
  }
  return false;
};
