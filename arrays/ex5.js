function removeDuplicates(arr){
    let arrNovo = []
    for(i of arr){
        if(arr[i-1] !== arr[i]){
            arrNovo.push(i)
        }
    }
    return arrNovo
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]