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

Even though it monkey patches the original object, `instrumentMethods` also returns a reference to the original object so it can more easily be used as part of an expression.

For example:

```js
const after = methodName => console.log(`"${methodName}" was called!`);

const instance = instrumentMethods({
  doThis: () => { ... },
  doThat: () => { ... }
}, { after });
```

## License

[MIT License](http://markdalgleish.mit-license.org/)
