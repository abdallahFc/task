function checkPalindrome() {
    let userInput = prompt('Enter a string:');
    let caseSensitive = confirm('Do you want to consider the case of the entered string?');

    if (userInput) {
        let result = isPalindrome(userInput, caseSensitive);
        if (result) {
            alert('Palindrome!');
        } else {
            alert('Not a palindrome.');
        }
    } else {
        alert('Invalid input. Please enter a string.');
    }
}
function isPalindrome(str, sen) {
    if (!sen) {
        str = str.toLowerCase();
    }
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return str === reversedStr;
}
checkPalindrome();
