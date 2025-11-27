#!/bin/bash

MAIN_BRANCHES="^(main|master|develop|test)$"
BRANCH_PATTERN="^(feature|bugfix|hotfix|release|chore)/[A-Z]+-[0-9]+$"
PROJECT_PREFIX="DBT"

branch=$(git rev-parse --abbrev-ref HEAD)

if [ "$3" = "1" ] || [ "$1" != "$2" ]; then
    echo "🌟 Switched to branch: $branch"
    if [[ ! "$branch" =~ $MAIN_BRANCHES ]] && [[ ! "$branch" =~ $BRANCH_PATTERN ]]; then
        echo -e "\033[1;33m⚠️  WARNING: Branch name doesn't follow convention\033[0m"
        echo -e "\033[36mExpected format:\033[0m \033[1;32mtype/${PROJECT_PREFIX}-123\033[0m"
        echo -e "\033[36mExamples:\033[0m"
        echo -e "  \033[1;32mfeature/${PROJECT_PREFIX}-001\033[0m - New features"
        echo -e "  \033[1;32mbugfix/${PROJECT_PREFIX}-002\033[0m - Bug fixes"
        echo -e "  \033[1;32mhotfix/${PROJECT_PREFIX}-010\033[0m - Critical fixes"
        echo -e "  \033[1;32mrelease/${PROJECT_PREFIX}-100\033[0m - Release branches"
        echo -e "  \033[1;32mchore/${PROJECT_PREFIX}-789\033[0m - Maintenance tasks"
    fi
fi