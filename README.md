# reproduction-repo

Problem:
`npm run build` failed.

Reproductions steps:
* Clone this repo
* run `npm install`
* run `npm run build`
* build fails with not indicative error

Insights:
* `unusedFunc` func in `src/utils/api/auth.js` is bundled to the output in `.next` folder although it's not used.
* If I comment `genToken` in `unusedFunc` func, problem is gone and `npm run build` succeeded

I though webpack is smart and eliminate deadcode...
