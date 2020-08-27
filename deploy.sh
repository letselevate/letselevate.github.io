#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

cat CNAME > ./dist/CNAME

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m ':rocket:'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:elevatte/elevatte.github.io.git HEAD:gh-pages

cd -
