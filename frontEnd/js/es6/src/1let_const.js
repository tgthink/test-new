/********************* demo1 start **********************/
{
	let a = 10;
	var b = 1;
}
//a a is not defined
b
/********************* demo2 start **********************/
for (let i = 0; i < 10; i++) {}
console.log(i);//i is not defined
/********************* demo3 start **********************/
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10

var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
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
  let tmp;
  console.log(tmp);
}
if (true) {
  // TDZ开始
  // tmp = 'abc'; // ReferenceError
  // console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
/********************* demo6 start **********************/
console.log("********************* demo6 start **********************");
//typeof x; // ReferenceError
let x;
typeof undeclared_variable // "undefined"

/********************* demo7 start **********************/
console.log("********************* demo7 start **********************");
function bar(x = y, y = 2) {
  return [x, y];
}

//bar(); // 报错

// 报错
function aaaaaaaaaaa() {
  let a = 10;
  //var a = 1;
}

// 报错
function bbbbbbbbbbbbb() {
  let a = 10;
  //let a = 1;
}
aaaaaaaaaaa();
bbbbbbbbbbbbb();
function func11(arg) {
  //let arg; // 报错
}

function func22(arg) {
  {
    let arg; // 不报错
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
  let n = 5;
  if (true) {
    let n = 10;
  }
  console.log(n); // 5
}
f1();

/********************* demo9 start **********************/
console.log("********************* demo9 start **********************");
function f() { console.log('I am outside!'); }
(function () {
	//chrome内f会被提升到函数作用域头部 f=undefined;
  if (false) {
    // 重复声明一次函数f
    function f() {
    	console.log('I am inside!');
    }
  }
  console.log(f);
  //f();
}());
/********************* demo10 start **********************/
console.log("********************* demo10 start **********************");
var demo10a = 1;
// 如果在Node的REPL环境，可以写成global.a
// 或者采用通用方法，写成this.a
console.log(window.demo10a);
let demo10b = 1;
console.log(window.demo10b); // undefined



