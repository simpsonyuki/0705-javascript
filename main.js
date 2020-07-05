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