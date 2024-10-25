function countOccurrences(palavra, letra){
    let num = 0
    for (i of palavra){
        if (i == letra){
            num += 1
        }
    }
    return num
}

console.log(countOccurrences("banana", "a")); // Deve exibir: 3
console.log(countOccurrences("hello world", "l")); // Deve exibir: 3