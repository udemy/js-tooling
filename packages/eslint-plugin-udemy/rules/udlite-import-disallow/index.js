'use strict';

const {isUDLiteFile} = require('../../helpers/is-udlite-file.js');

module.exports.rules = {
    'udlite-import-disallow': {
        meta: {
            schema: [
                {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            source: {
                                type: 'string',
                            },
                            message: {
                                type: 'string',
                            },
                        },
                        required: ['source', 'message'],
                    },
                },
            ],
        },
        create: function create(context) {
            const disallowedImports = context.options[0] || [];
            const filename = context.getFilename();

            if (!isUDLiteFile(filename)) {
                return {};
            }

            if (
                ['.spec.js', '.spec.ts', '.spec.tsx', '/spec-helpers.js', '/spec-helpers.ts'].some(
                    name => filename.endsWith(name),
                )
            ) {
                return {};
            }

            return {
                ImportDeclaration: function ImportDeclaration(node) {
                    disallowedImports.forEach(rule => {
                        const sourceValue = node.source.value || '';
                        const sourceMatches = sourceValue.match(new RegExp(rule.source));
                        if (sourceMatches) {
                            context.report({
                                node,
                                message: `${rule.message}\n${sourceValue}\n`,
                            });
                        }
                    });
                },
            };
        },
    },
};
