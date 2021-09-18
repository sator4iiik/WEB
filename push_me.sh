#!/bin/sh

git add .
git commit -am "initial commit"
git push
echo "iнiцiалiзовано"
cat -e | git log --stat
