#!/bin/sh

mkdir -p static
./node_modules/vulcanize/bin/vulcanize --csp --inline --strip -o static/main.html src/index.html

# Add Content-Security-Policy meta tag to verify the built app does not break
# CSP rules as a Chrome App. Also it removes unnecessary comment lines.
CSP="<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'self' 'unsafe-eval'; style-src 'unsafe-inline'\">"
cat static/main.html | sed "s/<head>/<head>$CSP/" | tr -d '\n' | sed 's/<!--[^!]*-->//g' > static/index.html

# Build Chrome Apps.
cp -rf static chrome/
rm chrome/static/index.html
