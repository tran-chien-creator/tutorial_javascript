// Gán giá trị cho biến Assigment
var numberA = 1;
numberA += 2; // 3
console.log(numberA);
numberA -= 2; // 1
console.log(numberA);
numberA *= 2; // 2
console.log(numberA);
numberA /= 2; // 1
console.log(numberA);
numberA %= 2; // 1
console.log(numberA);

// Bài tập

var a = 7,
  b = 15,
  c = 5,
  d = 12,
  e = 5,
  f = 2;

a += 3;
b -= 6;
c *= 4;
d /= 2;
e -= f + 1;
console.log(`a = ${a}`); //10
console.log(`b = ${b}`); //9
console.log(`c = ${c}`); //20
console.log(`d = ${d}`); //6
console.log(`e = ${e}`); //2

// Toán tự tiền tố và hậu tố (prefix and postfix)
// Phép toán đơn lẻ
a++;
console.log(`a = ${a}`); //11
b--;
console.log(`b = ${b}`); //8

// Phép toán phức tạp nếu có prefix and postfix thì làm theo bước sau
// Step 1: Tính cho biến có toán tử prefix trước
// Step 2: Sau đó thực hiện phép tính sau dấu "="
// Step 3: Gán giá trị vừa tính sau dấu "=" cho biến
// Step 4: Lúc này mới thực hiện tính cho biến có toán tử postfix

//Example
let x = 1,
  y = 2;
let z = x++ - ++y + 1;
// Step 1: ++y = 3
// Step 2: x = 1, y = 3 => 1 - 3 + 1 = -1
// Step 3: Gán giá trị cho z = -1
// Step 4: Giá trị của x lúc này mới tăng lên 1 => x = 2
console.log(`z = ${z}`);
console.log(`x = ${x}`);
