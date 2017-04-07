# rollup-async

> Async function demo for Ben Hallion.

## Why?

 - Rollup produces the best output (simplest necessary, no bloat).
 - Rollup is fast!
 - Rollup has treated me very well whereas I've had issues with other build tools.

## Install

```sh
git clone git@github.com:sholladay/rollup-async.git &&
cd rollup-async &&
npm install
```

## Usage

To see the demo, simply do: `npm run demo`. Rollup will compile modules with `async` functions and they will be run in the browser via a test page, which will open in your default browser.

The point here is to show that Rollup does not care whether the code uses `async` functions or not. And Rollup itself does not demand that you use Babel, though obviously [browser support](http://caniuse.com/#feat=async-functions) is a constraint.

## Contributing

See our [contributing guidelines](https://github.com/sholladay/rollup-async/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/rollup-async/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/rollup-async/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/rollup-async/blob/master/LICENSE "The license for rollup-async.") © [Seth Holladay](http://seth-holladay.com "Author of rollup-async.")

Go make something, dang it.
