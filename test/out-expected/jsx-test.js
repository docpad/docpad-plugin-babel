'use strict';

var HelloMessage = function HelloMessage(_ref) {
  var name = _ref.name;
  return React.createElement(
    'div',
    { 'on-click': function onClick(_) {
        return alert('Hi ' + name);
      } },
    name
  );
};