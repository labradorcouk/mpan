#!/bin/sh

R="\033[0;31m"
G="\033[0;32m"
W="\033[0m"

RES=$(detect-secrets scan --exclude="(package-lock.json)" | jq '.results')
LEN=$(echo $RES | jq '. | length')

if [ "$LEN" -ne "0" ]; then
    echo
    echo "[ ${R}FAIL${W} ] Found unsanitized secrets in $LEN file(s):"
    echo
    echo $RES | jq '.'
    echo
    exit 1;
else
    echo
    echo "[ ${G}PASS${W} ] No unsanitized secrets found."
    echo
fi
