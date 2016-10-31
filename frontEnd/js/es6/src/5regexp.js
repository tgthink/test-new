/********************* demo1 start **********************/
console.log("********************* demo1 start **********************");
const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
const TOKEN_G  = /\s*(\+|[0-9]+)\s*/g;

console.log(tokenize(TOKEN_Y, '3 + 4'));
// [ '3', '+', '4' ]
console.log(tokenize(TOKEN_G, '3 + 4'));
// [ '3', '+', '4' ]

function tokenize(TOKEN_REGEX, str) {
  let result = [];
  let match;
  while (match = TOKEN_REGEX.exec(str)) {
    result.push(match[1]);
  }
  return result;
}

console.log(tokenize(TOKEN_Y, '3x + 4'));
// [ '3' ]
console.log(tokenize(TOKEN_G, '3x + 4'));
// [ '3', '+', '4' ]



