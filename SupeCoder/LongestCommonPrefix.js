/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Handle edge case: empty array

    let prefix = strs[0]; // Start with the first string as the prefix

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix if it's not found at the start of the current string
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""; // Return early if there's no common prefix
        }
    }

    return prefix; // Return the longest common prefix
}

// Example usage:
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["c", "c", "c"])); // Output: "c"
