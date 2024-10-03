function verificar(palcool, pgasolina) {
    if (palcool < 0.7 * pgasolina) {
        return true;
    } else {
        return false;
    }
}


let palcool = 4.00; 
let pgasolina = 6.00;

if (verificar(palcool, pgasolina)) {
    console.log("Compensa usar álcool.");
} else {
    console.log("Não compensa usar álcool.");
}