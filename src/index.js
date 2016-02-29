const noop = () => {};

export default (instance, { before = noop, after = noop }) => {
  Object.keys(instance).forEach(methodName => {
    if (typeof instance[methodName] === 'function') {
      const originalMethod = instance[methodName];

      instance[methodName] = function() {
        before(methodName);
        originalMethod.apply(this, arguments);
        after(methodName);
      };
    }
  });

  return instance;
};
