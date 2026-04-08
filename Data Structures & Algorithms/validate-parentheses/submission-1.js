class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let char of s){
            if(['}',']',')'].includes(char)){
                if(stack.length == 0)
                    return false;
                else{
                    let top = stack[stack.length-1];
                    if((top == '[' && char == ']') || (top == '(' && char == ')') || (top == '{' && char == '}')){
                        stack.pop();
                    }else{
                        return false;
                    }
                    
                }    
            }else{
                stack.push(char);
            }
            // console.log(stack)
        }
        return stack.length > 0 ? false: true;
    }
}
