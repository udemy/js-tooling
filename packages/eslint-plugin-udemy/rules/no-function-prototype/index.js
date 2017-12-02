'use strict';

module.exports.rules = {
    'no-function-prototype': {
        meta: {
            fixable: 'code',
        },
        create(context) {
            return {
                MemberExpression(node) {
                    if (node.object && node.object.type === 'Identifier' && node.object.name === 'Function' &&
                        node.property && node.property.type === 'Identifier' && node.property.name === 'prototype') {
                        context.report({
                            node,
                            message: 'Avoid using `Function.prototype`; instead use `_.noop` from Underscore.js, ' +
                            'or `_.noop` from Lodash, or () => {} otherwise.',
                        });
                    }
                },
            };
        },
    },
};
