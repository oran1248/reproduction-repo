# reproduction-repo

Problem:
`npm run build` failed.

Insights:
* `unusedFunc` func in `src/utils/api/auth.js` is bundled to the output in `.next` folder although it's not used.
* If I comment `genToken` in `unusedFunc` func, problem is gone and `npm run build` succeeded

I though webpack is smart and eliminate deadcode...
