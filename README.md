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
  before: (methodName, args) => console.log(`"${methodName}" is about to be called!`, ...args),
  after: (methodName, argS) => console.log(`"${methodName}" was called!`, ...args)
});

instance.doThat(1, 2, 3);

// Logs:
// "doThat" is about to be called!, 1, 2, 3
// "doThat" was called!, 1, 2, 3
```

Even though it modifies the object, `instrumentMethods` also returns a reference to the modified object so it can be used as part of an expression:

```js
const after = methodName => console.log(`"${methodName}" was called!`);

const instance = instrumentMethods({
  doThis: () => { ... },
  doThat: () => { ... }
}, { after });
```

## License

[MIT License](http://markdalgleish.mit-license.org/)
