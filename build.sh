#!/bin/sh

mkdir -p static
./node_modules/vulcanize/bin/vulcanize --csp --inline --strip -o static/main.html src/index.html

# Workaround for https://github.com/Polymer/vulcanize/issues/37
CSP="<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self' 'unsafe-eval'; style-src 'unsafe-inline'\">"
cat static/main.html | sed "s/<head>/<head>$CSP/" | sed 's/noscript=""//' | tr -d '\n' | sed 's/<!--[^!]*-->//g' > static/index.html
echo "Polymer('core-toolbar',{});" >> static/main.js

# Build Chrome Apps.
cp -rf static chrome/
