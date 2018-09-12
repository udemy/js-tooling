'use strict';

function orderChecker(context, a, b) {
    return node => {
        const decorators = node.decorators;
        if (!decorators) { return; }
        const docoratorNames = decorators.map(d => d.expression.name);
        const ai = docoratorNames.indexOf(a);
        const bi = docoratorNames.indexOf(b);
        if (ai >= 0 && bi >= 0 && bi < ai) {
            context.report({
                node,
                loc: decorators[ai].loc,
                message: `\`@${a}\` should come before \`@${b}\`.`,
            });
        }
    };
}

module.exports.rules = {
    'decorator-order': {
        create(context) {
            return {
                MethodDefinition: orderChecker(context, 'autobind', 'action'),
                ClassDeclaration: orderChecker(context, 'inject', 'observer'),
            };
        },
    },
};
