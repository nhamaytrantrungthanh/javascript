/*
    ### Bài 2 Count Vowels `(25 points)`
Viết một Javascript function, đếm số lượng các vowels trong một chuỗi
Biết rẳng vowels = { 'e' , 'u', 'o' ,'a' ,'i'}
Mỗi `test case` đúng: `5 points` 
Input: Một string
Output: Số lượng vowels (có xử lý ngoại lệ)
*/

vowels = ["e", "u", "o", "a", "i"];
function countVowels(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (vowels[j] == str[i]) {
        sum++;
      }
    }
  }
  return sum;
}
console.log(countVowels("Javascript is a beautiful programming language"));
