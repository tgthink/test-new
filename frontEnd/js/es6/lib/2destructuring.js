"use strict";

/********************* demo1 start **********************/
console.log("********************* demo1 start **********************");
var foo = 1,
    bar = 2,
    baz = 3;

foo; // 1
bar; // 2
baz; // 3

var _ref = ["foo", "bar", "baz"],
    third = _ref[2];

third; // "baz"

var _ref2 = [1, 2, 3],
    x = _ref2[0],
    y = _ref2[2];

x; // 1
y; // 3

var _ref3 = [1, 2, 3, 4],
    head = _ref3[0],
    tail = _ref3[1];

head; // 1
tail; // [2, 3, 4]

var _ref4 = ['a'],
    demo1xx = _ref4[0],
    demo1yy = _ref4[1],
    demo1zz = _ref4[2];

console.log(demo1xx); // "a"
console.log(demo1yy); // undefined
console.log(demo1zz); // []