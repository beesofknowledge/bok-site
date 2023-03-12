#! /usr/bin/bash

title=$1
type=$2
level=$3
lower="${title,,}"
# quote="\"${title}\""
clean="${lower//[\'\"]/}"
nospaces="${clean//[ ]/-}"
path="/home/data/development/bok-site/docs/items/${nospaces}.md"

touch ${path}

echo -e "---" > ${path}
echo -e "prev: false" >> ${path}
echo -e "next: false" >> ${path}
echo -e "" >> ${path}
echo -e "title: ${title}" >> ${path}
echo -e "image: ${nospaces}.png" >> ${path}
echo -e "attributes:" >> ${path}
echo -e "  Equipment Type: ${type}" >> ${path}
echo -e "  Required Level: ${level}" >> ${path}
echo -e "---" >> ${path}
echo -e "" >> ${path}
echo -e "<MyItemComponent :item="\$frontmatter" />" >> ${path}
echo -e "" >> ${path}