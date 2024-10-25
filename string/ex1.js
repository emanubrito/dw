function reverseString(palavra){
    return palavra.split('').reverse().join('')
}

console.log(reverseString("javascript")); // Deve exibir: "tpircsavaj"
console.log(reverseString("hello")); // Deve exibir: "olleh"