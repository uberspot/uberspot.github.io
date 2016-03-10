#!/bin/bash
#
# This script is used for building and publishing the site.
#

# The YUI Compressor command to use.
YUICOMPRESSOR='java -jar _scripts/yuicompressor.jar --charset utf-8 --line-break 100'

cd ..

# Remove the existing site.
rm -rf _site
mkdir _site

# Remove any of those pesky '.DS_Store' files.
find . -type f -name '.DS_Store' -exec rm -f {} \;

# Build the site.
printf '\n\e[1;34m%s\e[0m\n\n' 'Building Jekyll site...'
jekyll --no-future $@

# Remove `<!--more-->` tags and then empty lines from HTML files.
find _site -type f -name '*.html' -exec sed -i '' 's/<!--more-->//' {} \; -exec sed -i '' '/^[ \t]*$/d' {} \;

# Remove empty lines from XML files.
find _site -type f -name '*.xml' -exec sed -i '' '/^[ \t]*$/d' {} \;

# Minify JavaScript and CSS files.
$YUICOMPRESSOR --type js -o _site/js/main.js _site/js/main.js
$YUICOMPRESSOR --type css -o _site/css/main.css _site/css/main.css

# Done!
printf '\n\e[1;34m%s\e[0m\n\n' 'Done!'
