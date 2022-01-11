# Copy to clipboard [![version](https://img.shields.io/github/release/hchiam/clipboard?style=flat-square)](https://github.com/hchiam/clipboard/releases)

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@main/copyToClipboard.js
```

or:

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@4.1.0/copyToClipboard.js
```

```html
<script
  src="https://cdn.jsdelivr.net/gh/hchiam/clipboard@4.1.0/copyToClipboard.js"
  integrity="sha384-0mdklNOtIdz/QCK1RD9Y0effU9vRc8WYsCHDmG0AdurVyrwkBOa2D8Q45c7WJxrs"
  crossorigin="anonymous"
></script>
```

## Example usage:

[Live CodePen demo](https://codepen.io/hchiam/pen/mdWGLNE)

or

See [demo.html](https://github.com/hchiam/clipboard/blob/master/demo.html)

or

```html
<pre onclick="handleClick(this.innerText)">some code or text to be copied</pre>

<script type="text/javascript">
  function handleClick(text) {
    copyToClipboard(text, function () {
      alert("Copied code to clipboard!");
    });
  }
</script>
```

or:

```js
var parentElement = document.querySelector("#container");
var text = `body:before {
  z-index: 9001;
}`;
var callback = function () {
  alert("Copied code to clipboard!");
};
createElementToClickToCopyToClipboard(parentElement, text, callback);
```

or:

```js
var selectorString = "#container";
var text = `body:before {
  z-index: 9001;
}`;
var callback = function () {
  alert("Copied code to clipboard!");
};
createElementToClickToCopyToClipboard(selectorString, text, callback);
```

or simply:

```js
// text can be automatically pulled from the parentElement:
var parentElement = document.querySelector("#container");
createElementToClickToCopyToClipboard(parentElement, function (code) {
  alert("Copied code to clipboard! \n\n" + text);
});
```
