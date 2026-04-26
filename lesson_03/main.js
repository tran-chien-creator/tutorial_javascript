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

// Toán tử logic
console.log(`Toán tử logic:`);

let numberZ = 10;
// AND  thỏa mãn tất cả điều kiện thì trả về True nếu 1 điều kiện bất kỳ không thỏa mãn thì trả về False
console.log(numberZ > 1 && numberZ < 11); //True
console.log(numberZ < 1 && numberZ < 11); //False
// OR thỏa mãn 1 điều kiện trở lên thì trả về True nếu tất cả điều kiện đều không thỏa mãn thì trả về False
console.log(numberZ < 1 || numberZ < 12); //True
console.log(numberZ < 1 || numberZ > 12); //False
// NOT Toán tử phủ định ngược lại của 1 điều kiện bất kỳ
console.log(!(numberZ > 1 && numberZ < 11));

// Bài tập 4: Tính chu vi và diện tích hình tròn
var radiusOfCircle = Number(
  prompt("Bạn hãy nhập vào bán kính của đường tròn:"),
);

var PI = Math.PI;
var perimeterOfCircle = 2 * PI * radiusOfCircle;
var areaOfCircle = PI * radiusOfCircle ** 2;

alert(
  `Chu vi của hình tròn dựa trên bán kính ${radiusOfCircle} là ${perimeterOfCircle}`,
);

alert(
  `Diện tích của hình tròn dựa trên bán kính ${radiusOfCircle} là ${areaOfCircle}`,
);

// Bài tập 5: Tính chu vi và diện tích hình chữ nhập
var lenghtOfRectangle = Number(
  prompt(`Vui lòng nhập vào chiều dài của hình chữ nhập:`),
);
var widthOfRectangle = Number(
  prompt(`Vui lòng nhập vào chiều rộng của hình chữ nhập:`),
);

let perimeterOfRectangle = (lenghtOfRectangle + widthOfRectangle) * 2;
let areaOfRectangle = lenghtOfRectangle * widthOfRectangle;
alert(
  `Chu vi của hình chữ nhật dựa trên chiều dài ${lenghtOfRectangle} và chiều rộng ${widthOfRectangle} là ${perimeterOfRectangle}`,
);
alert(
  `Diện tích của hình chữ nhật dựa trên chiều dài ${lenghtOfRectangle} và chiều rộng ${widthOfRectangle} là ${areaOfRectangle}`,
);

// Bài tập 6: Tính điểm trung bình 3 môn nhập vào từ bàn phím
var pointMath = Number(prompt("Vui lòng nhập vào điểm toán của bạn:"));
var pointLiterature = Number(prompt("Vui lòng nhập vào điểm văn của bạn:"));
var pointEnglish = Number(prompt("Vui lòng nhập vào điểm tiếng anh của bạn:"));

var pointSvg = ((pointMath + pointLiterature + pointEnglish) / 3).toFixed(2);

alert(`Điểm trung bình của bạn là ${pointSvg} `);
