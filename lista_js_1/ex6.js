function anobissexto(ano) {
    if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
        return true; 
    } else {
        return false; 
    }
}

let ano = 2007;
if (anobissexto(ano)) {
    console.log(ano + " é bissexto.");
} else {
    console.log(ano + " não é bissexto.");
}