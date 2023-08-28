/*
  - Trong đó:
    - workingTime: là số giờ làm việc trên trên tháng
    - salary: là lương/ 1h làm việc
 */
const employeesInfo = [
  { name: "David", workingTime: 98, salary: 10 },
  { name: "Luiz", workingTime: 78, salary: 20 },
  { name: "Silva", workingTime: 165, salary: 25 },
  { name: "Santos", workingTime: 215, salary: 30 },
  { name: "Alex", workingTime: 143, salary: 28 },
];
//Cau b: Viet ham tinh luong cua 1 nhan vien bat ki trong danh sach employeesInfo
/*
  - Lương của nhân viên = workingTime * salary + bonus
  - Cách tính bonus:
    - Nếu số giờ làm việc >= 150: bonus = 200
    - Nếu số giờ làm việc >= 100 và < 150: bonus = 150
    - Nếu số giờ làm việc >= 50 và < 100 : bonus = 100
    - Nếu số giờ làm việc  < 50: bonus = 50
 */
/*
	- Input: ten 1 nhan vien bat ki trong employees list
	- Output: Luong cua nhan vien do
	- Goi y: su dung ham obj.hasOwnProperty(key) de kiem tra key co ton tai trong obj hay khong.
	- Co the tach nho logic tinh bonus thanh 1 function rieng => De dang hon.
*/

function getTotalSalaryOfEmployee(name){
  name = "";
  if (workingTime >= 150) {
    console.log("bonus 200")
  } else if (workingTime >= 100 && workingTime < 150) {
    console.log("bonus 150")
  } else if (workingTime >= 50 && workingTime < 100) {
    console.log("bonus 100")
  } else if (workingTime < 50 ) {
    console.log("bonus 50")
  }
}
console.log(getTotalSalaryOfEmployee("name"));
getTotalSalaryOfEmployee("Lenin") // "Nhân viên không tồn tại"
getTotalSalaryOfEmployee("Alex") // "Alex's salary: $4154"
getTotalSalaryOfEmployee("Luiz") // "Luiz's salary: $1660"
