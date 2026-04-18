#!/bin/bash
git filter-branch -f --env-filter '
if [ "$GIT_AUTHOR_EMAIL" = "abhay.vidja.08@gmail.com" ]; then
    GIT_AUTHOR_NAME="shyamsherasiya4332"
    GIT_AUTHOR_EMAIL="shyamshersiya@gmail.com"
    GIT_COMMITTER_NAME="shyamsherasiya4332"
    GIT_COMMITTER_EMAIL="shyamshersiya@gmail.com"
fi
' --tag-name-filter cat -- --branches --tags
