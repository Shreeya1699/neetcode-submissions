class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 0){
        return false;
    }

    const palindromeMap = [];
    const regex = /^[a-zA-Z0-9]+$/;
    for(let i=0; i<s.length;i++){
        if (regex.test(s.charAt(i))){
            palindromeMap.push(s.charAt(i));
        }
    }
    for(let i =0; i<Math.floor(palindromeMap.length/2);i++){
        if(!(palindromeMap[i].toLowerCase() === palindromeMap[palindromeMap.length -1 -i].toLowerCase())){
            return false;
        }
    }

    return true;
    }
}
