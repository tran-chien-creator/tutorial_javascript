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

// Các toán tử so sánh
console.log(`So sánh:`);
console.log(5 > 3); // True
console.log(5 < 3); // False
console.log(5 >= 3); // True
console.log(5 <= 3); // False
console.log(5 == 3); // False
console.log(`Chuỗi "5" bằng Số 5 với phép == sẽ trả về = `);
console.log("5" == 5); //True
console.log(`Chuỗi "5" bằng Số 5 với phép === sẽ trả về = `);
console.log("5" === 5); //False
console.log(5 != 3); // True
console.log(`Chuỗi "5" bằng Số 5 với phép != sẽ trả về = `);
console.log("5" != 5); //False
console.log(`Chuỗi "5" bằng Số 5 với phép !== sẽ trả về = `);
console.log("5" !== 5); //True

// 1 số hàm toán học có sẵn

// Hàm căn bậc 2 (square root)
var soA = 25,
  soB = 16,
  soC = -10,
  soD = 5.2,
  soE = 5.5,
  soF = 5.4;
console.log("Hàm căn bậc 2", Math.sqrt(soA), Math.sqrt(soB));

// Hàm mũ
console.log("Hàm mũ", Math.pow(soA, 2), Math.pow(soB, 2));

// Hàm giá trị tuyệt đối (Absolute)
console.log("Hàm trị tuyệt đối", Math.abs(soC));

// Hàm làm tròn lên và làm tròn xuống
console.log("Hàm làm tròn lên ceil", Math.ceil(soD));
console.log("Hàm làm tròn xuống floor", Math.floor(soD));

// Hàm làm tròn theo ngưỡng 0.5
console.log("Hàm làm tròn theo ngưỡng >= 0.5", Math.round(soE));
console.log("Hàm làm tròn theo ngưỡng < 0.5", Math.round(soF));

// Hàm min và hàm max
console.log(
  "Số nhỏ nhất trong dãy",
  soA,
  soB,
  soC,
  soD,
  soE,
  soF,
  "là:",
  Math.min(soA, soB, soC, soD, soE, soF),
);
console.log(
  "Số lớn nhất trong dãy",
  soA,
  soB,
  soC,
  soD,
  soE,
  soF,
  "là:",
  Math.max(soA, soB, soC, soD, soE, soF),
);

// Hàm tạo số ngẫu nhiên
var ramdomValueNumber = Math.random();
console.log("Lấy số ngẫu nhiên từ 0 đến sát 1:", ramdomValueNumber);
// Lấy số lớn hơn 1
var ramdomValueNumber2 = Math.random() * 10;
console.log("Lấy số ngẫu nhiên từ 1 đến sát 10:", ramdomValueNumber2);
//Lấy số nguyên
var ramdomValueNumber3 = parseInt(Math.random() * 10);
console.log("Lấy số nguyên ngẫu nhiên từ 1 đến sát 10:", ramdomValueNumber3);
//Lấy số từ 0 đến sát 30
var ramdomValueNumber4 = parseInt(Math.random() * 30);
console.log("Lấy số nguyên ngẫu nhiên từ 1 đến sát 30:", ramdomValueNumber4);

//Lấy số từ 10 đến sát 30
var ramdomValueNumber5 = parseInt(Math.random() * 20) + 10;
console.log("Lấy số nguyên ngẫu nhiên từ 10 đến sát 30:", ramdomValueNumber5);

// Hàm Number, isNaN , Number.isNaN
var str = "123";
console.log(typeof str);
var pasreNumber = Number(str);
console.log(typeof pasreNumber);

var invalidNumber = "aaa";
console.log(typeof invalidNumber);
var pasreNumber2 = Number(invalidNumber);
console.log(pasreNumber2);

// Hàm kiểm tra xem có phải là Not a number không
console.log(isNaN(pasreNumber)); //False vì nó trả về giá trị Number
console.log(isNaN(pasreNumber2)); //True vì nó trả về giá trị là NaN
//Đặt biệt với giá trị true
// var parseTrue = Number(true); // Nhận giá trị là 1 => Giá trị Number
// console.log(parseTrue);
console.log(isNaN(true)); //False vì giá trị là 1 kiểu số

var parseUndifined = Number(undefined);
console.log(parseUndifined);

console.log(Number.isNaN(NaN)); // True
console.log(Number.isNaN(0 / 0)); // True

console.log(Number.isNaN("AAA")); // False
console.log(Number.isNaN(true)); //False
console.log(Number.isNaN(null)); //False
console.log(Number.isNaN(undefined)); //False
