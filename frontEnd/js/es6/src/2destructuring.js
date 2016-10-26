/********************* demo1 start **********************/
console.log("********************* demo1 start **********************");
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [demo1xx, demo1yy, demo1zz] = ['a'];
console.log(demo1xx); // "a"
console.log(demo1yy); // undefined
console.log(demo1zz); // []














