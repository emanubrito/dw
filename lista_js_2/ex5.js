function imprimirprimos(N) {
    let count = 0;
    let numero = 2;
    
    while (count < N) {
        if (verificarprimo(numero)) {
            console.log(numero);
            count++;
        }
        numero++;
    }
}

function verificarprimo(N) {
    if (N < 2) return false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return false;
        }
    }
    return true;
}

imprimirprimos(5);