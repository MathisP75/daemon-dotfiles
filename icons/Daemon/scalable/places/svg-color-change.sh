#!/bin/bash

for f in *.svg;
do
echo "Changing color of $f ..."
sed -i -e 's/currentColor/#5beedc/g' "$f";
done

#  /    regex       /  replacements/    flags   
# s/    \"#.    \{6\}   /  \"#16a085   /    g
#               match 6 chars
