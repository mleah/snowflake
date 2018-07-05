#!/bin/sh

SNOWFLAKE_BUILD=1 yarn export
git add .
git commit -m "[build.sh] $@"
git push origin HEAD 