'use strict';

module.exports.rules = {
    'decorator-order': {
        create(context) {
            return {
                MethodDefinition(node) {
                    const decorators = node.decorators;
                    if (!decorators) {
                        return;
                    }
                    const decoratorNames = decorators.map(d => d.expression.name);
                    const bi = decoratorNames.indexOf('autobind');
                    const ci = decoratorNames.indexOf('action');
                    if (bi >= 0 && ci >= 0 && ci < bi) {
                        context.report({
                            node,
                            loc: decorators[bi].loc,
                            message: '`@autobind` should come before `@action`.',
                        });
                    }
                },
                ClassDeclaration(node) {
                    const decorators = node.decorators;
                    if (!decorators) {
                        return;
                    }
                    const decoratorNames = decorators.map(d => d.expression.name);
                    const oi = decoratorNames.indexOf('observer');
                    if (oi >= 0 && oi < decorators.length - 1) {
                        context.report({
                            node,
                            loc: decorators[oi].loc,
                            message: '`@observer` should be the inner-most decorator.',
                        });
                    }
                },
            };
        },
    },
};
