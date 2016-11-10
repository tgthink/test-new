"use strict";

var _templateObject = _taggedTemplateLiteral(["The total is ", " (", " with tax)"], ["The total is ", " (", " with tax)"]),
    _templateObject2 = _taggedTemplateLiteral(["<p>", " has sent you a message.</p>"], ["<p>", " has sent you a message.</p>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/********************* demo1 start **********************/
console.log("********************* demo1 start **********************");
// 普通字符串
"In JavaScript '\n' is a line-feed.";

// 多行字符串
"In JavaScript this is\n not legal.";

console.log("string text line 1\nstring text line 2");

// 字符串中嵌入变量
var name = "Bob",
    time = "today";
console.log("Hello " + name + ", how are you " + time + "?");

/********************* demo2 start **********************/
console.log("********************* demo2 start **********************");
var tmpl = function tmpl(addrs) {
  return "\n  <table>\n  " + addrs.map(function (addr) {
    return "\n    <tr><td>" + addr.first + "</td></tr>\n    <tr><td>" + addr.last + "</td></tr>\n  ";
  }).join('') + "\n  </table>\n";
};
var data = [{ first: '<Jane>', last: 'Bond' }, { first: 'Lars', last: '<Croft>' }];

console.log(tmpl(data));

/********************* demo3 start **********************/
console.log("********************* demo3 start **********************");
function compile(template) {
  var evalExpr = /<%=(.+?)%>/g;
  var expr = /<%([\s\S]+?)%>/g;

  var template1 = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`');
  var template2 = template1.replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template2 + '`);';

  var script = "(function parse(data){\n    var output = \"\";\n\n    function echo(html){\n      output += html;\n    }\n\n    " + template + "\n\n    return output;\n  })";

  return eval(script);
}
var template = "\n<ul>\n  <% for(var i=0; i < data.supplies.length; i++) { %>\n    <li><%= data.supplies[i] %></li>\n  <% } %>\n</ul>\n";
var parse = compile(template);
console.log(parse({ supplies: ["broom", "mop", "cleaner"] }));

/********************* demo4 start **********************/
console.log("********************* demo4 start **********************");
var total = 30;
var msg = passthru(_templateObject, total, total * 1.05);

function passthru(literals) {
  var result = '';
  var i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

console.log(msg); // "The total is 30 (31.5 with tax)"

/********************* demo5 start **********************/
console.log("********************* demo5 start **********************");
var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = SaferHTML(_templateObject2, sender);

function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}

console.log(message);
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>