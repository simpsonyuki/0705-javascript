// 先用console.log 測試檔案是否有連結成功(測試完可註解掉)
// console.log("我是JS!");

// 文件.使用ID取得元素("元素名稱").插入html="欲插入之內容"
// 教學文檔: https://www.w3schools.com/js/js_intro.asp
document.getElementById("box1").innerHTML = "Hello~"
// jQuery寫法: $("#box1").innerHTML="Hello~"

// 定義變數 Variables : 用來儲存資料
// 教學文檔: https://www.w3schools.com/js/js_variables.asp
// 資料類型(基本常用到的4大類型):
var a = 20;       //整數
var b = 1.5;       //浮點數字
var c = "文字";    //文字字串
var d = true;      //布林值: true / false

// 取得變數值
console.log(a);

// 運算子1: 加減乘除餘 + - * / %

// 程式內的等號"=", 表"指定"
// 等號右邊的資料先執行完成後, 才會套回給等號左邊的值使用
a = a + 8;
console.log("a = " + a);       //得到結果會是:"a=(20+8)=28"

// 運算子2: ++ 遞增1, --遞減1
var e = 7;
e++
console.log(e)

// ES6 指數符號
// **:  次方
var f = 5;
f = f ** 3;   // **N : N次方

console.log(f);

// 指定運算子
var num = 10;

num **= 5;      // 意思同: num = num ** 5; 
console.log(num);

var num1 = 10;
num1 += 5;      // 意思同: num1 = num1 + 5;
console.log(num1);

// 自訂函式 又被叫做 function 或 method
// 教學文檔: https://www.w3schools.com/js/js_functions.asp
// 語法: 函式 函式名稱(參數1,參數2,.... )

function functionA () {
    console.log("我是FunctionA");
}

// 自訂函式需要被呼叫才回執行
// 呼叫自訂函式(重複寫就會被呼叫很多次)
functionA();
functionA();

// 自訂函式參數用法
function plusTen(numA) { 

    numA += 10;
    
    console.log("數字加10的結果:" + numA);
 }

// 呼叫含有參數的自訂函式
// 自訂函式名稱(參數值)
plusTen(5);


function multi(X, Y){
  console.log("數字相乘:" + X*Y);  
} 
//  呼叫含有參數的自訂函式
// 自訂函式名稱(參數1,參數2)
multi(39, 17);


// 物件 Object
// 教學文檔: https://www.w3schools.com/js/js_objects.asp
// 物件 = { 物件名稱1: 值1, 物件名稱: 值2.... }

var Car = {
  brand: "BMW",
  number: 5000,
  // 物件也可以用函式設定
  drive: function(){
    console.log("開車中.....");
  }
};

console.log("品牌:" + Car.brand);
Car.drive();



// 事件練習
var box2 = document.getElementById("box2");
 
// 用匿名函式寫
box2.onclick = () => {
  console.log("點擊!");
}
// 意思同: box2.onclick = function(){}

box2.onmouseenter = () => {
  console.log("滑鼠滑入(onmouseenter)");
}

box2.onmouseleave = () => {
  console.log("滑鼠滑出(onmouseleave)");
}


// 陣列 Array : 一次儲存多筆資料
// 教學文檔: https://www.w3schools.com/js/js_arrays.asp
// 陣列名稱 [資料0, 資料1, 資料2.... ]
// 注意: 陣列的資料筆數是用0開始算的, 不是1

// 儲存資料方式比較
// 1. 定義變數: 一筆資料就需要設定一個變數
  // var NumberA = 20;
  // var NumberB = 100;
  // var NumberC = 60;

// 2. 定義物件: 只須設定一個變數, 但每筆資料都需要命名
  // var ObjectNumber = {
  //   A = 20,
  //   B = 100,
  //   C = 60
  // }

// 3. 陣列: 單純儲存資料的值
  var numbers = [20, 100, 60];
  console.log("第1筆資料:" + numbers[0]);
  
  // 修改陣列的方法
  numbers[1] = 3;
  console.log("第2筆資料:" + numbers[1]);

  console.log("陣列的長度(儲存的資料筆數):" + numbers.length);

  
// 比較運算子 
// 教學文檔: https://www.w3schools.com/js/js_comparisons.asp
// 大於 小於 大於等於 小於等於 等於 不等於 > < >= <= == !=
// 得到的值會是布林值: true 或 false
var testA = 100;
var testB = 50;

console.log(testA < testB);
console.log(testA != testB);


// == 和 === 的差異比較
var testC = 7;      //沒有引號: 數字7
var testD = "7";    //有引號: 文字7

console.log("==的結果: " + (testC == testD));   // == 只會比較"值"
console.log("===的結果: " + (testC === testD)); // === 同時比較"值" 和 "類型"


// 邏輯運算子: 都是用在比較"布林值"
// !: 將布林值顛倒
var testE = true;
console.log("顛倒: " + (!testE));

// &&: 並且
// 只要有一方有false, 結果就會是false
// 4種狀況
console.log(true && true);       //結果會是: true
console.log(true && false);      //結果會是: false
console.log(false && true);      //結果會是: false
console.log(false && false);     //結果會是: false

// ||: 或者
// 只要有一方有true, 結果就會是true
// 4種狀況
console.log(true || true);       //結果會是: true
console.log(true || false);      //結果會是: true
console.log(false || true);      //結果會是: true
console.log(false || false);     //結果會是: false

// 判斷式 if
// https://www.w3schools.com/js/js_if_else.asp
// 語法(Syntax): if (布林值) { 當布林值為true時, 會執行的程式內容; }

if (true) {
  console.log("我是判斷是if, 且布林值為true");
}

if (false) {
  console.log("我是判斷是if, 且布林值為false");     //布林值為false時, 判斷式不會執行
}

// if...else... 否則
// 語法(Syntax): if (布林值) { 當布林值為true時, 會執行的程式內容; } else{ 當布林值為false時, 會執行的程式內容; }

var boolTest = true;

if (boolTest) {
  console.log("boolTese布林值為true!");
} else {
  console.log("boolTese布林值為false!");
}
// 當布林值為true, 程式執行完if之後就算完成執行判斷式, 不會再去執行else

var boolTest2 = false;

if (boolTest2) {
  console.log("boolTese2布林值為true!");
} else {
  console.log("boolTese2布林值為false!");
}
// 當布林值為false, 程式會跳過if, 直接執行else


// 判斷式實際應用練習
var score = document.getElementById("score");
var result = document.getElementById("result");

// 用onchange測試是否能成功執行動作, 測試沒問題即可註解掉
// onchange :當有所變更時則執行後方程式內容
// score.onchange = () => {
//   result.innerText="變更中...";
// }

// 設定條件:
// 當分數 >=60 : 結果顯示為"及格"
// 當分數 >=40 : 結果顯示為"補考"
// 當分數 <40  : 結果顯示為"死當"

score.onchange = () => {
  var s = parseInt(score.value);    //取得score的值, 但因為得到的會是"文字字串", 所以要用parseInt把文字轉為整數

  if (s >= 60){
    result.innerText="分數 "+ s +"分：及格";
  } 
  else if (s >= 40){
    result.innerText="分數 "+ s +"分：補考";
  }
  else {
    result.innerText="分數 "+ s +"分：死當";
  }
  // 最後這段也可以寫成 else (s<40){}
  
}
// 順序:
// if(只能在第一位) → else if(可以有無限多組) → else(只能在最後面)