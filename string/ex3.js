function isPalindrome(palavra){
    let pinv = palavra.split('').reverse().join('')
    if (pinv == palavra){
        return true
    }
    else {
        return false
    }
}

console.log(isPalindrome("arara")); // Deve exibir: true
console.log(isPalindrome("hello")); // Deve exibir: false