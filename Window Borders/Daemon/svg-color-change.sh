#!/bin/bash

for f in *.svg;
do
echo "Changing color of $f ..."
sed -i -e 's/FB3048/070d1a/g' "$f";
done

#  /    regex       /  replacements/    flags   
# s/    \"#.    \{6\}   /  \"#16a085   /    g
#               match 6 chars
