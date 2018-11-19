'use strict';
module.exports.rules = {
    'no-then': {
        create(context) {
            return {
                MemberExpression(node) {
                    if (node.property && node.property.name === 'then') {
                        context.report({
                            node,
                            message: 'Found `then` used in a spec. Please use async / await instead.',
                        });
                    }
                },
            };
        },
    },
};
