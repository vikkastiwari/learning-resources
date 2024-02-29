function longestCommonPrefix(arr) {
	// Assign the first element of arr to result
	let result = arr[0];
	let length = result.length;

	// Iterate for the rest of the elements in the array
	for (let i = 1; i < arr.length; i++) {
		// Find the index of result in the current string
		while (arr[i].indexOf(result) !== 0) {
			// Update the matched substring prefix
			result = result.substring(0, length - 1);
            console.log(result.substring(0, length - 1));
			length--;

			// Check for an empty case and return if true
			if (result === '') {
				return '-1';
			}
		}
	}

	return result;
}

// Driver code to test the function
const input = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log("The longest Common Prefix is:", longestCommonPrefix(input));
