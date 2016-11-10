"use strict";

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
