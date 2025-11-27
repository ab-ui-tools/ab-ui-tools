#!/bin/bash

MAIN_BRANCHES="^(main|master|develop|test)$"
BRANCH_PATTERN="^(feature|bugfix|hotfix|release|chore)/[A-Z]+-[0-9]+$"
PROJECT_PREFIX="DBT"

branch=$(git rev-parse --abbrev-ref HEAD)

if [[ "$branch" =~ $MAIN_BRANCHES ]]; then
    exit 0
fi

if [[ ! "$branch" =~ $BRANCH_PATTERN ]]; then
    echo -e "\033[1;31m❌ Invalid branch name:\033[0m \033[1;37m$branch\033[0m"
    echo -e "\033[36mBranch names must follow:\033[0m \033[1;32mtype/${PROJECT_PREFIX}-123\033[0m"
    echo ""
    echo -e "\033[36mValid examples:\033[0m"
    echo -e "  \033[1;32mfeature/${PROJECT_PREFIX}-123\033[0m"
    echo -e "  \033[1;32mbugfix/${PROJECT_PREFIX}-456\033[0m"
    echo -e "  \033[1;32mhotfix/${PROJECT_PREFIX}-789\033[0m"
    echo -e "  \033[1;32mrelease/${PROJECT_PREFIX}-100\033[0m"
    echo -e "  \033[1;32mchore/${PROJECT_PREFIX}-200\033[0m"
    exit 1
fi

exit 0