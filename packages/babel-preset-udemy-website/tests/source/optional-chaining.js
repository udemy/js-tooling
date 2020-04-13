import '@babel/polyfill';

const obj = {
  foo: {
    bar: {
      baz() {
        return 42;
      },
    },
  },
};


// All the way down to baz
const baz = obj?.foo?.bar?.baz();

// Calling function on non exsting .qux
const safe = obj?.qux?.baz();

// Calling function that does not exist
const safe2 = obj?.foo.bar.qux?.();


export default [baz, safe, safe2];
