function isPalindrome(str){
    strrev = Array.from(str).reverse().join("");
    if(str == strrev)
    {
        return true;
    }else{
        return false;
    }
}

console.log(`racecar is palinfrome ${isPalindrome('racecar')}`);
console.log(`tacos is palinfrome ${isPalindrome('tacos')}`);