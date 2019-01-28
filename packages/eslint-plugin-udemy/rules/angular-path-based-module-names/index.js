'use strict';

const path = require('path');

module.exports.rules = {
    'angular-path-based-module-names': {
        meta: {
            fixable: 'code',
        },
        create(context) {
            const root = path.resolve(
                (context.settings.udemy && path.normalize(context.settings.udemy.srcPath)) || '',
            );
            const filename = context.getFilename();

            return {
                CallExpression(node) {
                    const callee = node.callee;
                    const object = callee.name || (callee.object && callee.object.name);

                    if (
                        object === 'angular' &&
                        callee.property &&
                        callee.property.name === 'module'
                    ) {
                        const argument = node.arguments[0];
                        const name = argument && argument.value;

                        if (typeof name === 'string') {
                            const startsWith = filename.startsWith(root);
                            const required = filename.slice(
                                root.length + 1,
                                -path.extname(filename).length,
                            );

                            if (!startsWith || name !== required) {
                                context.report({
                                    node,
                                    message: `Angular module name must match file's relative path: \`${required}\``,
                                    fix(fixer) {
                                        if (startsWith) {
                                            return fixer.replaceText(
                                                argument,
                                                `'${required.replace(/'/g, '\\')}'`,
                                            );
                                        }
                                    },
                                });
                            }
                        }
                    }
                },
            };
        },
    },
};
