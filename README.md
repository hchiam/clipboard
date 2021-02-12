# Copy to clipboard [![version](https://img.shields.io/github/release/hchiam/clipboard?style=flat-square)](https://github.com/hchiam/clipboard/releases)

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@master/copyToClipboard.js
```

or:

```js
https://cdn.jsdelivr.net/gh/hchiam/clipboard@3.3.0/copyToClipboard.js
```

```html
<script
  src="https://cdn.jsdelivr.net/gh/hchiam/clipboard@3.3.0/copyToClipboard.js"
  integrity="sha384-9lRe6AQpEwXDt2qF8xOzrA6D2aqs9JmOrEDxUx6+CqgnnQH1D7NjUFEcP9Y5Uv7w"
  crossorigin="anonymous"
></script>
```

## Example usage:

```js
function handleClick(text) {
  copyToClipboard(text, function () {
    alert("Copied code to clipboard!");
  });
}
// <pre onclick="handleClick(this.innerText)">
// body:before {
//   z-index: 9001;
//   content: '';
//   position: absolute;
//   width: 120px;
//   height: 120px;
//   top: calc(50% - 120px/2); /* -1/2 of height */
//   left: calc(50% - 120px/2); /* -1/2 of width */
//   background: red;
// }
// </pre>;
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
var callback = function () {
  alert("Copied code to clipboard!");
};
createElementToClickToCopyToClipboard(parentElement, text, callback);
```

or:

```js
var parentElement = "#here";
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
var callback = function () {
  alert("Copied code to clipboard!");
};
createElementToClickToCopyToClipboard(parentElement, text, callback);
```

or:

```js
// text can be automatically pulled from the parentElement:
createElementToClickToCopyToClipboard(parentElement, callback);
```

(see [demo.html](https://github.com/hchiam/clipboard/blob/master/demo.html))
