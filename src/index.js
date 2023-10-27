module.exports = function check(str, bracketsConfig) {
  if (bracketsConfig === undefined) {
    return false;
  }
  let openBrackets = {};
  let closeBrackets = {};
  let stack = [];
  bracketsConfig.forEach((el, index) => {
    //ключ это закрытие ) свойство это открытие (
    openBrackets[el[1]] = el[0];
    closeBrackets[el[0]] = el[0];
  });

  str.split("").forEach((el) => {
    if (closeBrackets[el]) {
      if (closeBrackets[el] === openBrackets[el] && el === stack[0]) {
        stack.shift();
      } else stack.unshift(el);
    } else if (
      openBrackets.hasOwnProperty(el) &&
      openBrackets[el] === stack[0]
    ) {
      stack.shift();
    } else stack.unshift(el);
  });

  return stack.length === 0;
};
