function countOccurrences(arr, element){
    let conta = 0 
    for(i of arr){
        if(i == element){
            conta += 1
        }
    }
    return conta
}

console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2