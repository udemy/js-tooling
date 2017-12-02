'use strict';

module.exports.rules = {
    'no-non-zero-settimeout': {
        meta: {
            fixable: 'code',
        },
        create(context) {
            return {
                ExpressionStatement(node) {
                    if (node.expression.callee && node.expression.callee.name === 'setTimeout') {
                        const fails = node.expression.arguments.filter(val => {
                            if (val.type === 'Literal' && val.value !== 0) {
                                return true;
                            }
                            if (val.type === 'UnaryExpression' && val.argument.value !== 0) {
                                return true;
                            }
                            return false;
                        });
                        if (fails.length) {
                            context.report({
                                node,
                                message: 'Found setTimeout used in a spec file with nonzero delay',
                                fix: fixer => {
                                    return fixer.remove(fails);
                                },
                            });
                        }
                    }
                },
            };
        },
    },
};
