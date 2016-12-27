'use strict';

var x = 1;
function foo(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    console.log(x);
  };

  var x = 3;
  y();
  console.log(x);
}

foo(44); // 2

var s2 = 0;
function Timer() {
  var _this = this;

  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(function () {
    return _this.s1++;
  }, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(function () {
  return console.log('s1: ', timer.s1);
}, 3100);
setTimeout(function () {
  return console.log('s2: ', timer.s2);
}, 3100);
setTimeout(function () {
  return console.log('s2: ', undefined.s2);
}, 3100);
// s1: 3
// s2: 0

function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  };
  return Fibonacci(n - 1) + Fibonacci(n - 2);
}

console.log(Fibonacci(4)); // 89

//console.log(Fibonacci(100));
//console.log(Fibonacci(500));
// Fibonacci(100)
// Fibonacci(500)
// 堆栈溢出了
function Fibonacci2(n) {
  var ac1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var ac2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n <= 1) {
    return ac2;
  };

  return Fibonacci2(n - 1, ac2, ac1 + ac2);
}

console.log(Fibonacci2(5)); // 573147844013817200000
// console.log(Fibonacci2(1000)) // 7.0330367711422765e+208
// console.log(Fibonacci2(10000)) // Infinity

function tco(f) {
  var value;
  var active = false;
  var accumulated = [];

  return function accumulator() {
    accumulated.push(arguments);
    if (!active) {
      active = true;
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift());
        console.log(value);
      }
      active = false;
      return value;
    }
  };
}

var sum = tco(function (x, y) {
  if (y > 0) {
    var sss = sum(x + 1, y - 1);
    return sss;
  } else {
    return x;
  }
});

console.log(sum(1, 5));
// 100001