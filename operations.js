const add = (numbers) => {
  return numbers.reduce((prev, current) => prev + current);
};

const subtract = (numbers) => {
  return numbers.reduce((prev, current) => prev - current);
};

const multiply = (numbers) => {
  return numbers.reduce((prev, current) => prev * current);
};

const divide = (numbers) => {
  return numbers.reduce((prev, current) => prev / current);
};

export { add, subtract, multiply, divide };
