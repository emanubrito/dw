function replaceChar(str, oldChar, newChar){
    newStr = ""
    for (i of str){
        if (i == oldChar){
            i = newChar
            newStr += i
        }
        else{
            newStr += i
        }
    }
    return newStr
}

console.log(replaceChar("hello world", "l", "z")); // Deve exibir: "hezzo worzd"
console.log(replaceChar("banana", "a", "o")); // Deve exibir: "bonono"