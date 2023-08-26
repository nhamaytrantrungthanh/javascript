/* ### Bài 1 `(15 points)`

Viết một function Javascript in ra các số từ 1 đến 15 **trên 1 dòng** thỏa mãn điều kiện sau:
- Nếu số đó ***chia hết cho 3*** ⇒ in ra **"Fizz"**
- Nếu số đó ***chia hết cho 5*** ⇒ in ra "**Buzz"**
- Nếu số đó ***chia hết cho 3 và 5***⇒ in ra **"FizzBuzz"**
**Output**: là một **string** thõa yêu cầu đề bài như trên.
*/

function fizzBuzz() {
  for (let i = 0; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    }
  }
}
fizzBuzz();


