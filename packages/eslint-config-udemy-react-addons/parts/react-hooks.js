'use strict';

module.exports = {
    plugins: ['react-hooks'],
    rules: {
        // Only call Hooks from react functions and only call Hooks at the top level
        'react-hooks/rules-of-hooks': 'error',
        // Verifies the list of dependencies for Hooks like useEffect and similar
        'react-hooks/exhaustive-deps': 'error',
    },
};
