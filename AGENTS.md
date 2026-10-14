# Repository guidance

- Before each source commit, increment the patch version using `npm version patch --no-git-tag-version` and include both `package.json` and `package-lock.json` in the commit. Do not bump again if that commit's version increment is already pending.
- Update the About view's feature list when adding or changing user-facing features.
