"use strict";

var _marked = [fibonacci].map(regeneratorRuntime.mark);

function fibonacci() {
  var prev, curr, _ref;

  return regeneratorRuntime.wrap(function fibonacci$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          prev = 0, curr = 1;

        case 1:
          _ref = [curr, prev + curr];
          prev = _ref[0];
          curr = _ref[1];
          _context.next = 6;
          return curr;

        case 6:
          _context.next = 1;
          break;

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fibonacci()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var n = _step.value;

    if (n > 1000) break;
    console.log(n);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}