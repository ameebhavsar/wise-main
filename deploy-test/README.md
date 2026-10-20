# deploy test

To prove the GitHub Pages pipeline works before wwe go live.

## how to run it

1. Copy this whole folder into wise-main as `deploy-test/`
2. Move `deploy-test.yml` to `wise-main/.github/workflows/deploy-test.yml`
3. In wise-main:
```
git checkout -b deploy-test
git add deploy-test .github/workflows/deploy-test.yml
git commit -m "deployment pipeline test (do not merge)"
git push -u origin deploy-test
```
4. On the fork (ameebhavsar/wise-main) → Settings → Pages → Source: GitHub Actions
5. Check `https://ameebhavsar.github.io/wise-main/`:
   - home loads
   - open /test, refresh (proves the 404 fallback)
   - paste the /test url in a fresh tab (proves direct links)
6. Delete the branch when done. Never merge it, never add a CNAME here.
