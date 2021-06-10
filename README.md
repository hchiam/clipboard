# Copy to clipboard [![version](https://img.shields.io/github/release/hchiam/clipboard?style=flat-square)](https://github.com/hchiam/clipboard/releases)

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@master/copyToClipboard.js
```

or:

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@3.4.2/copyToClipboard.js
```

```html
<script
  src="https://cdn.jsdelivr.net/gh/hchiam/clipboard@3.4.2/copyToClipboard.js"
  integrity="sha384-IBpq6HnxC+/+sl5oBQX3FXQhfE3JW7OrQH8anKU12Uod6/J6uxfP/gd05kzTK+be"
  crossorigin="anonymous"
></script>
```

## Example usage:

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
