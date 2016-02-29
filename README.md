[![Build Status](https://img.shields.io/travis/markdalgleish/instrument-methods/master.svg?style=flat-square)](http://travis-ci.org/markdalgleish/instrument-methods) [![npm](https://img.shields.io/npm/v/instrument-methods.svg?style=flat-square)](https://www.npmjs.com/package/instrument-methods)

# instrument-methods

Simple object method instrumentation.

```bash
$ npm install --save instrument-methods
```

## Usage

```js
import instrumentMethods from 'instrument-methods';

const instance = {
  doThis: () => { ... },
  doThat: () => { ... }
};

instrumentMethods(instance, {
  before: methodName => console.log(`"${methodName}" is about to be called!`),
  after: methodName => console.log(`"${methodName}" was called!`)
});

instance.doThat();

// Logs:
// "doThat" is about to be called!
// "doThat" was called!
```

Even though it modifies the original object, `instrumentMethods` also returns a reference to the original object so it can be used as part of an expression:

```js
const after = methodName => console.log(`"${methodName}" was called!`);

const instance = instrumentMethods({
  doThis: () => { ... },
  doThat: () => { ... }
}, { after });
```

## License

[MIT License](http://markdalgleish.mit-license.org/)
