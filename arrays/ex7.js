function mergeArrays(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        result.push(arr2[j]);
    }
    return result;
}
console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]
