'use strict';

module.exports.rules = {
    'no-then': {
        create(context) {
            return {
                MemberExpression(node) {
                    if (node.property && node.property.name === 'then') {
                        context.report({
                            node,
                            message: 'Found `then` usage. You should usually use async / await instead.',
                        });
                    }
                },
            };
        },
    },
};
