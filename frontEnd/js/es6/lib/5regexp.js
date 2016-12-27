'use strict';

/********************* demo1 start **********************/
console.log("********************* demo1 start **********************");
var TOKEN_Y = new RegExp('\\s*(\\+|[0-9]+)\\s*', 'y');
var TOKEN_G = /\s*(\+|[0-9]+)\s*/g;

console.log(tokenize(TOKEN_Y, '3 + 4'));
// [ '3', '+', '4' ]
console.log(tokenize(TOKEN_G, '3 + 4'));
// [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX, str) {
  var result = [];
  var match = void 0;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}

console.log(tokenize(TOKEN_Y, '3x + 4'));
// [ '3' ]
console.log(tokenize(TOKEN_G, '3x + 4'));
// [ '3', '+', '4' ]