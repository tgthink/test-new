"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/********************* demo1 start **********************/
{
  var _a = 10;
  var b = 1;
}
//a a is not defined
b;
/********************* demo2 start **********************/
for (var _i = 0; _i < 10; _i++) {}
console.log(i); //i is not defined
/********************* demo3 start **********************/
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

var a = [];

var _loop = function _loop(_i2) {
  a[_i2] = function () {
    console.log(_i2);
  };
};

for (var _i2 = 0; _i2 < 10; _i2++) {
  _loop(_i2);
}
a[6](); // 6
/********************* demo4 start **********************/
console.log("********************* demo4 start **********************");
console.log(foo); // 输出undefined
//console.log(bar); // 报错ReferenceError

var foo = 2;
//let bar = 2;
/********************* demo5 start **********************/
console.log("********************* demo5 start **********************");
var tmp = 123;

if (true) {
  //tmp = 'abc'; // ReferenceError
  var _tmp = void 0;
  console.log(_tmp);
}
if (true) {
  // TDZ开始
  // tmp = 'abc'; // ReferenceError
  // console.log(tmp); // ReferenceError

  var _tmp2 = void 0; // TDZ结束
  console.log(_tmp2); // undefined

  _tmp2 = 123;
  console.log(_tmp2); // 123
}
/********************* demo6 start **********************/
console.log("********************* demo6 start **********************");
//typeof x; // ReferenceError
var x = void 0;
typeof undeclared_variable === "undefined" ? "undefined" : _typeof(undeclared_variable); // "undefined"

/********************* demo7 start **********************/
console.log("********************* demo7 start **********************");
function bar() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : y;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  return [x, y];
}

//bar(); // 报错

// 报错
function aaaaaaaaaaa() {
  var a = 10;
  //var a = 1;
}

// 报错
function bbbbbbbbbbbbb() {
  var a = 10;
  //let a = 1;
}
aaaaaaaaaaa();
bbbbbbbbbbbbb();
function func11(arg) {
  //let arg; // 报错
}

function func22(arg) {
  {
    var _arg = void 0; // 不报错
  }
}
//func11();
func22();

/********************* demo8 start **********************/
console.log("********************* demo8 start **********************");
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    var tmp = "hello world";
  }
}

f(); // undefined

function f1() {
  var n = 5;
  if (true) {
    var _n = 10;
  }
  console.log(n); // 5
}
f1();

/********************* demo9 start **********************/
console.log("********************* demo9 start **********************");
function f() {
  console.log('I am outside!');
}
(function () {
  //chrome内f会被提升到函数作用域头部 f=undefined;
  if (false) {
    // 重复声明一次函数f
    var _f = function _f() {
      console.log('I am inside!');
    };
  }
  console.log(f);
  //f();
})();
/********************* demo10 start **********************/
console.log("********************* demo10 start **********************");
var demo10a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(window.demo10a);
var demo10b = 1;
console.log(window.demo10b); // undefined