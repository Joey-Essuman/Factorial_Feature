const Calculate = {
  factorial(inputNumber) {
    // Edge Case of a zero(0) input
    if (inputNumber === 0) {
      return 1;
    }
    for (let i = inputNumber - 1; i >= 1; i--) {
      inputNumber = inputNumber * i;
    }
    return inputNumber;
  },
};

module.exports = Calculate;
