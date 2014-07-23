#!/bin/sh

(cd src && bower install) &&
(cd src/third_party && ./checkout.sh) &&

exec ./build.sh

exit 0