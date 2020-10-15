'use strict';

module.exports = {
    plugins: ['react'],
    rules: {
        // disallow <img> tags in JSX
        'react/forbid-elements': ['error', {forbid: ['img']}],
        // enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': ['error', 'always'],
        // prevent usage of .bind() in JSX props
        'react/jsx-no-bind': [
            'error',
            {ignoreRefs: true, allowArrowFunctions: false, allowBind: false},
        ],
        // prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': ['error', {ignoreCase: false}],
        // enforce l10n wrapping of strings literals
        // 'react/jsx-no-literals': 'error',
        // disallow undeclared variables in JSX
        'react/jsx-no-undef': 'error',
        // enforce PascalCase for user-defined JSX components
        'react/jsx-pascal-case': ['error', {allowAllCaps: true, ignore: []}],
        // prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 'error',
        // prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error',
        // prevent passing children as props
        'react/no-children-prop': 'error',
        // prevent usage of deprecated methods
        'react/no-deprecated': 'error',
        // prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 'error',
        // prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 'error',
        // prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',
        // prevent usage of isMounted
        'react/no-is-mounted': 'error',
        // prevent usage of setState
        // https://medium.com/@mweststrate/3-reasons-why-i-stopped-using-react-setstate-ab73fc67a42e
        'react/no-set-state': 'error',
        // prevent using string references
        'react/no-string-refs': 'error',
        // prevent invalid characters from appearing in markup
        'react/no-unescaped-entities': 'error',
        // prevent usage of unknown DOM property
        'react/no-unknown-property': 'error',
        // require ES6 class declarations over React.createClass
        'react/prefer-es6-class': ['error', 'always'],
        // require stateless functions when not using lifecycle methods, setState or ref
        // 'react/prefer-stateless-function': 'error',
        // prevent missing props validation in a React component definition
        'react/prop-types': ['error', {ignore: ['children'], customValidators: []}],
        // prevent missing React when using JSX
        'react/react-in-jsx-scope': 'error',
        // require render() methods to return something
        'react/require-render-return': 'error',
        // enforce a defaultProps definition for every prop that is not a required prop
        'react/require-default-props': [2, {forbidDefaultForRequired: true}],
        // enforce component methods order
        'react/sort-comp': 'error',
        // enforce style prop value being an object
        'react/style-prop-object': 'error',
        // disallow target="_blank" on links
        'react/jsx-no-target-blank': 'error',
        // only .jsx files may have JSX
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
        // enforce shorthand syntax for React fragments
        'react/jsx-fragments': ['error', 'syntax'],
        // prevent accidental JS comments from being injected into JSX as text
        'react/jsx-no-comment-textnodes': 'error',
        // disallow using React.render/ReactDOM.render's return value
        'react/no-render-return-value': 'error',
        // warn against using findDOMNode()
        'react/no-find-dom-node': 'error',
        // prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children': 'error',
        // prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': 'error',
    },
};
