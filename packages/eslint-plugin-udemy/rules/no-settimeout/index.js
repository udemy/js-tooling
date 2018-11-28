'use strict';

module.exports.rules = {
    'no-settimeout': {
        create(context) {
            return {
                CallExpression(node) {
                    if (node.callee && (node.callee.name === 'setTimeout' ||
                        (node.callee.property && node.callee.property.name === 'setTimeout'))) {
                        context.report({
                            node,
                            message: 'Found `setTimeout` called. Please use `await delay()` instead.',
                        });
                    }
                },
            };
        },
    },
};
