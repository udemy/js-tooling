'use strict';

module.exports.rules = {
    'no-action-bound': {
        meta: {
            fixable: 'code',
        },
        create(context) {
            return {
                MethodDefinition(node) {
                    const actionBoundDecorator = node.decorators && node.decorators.find(decorator => {
                        return decorator.expression &&
                            decorator.expression.object && decorator.expression.object.name === 'action' &&
                            decorator.expression.property && decorator.expression.property.name === 'bound';
                    });
                    if (actionBoundDecorator) {
                        context.report({
                            node,
                            message: 'Avoid using `@action.bound`; instead use `@autobind @action`.',
                            fix(fixer) {
                                return fixer.replaceText(actionBoundDecorator, '@autobind @action');
                            },
                        });
                    }
                },
            };
        },
    },
};
