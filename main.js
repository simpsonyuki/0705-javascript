// 先用console.log 測試檔案是否有連結成功(測試完可註解掉)
// console.log("我是JS!");

// 文件.使用ID取得元素("元素名稱").插入html="欲插入之內容"
// 教學文檔: https://www.w3schools.com/js/js_intro.asp
document.getElementById("box1").innerHTML="Hello~"
// jQuery寫法: $("#box1").innerHTML="Hello~"

// 定義變數 Variables : 用來儲存資料
// 教學文檔: https://www.w3schools.com/js/js_variables.asp
// 資料類型(基本常用到的4大類型):
var a = 100;       //整數
var b = 1.5;       //浮點數字
var c = "文字";    //文字字串
var d = true;      //布林值: true / false