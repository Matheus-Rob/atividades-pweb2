function areaCirculo(raio) {
    return (3.141592653589793 * (raio ** 2))
};

function calc(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "invalidOperator"
    }
}

function tipoTriangulo(lado1, lado2, lado3) {
    
    if ( (lado1 > lado2+lado3) || (lado2 > lado3+lado1) || (lado3 > lado2+lado1) || (lado1 <= 0) || (lado2 <= 0) || (lado3 <= 0) ) {
        return "none"
    };

    if ((lado1 === lado2) && (lado1 === lado3)) {
        return "equilateral"
    } else if ((lado1 != lado2) && (lado1 != lado3)) {
        return "scalene"
    } else {
        return "isosceles"
    }
}

export { areaCirculo, calc, tipoTriangulo };