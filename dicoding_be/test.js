// TODO 1

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// TODO 2

const validateNumberInput = (a, b, c) => {
    if (typeof a !== 'number') {
        throw new ValidationError('Argunmen pertama harus number');
    }
    if (typeof b !== 'number') {
        throw new ValidationError('Argunmen kedua harus number');
    }
    if (typeof c !== 'number') {
        throw new ValidationError('Argunmen ketiga harus number');
    }
};

const detectTriangle = (a, b, c) => {
    // TODO 3
    try {
        validateNumberInput(a, b, c);
    } catch (error) {
        return error.message;
    }
  
    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
    return 'Segitiga sembarang';
  };

console.log(detectTriangle(1, 1, 1));
console.log(detectTriangle(4, 4, 2)); 
console.log(detectTriangle(3, 4, 6)); 
console.log(detectTriangle(1, false, 1)); 
console.log(detectTriangle('a', 3, 5));
console.log(detectTriangle(12, 2, null)); 