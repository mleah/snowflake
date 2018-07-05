#!/bin/sh

yarn export
git add .
git commit -m "[build.sh] $@"
git push origin HEAD 