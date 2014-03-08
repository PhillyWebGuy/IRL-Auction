#!/bin/sh
git archive --format=tar --prefix=version/ HEAD | (cd latest && tar xf -)
cd ..
grunt -v --force > build.log 2>&1
cd latest
tar -czf download.tar version/ 