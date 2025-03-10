export function isPalindrome (x){
    if(x<0) return false

    let string = x.toString();

    let left = 0;
    let right = string.length-1;

    while(left < right){
        if(string[left] != string[right]) return false
        left++
        right--
    }

    return true
}
