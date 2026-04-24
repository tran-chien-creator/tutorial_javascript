console.log("Hello World");
// alert("Test hàm alert");

// Variable
// Khai báo biến
var myName;
let myAge;

// Khởi tạo biến
var myNameFriend = "Nguyen Van A";
var myAgeFriend = 29;
const myBirth = 2003;

// Xuất giá trị của biến
console.log(
  "Tên bạn của tôi là: " +
    myNameFriend +
    " và năm nay anh" +
    myAgeFriend +
    " tuổi",
);

// Gán giá trị mới cho biến
myName = "Tran Quyet Chien";
console.log(myName);

// Example prompt & Variable
myName = prompt("Vui lòng nhập vào tên đầy đủ của bạn");
console.log(myName);
console.log("Chào mừng " + myName + " đã đến với lộ trình học JS!");

// Primitive Data types
// String
var myString = "Hello World";
// Number
var numberInt = 19;
var numberFloat = 2.3;
// Boolean
var isInt = true;
console.log(typeof myString);
console.log(typeof numberInt);
console.log(typeof numberFloat);
console.log(typeof isInt);

// undefined
var c = undefined;
// Null
var ageLuxury = null;

// Các cách xuất dữ liệu
let a = 5,
  b = 5,
  result = a * b;
// Cách 1
console.log("Kết quả của phép nhân " + a + " và " + b + " là: " + result);
// Cách 2:
console.log("Kết quả của phép nhân", a, "và", b, "là:", result);
// Cách 3
console.log(`Kết quả của phép nhân ${a} và ${b} là: ${result}`);
// Cách 4:
console.log(`Kết quả của phép nhân %s và %s là: %s`, a, b, result);
