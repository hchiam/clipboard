# Copy to clipboard [![version](https://img.shields.io/github/release/hchiam/clipboard?style=flat-square)](https://github.com/hchiam/clipboard/releases) [![HitCount](http://hits.dwyl.com/hchiam/clipboard.svg)](http://hits.dwyl.com/hchiam/clipboard)

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@master/copyToClipboard.js
```

or:

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@3.0.0/copyToClipboard.js
```

## Example usage:

```js
function customClipboardAction(text) {
  copyToClipboard(text, function () {
    alert("Copied code to clipboard!");
  });
}
```

or:

```js
var parentElement = document.querySelector("#here");
var text = `body:before {
  z-index: 9001;
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  top: calc(50% - 120px/2); /* -1/2 of height */
  left: calc(50% - 120px/2); /* -1/2 of width */
  background: red;
}`;
createElementToClickToCopyToClipboard(parentElement, text, function () {
  alert("Copied code to clipboard!");
});
```
