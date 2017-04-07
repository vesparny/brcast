# Brcast

> Tiny 250b data broadcaster.

-   **Microscopic:** weighs about 250 bytes gzipped

Brcast was made for the browser, but works in any JavaScript runtime. It has no dependencies and.

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [Testing](#tests)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com). Go check them out if you don't have them locally installed.

```sh
$ npm install --save brcast
```

Then with a module bundler like [rollup](http://rollupjs.org/) or [webpack](https://webpack.js.org/), use as you would anything else:

```javascript
// using ES6 modules
import brcast from 'brcast'

// using CommonJS modules
var brcast = require('brcast')
```

The [UMD](https://github.com/umdjs/umd) build is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/brcast/dist/brcast.umd.js"></script>
```

You can find the library on `window.brcast`.

## Usage

```js
import brcast from 'brcast'

let broadcast = brcast()

// subscribe
let unsubscribe = broadcast.subscribe(state => console.log(state))

// setState sets the state and invoke all subscription callbacks passing in the state
broadcast.setState(1)

// setState returns the current state
broadcast.getState()

// unsubscribe: invoke the function returned by broadcast.subscribe(state => console.log(state))
// to unbind the handler
unsubscribe()
```

## Tests

```sh
$ npm run test
```


[MIT License](LICENSE.md) © [Alessandro Arnodo](https://alessandro.arnodo.net/)
