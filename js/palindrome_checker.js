function palindrome(str) {
    let clearStr = str.replace(/[-_ ()/:\\|,.]/g, '');
    clearStr = clearStr.toLowerCase();
    let strLen = clearStr.length - 1;
    let poli = '';

    for (let i = strLen; i > -1; i--) {
        poli = poli + clearStr[i];
    }

    if (clearStr == poli) {
        return true
    } else {
        return false
    }
}

palindrome("_Eye");
