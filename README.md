# Babel Plugin for [DocPad](http://docpad.org)

Compiles es-next into es5 with [babel](http://babeljs.io)

Convention:  `.js.babel`

<!-- INSTALL/ -->

## Install

``` bash
docpad install babel
```

<!-- /INSTALL -->

<!-- ERRORS/ -->

### Common Errors

- ERROR: **`require is not defined`** error when using ES6 `import` statements:
 - This is fixed easily with the [docplad-plugin-browserifydocs](https://github.com/docpad/docpad-plugin-browserifydocs) plugin:
   - `docpad install browserifydocs`
    - Add this to the top of your `.js.babel` file : 
  <pre>
			```
			---
			browserify: true
			---
			```
  </pre>
  
<!-- /ERRORS -->

<!-- HISTORY/ -->

## History
[Discover the change history by heading on over to the `HISTORY.md` file.](https://github.com/williammalo/docpad-plugin-babel/blob/master/HISTORY.md#files)

<!-- /HISTORY -->


<!-- CONTRIBUTE/ -->

## Contribute

[Discover how you can contribute by heading on over to the `CONTRIBUTING.md` file.](https://github.com/williammalo/docpad-plugin-babel/blob/master/CONTRIBUTING.md#files)

<!-- /CONTRIBUTE -->


<!-- BACKERS/ -->

## Backers

### Maintainers

- William Malo <williammalo2@gmail.com> (https://github.com/williammalo/)

### Sponsors

No sponsors yet! Will you be the first?

[![Gratipay donate button](https://img.shields.io/gratipay/docpad.svg)](https://www.gratipay.com/docpad/ "Donate weekly to this project using Gratipay")
[![Flattr donate button](https://img.shields.io/badge/flattr-donate-yellow.svg)](http://flattr.com/thing/344188/balupton-on-Flattr "Donate monthly to this project using Flattr")
[![PayPal donate button](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QB8GQPZAH84N6 "Donate once-off to this project using Paypal")
[![BitCoin donate button](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://coinbase.com/checkouts/9ef59f5479eec1d97d63382c9ebcb93a "Donate once-off to this project using BitCoin")
[![Wishlist browse button](https://img.shields.io/badge/wishlist-donate-yellow.svg)](http://amzn.com/w/2F8TXKSNAFG4V "Buy an item on our wishlist for us")

### Contributors

These amazing people have contributed code to this project:

- [Jimmy King](https://github.com/jking90) — [view contributions](https://github.com/williammalo/docpad-plugin-babel/commits?author=jking90)

- [Michael Duane Mooring](https://github.com/mikeumus) — [view contributions](https://github.com/williammalo/docpad-plugin-babel/commits?author=mikeumus)

[Become a contributor!](https://github.com/williammalo/docpad-plugin-babel/blob/master/CONTRIBUTING.md#files)

<!-- /BACKERS -->


<!-- LICENSE/ -->

## License

Licensed under the incredibly [permissive](http://en.wikipedia.org/wiki/Permissive_free_software_licence) [MIT license](http://creativecommons.org/licenses/MIT/)

Copyright &copy; William Malo williammalo2@gmail.com (maloweb.com/en)

<!-- /LICENSE -->
