function copyToClipboard(text, callback) {
  try {
    navigator.clipboard
      .writeText(text) // if not IE
      .catch(function (err) {
        alert(
          "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
            text
        );
        console.log(err);
      });
    setTimeout(() => {
      if (callback) callback(text);
    }, 100);
  } catch (e) {
    try {
      var temp = document.createElement("textarea");
      document.body.append(temp);
      temp.value = text;
      temp.select();
      document.execCommand("copy");
      temp.remove();
      setTimeout(() => {
        if (callback) callback(text);
      }, 100);
    } catch (err) {
      alert(
        "Could not automatically copy to clipboard. \n\n Manually copy this text instead: \n\n" +
          text
      );
      console.log(err);
    }
  }
}

function createElementToClickToCopyToClipboard(parentElement, text, callback) {
  try {
    if (typeof parentElement === "string") {
      parentElement = document.querySelector(parentElement);
    }
    if (!text || typeof text === "function") {
      callback = text;
      text = encodeURIComponent(parentElement.innerText);
    }
    var decodedText = decodeURIComponent(text);
    var html =
      "<p>Click the following to copy it to clipboard:</p>" +
      '<pre aria-label="click to copy to clipboard: (start of copyable text) ' +
      decodedText.replace(/"/g, "&quot;").replace(/'/g, "&#039;") +
      ' (end of copyable text)" role="button" tabindex="0" style="cursor:copy;overflow:auto;" title="click to copy to clipboard">' +
      "</pre>";
    parentElement.innerHTML = html;
    var pre = parentElement.querySelector("pre");
    pre.innerText = decodedText;
    pre.addEventListener("click", function () {
      copyToClipboard(decodedText, callback);
    });
  } catch (err) {
    console.log(
      "Could not automatically create element that you can click to copy to clipboard."
    );
  }
}
