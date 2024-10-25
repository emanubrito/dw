function countVowels(palavra){
   let num = 0
   
   for (i of palavra){
    if (i == 'a' || i == 'A' || i == 'e' || i == 'E' || i == 'i' || i == 'I' || i == 'o' || i == 'O' || i == 'u' ||i == 'U'){
        num += 1
    }
   }
   return num
}

console.log(countVowels("OpenAI")); // Deve exibir: 3
console.log(countVowels("JavaScript")); // Deve exibir: 3