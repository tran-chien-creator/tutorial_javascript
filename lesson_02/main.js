// Các phép toán cơ bản + - * / %
var numberA = 6,
  numberB = 5;
console.log("Tổng 2 số", numberA, "và", numberB, "là", numberA + numberB);
console.log(`Hiệu 2 số ${numberA} và ${numberB} là ${numberA - numberB}`);
console.log(`Nhân 2 số ${numberA} và ${numberB} là ${numberA * numberB}`);
console.log(numberA / numberB);
console.log(numberA % numberB);
// Right to left
let x = (y = 25);

// Ép kiểu dữ liệu
// Mặc định dữ liệu trong hàm prompt sẽ là kiểu string nếu không ép kiểu
let a = prompt("Mời bạn nhập vào số đầu tiên:");
console.log(typeof a);
let b = 5;
console.log(typeof b);
// Do biến a đang kiểu string lên khi cộng với biến b kiểu số thì nó sẽ ngầm ép kiểu dữ liệu biến b sang string và thực hiện cộng chuỗi
// Lưu ý chỉ thực hiệp cộng chuỗi đối với phép + , còn các phép toán tử khác sẽ thực hiện theo quy ước toán học thông  thường
console.log(a - b);
// Ép kiểu sang số nguyên
let c = parseInt(prompt("Vui lòng nhập vào số nguyên đầu tiên"));
console.log(`${typeof c} ${c}`);
// Ép kiểu sang số thực
let d = parseFloat(prompt("Vui lòng nhập vào số thực thứ 2"));
console.log(`${typeof d} ${d}`);
// Ép kiểu theo dữ liệu đầu vào
let e = Number(prompt("Vui lòng nhập vào số thứ 3"));
console.log(`${typeof e} ${e}`);
