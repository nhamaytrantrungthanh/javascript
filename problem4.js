/* Bài 4: Kiểm tra 1 chuỗi có phải là chuỗi Palindrome hay không

Palindrome là một từ hoặc một cụm từ mà khi ta đọc xuôi hoặc đọc ngược thì nó cũng như vậy, ví dụ từ moom, racecar

Nếu:

- Là chuỗi Palindrome ⇒ Return true
- Không là chuỗi Palindrome ⇒ Return false 


Ví dụ **1:**

```
Input: s = "moom"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

```

Ví dụ **2:**

```
Input: s = "racecar"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

function isPalindrome(str_entry) {
  // Change the string into lower case and remove  all non-alphanumeric characters
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  var count = 0;
  // Check whether the string is empty or not
  if (cstr === "") {
    document.write("Nothing found!");
    return false;
  }
  // Check if the length of the string is even or odd
  if (cstr.length % 2 === 0) {
    count = cstr.length / 2;
  } else {
    // If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
      document.write("Entry is a palindrome.");
      return true;
    } else {
      // If the length of the string is odd ignore middle character
      count = (cstr.length - 1) / 2;
    }
  }
  // Loop through to check the first character to the last character and then move next
  for (var x = 0; x < count; x++) {
    // Compare characters and drop them if they do not match
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      document.write("Entry is not a palindrome.");
      return false;
    }
  }
  document.write("The entry is a palindrome.");
  return true;
}
isPalindrome("madam");
isPalindrome("nurses run");
isPalindrome("fox");

