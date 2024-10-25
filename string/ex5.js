function getInitials(nome){
    let n = nome.split(' ').map(palavra => palavra.charAt(0).toUpperCase()).join('')
    return n
}

console.log(getInitials("João Silva")); // Deve exibir: "JS"
console.log(getInitials("Maria Oliveira")); // Deve exibir: "MO"