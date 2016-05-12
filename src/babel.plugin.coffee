babel = require('babel-core')
# Export Plugin
module.exports = (BasePlugin) ->
  # Define Plugin
  class BabelPlugin extends BasePlugin
    # Plugin name
    name: 'babel'

    # Render
    # Called per document, for each extension conversion. Used to render one extension to another.
    render: (opts) ->
      # Prepare
      {inExtension,outExtension,file} = opts

      # Upper case the text document's content if it is using the convention txt.(uc|uppercase)
      if inExtension in ['es6','babel'] and outExtension in ['js',null]

        # Render synchronously
        opts.content = babel.transform(opts.content, { ast: false, compact: false, comments: false, presets: ['es2015', 'react'], plugins: ['transform-react-jsx'] }).code;

      # Done
      return
