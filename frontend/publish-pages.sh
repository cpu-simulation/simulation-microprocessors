#!/usr/bin/env bash
# Builds the in-browser version and publishes it to the gh-pages branch, which GitHub Pages
# serves at https://cpu-simulation.github.io/simulation-microprocessors/
#
#   ./publish-pages.sh
set -euo pipefail
cd "$(dirname "$0")"

npm run build:static

branch=gh-pages
dir=../.gh-pages
git worktree remove --force "$dir" 2>/dev/null || true
rm -rf "$dir"

if git fetch -q origin "$branch" 2>/dev/null; then
  git worktree add -q -B "$branch" "$dir" "origin/$branch"
else
  git worktree add -q --orphan -b "$branch" "$dir"
fi

rsync -a --delete --exclude .git dist-static/ "$dir/"
touch "$dir/.nojekyll"
git -C "$dir" add -A
if git -C "$dir" diff --cached --quiet; then
  echo "Nothing changed, nothing to publish."
else
  git -C "$dir" commit -q -m "Publish the simulator from $(git rev-parse --short HEAD)"
  git -C "$dir" push -q origin "$branch"
  echo "Published. GitHub Pages updates in a minute or two."
fi
git worktree remove "$dir"
