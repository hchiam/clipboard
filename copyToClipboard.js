function copyToClipboard(text, callback) {
  try {
    var temp = document.createElement("textarea");
    document.body.append(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    temp.remove();
    if (callback) callback(text);
  } catch (err) {
    alert(
      "Could not automatically copy to clipboard. \n\n Copy this text instead: \n\n" +
        text
    );
  }
}

function createElementToClickToCopyToClipboard(parentElement, text, callback) {
  try {
    if (typeof parentElement === "string") {
      parentElement = document.querySelector(parentElement);
    }
    if (!text || typeof text === "function") {
      callback = text;
      text = parentElement.innerText;
    }
    var html =
      '<p>Click to copy to clipboard:</p><pre title="click to copy to clipboard" >' +
      text +
      "</pre>";
    parentElement.innerHTML = html;
    parentElement.addEventListener("click", function () {
      copyToClipboard(text, callback);
    });
  } catch (err) {
    console.log(
      "Could not automatically create element that you can click to copy to clipboard."
    );
  }
}
