function copyToClipboard(text, callback) {
  try {
    var temp = document.createElement("input");
    document.body.append(temp);
    temp.value = text;
    temp.select();
    document.execCommand("copy");
    temp.remove();
    if (callback) callback();
  } catch (err) {
    alert(
      "Could not automatically copy to clipboard. \n\n Copy this text instead: \n\n" +
        text
    );
  }
}
