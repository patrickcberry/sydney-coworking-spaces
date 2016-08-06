#!/bin/sh

# Add all changed files to git and push to GitHub
#
# Accepts a single parameter as the commit comment

if [ $# == 1 ]; then
	comment=$1
else
	comment="General update"
fi

git add . && git commit -a -m "$comment" && git push
