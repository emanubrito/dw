function average(arr){
     let n = 0
    let result = 0
    for(i of arr){
        result += i
        n += 1
    }
    result = result/n
    return result
}
console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
console.log(average([10, 20, 30])); // Deve exibir: 20