function sha() {
  tempShaOutput=$(cat $1 | openssl dgst -sha384 -binary | openssl base64 -A)
  echo sha384-$tempShaOutput
}

echo
echo copyToClipboard.js
sha copyToClipboard.js
echo
