var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = function(BasePlugin) {
  var BabelPlugin;
  return BabelPlugin = (function(superClass) {
    extend(BabelPlugin, superClass);

    function BabelPlugin() {
      return BabelPlugin.__super__.constructor.apply(this, arguments);
    }

    BabelPlugin.prototype.name = 'babel';

    BabelPlugin.prototype.render = function(opts) {
      var file, inExtension, outExtension;
      inExtension = opts.inExtension, outExtension = opts.outExtension, file = opts.file;
      if ((inExtension === 'babel' || inExtension === 'es6') || outExtension === 'js') {
        opts.content = require("babel-core").transform(opts.content, {}).code;
      }
    };

    return BabelPlugin;

  })(BasePlugin);
};