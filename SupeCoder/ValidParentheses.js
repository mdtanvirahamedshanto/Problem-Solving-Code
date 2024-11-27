function isValid(s) {
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        // If it's a closing bracket
        if (bracketPairs[char]) {
            // Pop the last opening bracket from the stack
            const top = stack.pop();
            // Check if it matches the expected opening bracket
            if (top !== bracketPairs[char]) {
                return false;
            }
        } else {
            // Otherwise, it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}


// Example 1:

// Input: s = "()[]{}"
// Output: true

// Example 2:

// Input: s = "(]"
// Output: false