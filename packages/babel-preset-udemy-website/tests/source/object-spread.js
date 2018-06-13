import '../babel-polyfill';

function React() {}
function Component() {}

export default [
    {a: 1, ...{b: 2}},
    <Component a={ 1 } { ...{b: 2} } />
];
