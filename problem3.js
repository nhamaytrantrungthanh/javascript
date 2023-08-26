/*

Bài 3:  `20 points`
Viết chương trình xóa các element trùng trong mảng
Input: mảng 1 chiều
Output: mảng đã được remove các phần tử trùng
*/
array = ["one", "one", "one", "two","two", "three", "one"]

function removeDuplicateFromArray(array) {
    let i = array.filter((item, index) => array.indexOf(item) === index)
    console.log(i);
}
let i = 0;  
removeDuplicateFromArray();
 