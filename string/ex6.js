function toSnakeCase(frase){
    let f = frase.toLowerCase().replace(/ /g, '_')
    return f
}

console.log(toSnakeCase("Hello World")); // Deve exibir: "hello_world"
console.log(toSnakeCase("JavaScript is fun")); // Deve exibir: "javascript_is_fun"