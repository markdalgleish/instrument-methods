import instrumentMethods from '../src';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('instrument-methods', () => {
  ['before', 'after'].forEach(position => {
    describe(`Applying instrumentation ${position} each method`, () => {
      let instrumentationSpy;
      let methodSpy;
      let object;
      let returnVal;

      beforeEach(() => {
        instrumentationSpy = spy();
        methodSpy = spy();

        object = { method: methodSpy };

        returnVal = instrumentMethods(object, { [position]: instrumentationSpy });
      });

      it('Should return a reference to the original object', () => {
        expect(returnVal).to.equal(object);
      });

      describe('When a method is executed', () => {
        beforeEach(() => object.method(1, 2, 3));

        it('Should call the provided function with the methodName', () => {
          expect(instrumentationSpy.getCall(0).args[0]).to.equal('method');
        });

        it('Should call the original method with correct context', () => {
          expect(methodSpy.getCall(0).thisValue).to.equal(object);
        });

        it('Should call the original method with the correct arguments', () => {
          expect(methodSpy.getCall(0).args).to.deep.equal([1, 2, 3]);
        });
      });

      describe('When a method is executed with a custom context via "call"', () => {
        beforeEach(() => object.method.call('custom context', 4, 5, 6));

        it('Should support dynamic method context', () => {
          expect(methodSpy.getCall(0).thisValue).to.equal('custom context');
        });

        it('Should call the original method with the correct arguments', () => {
          expect(methodSpy.getCall(0).args).to.deep.equal([4, 5, 6]);
        });
      });
    });
  });
});
