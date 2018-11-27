'use strict';

module.exports.rules = {
    'no-settimeout': {
        create(context) {
            return {
                ExpressionStatement(node) {
                    if (node.expression.callee && node.expression.callee.name === 'setTimeout') {
                        context.report({
                            node,
                            message: 'Found `setTimeout` used in a spec. Please use `await delay` instead.',
                        });
                    }
                },
            };
        },
    },
};
