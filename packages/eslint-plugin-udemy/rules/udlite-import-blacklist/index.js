'use strict';

module.exports.rules = {
    'udlite-import-blacklist': {
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
            const blacklist = context.options[0] || [];
            const filename = context.getFilename();

            if (!filename.includes('/udlite/')) {
                return {};
            }

            if (filename.endsWith('.spec.js') || filename.endsWith('/spec-helpers.js')) {
                return {};
            }

            return {
                ImportDeclaration: function ImportDeclaration(node) {
                    blacklist.forEach(rule => {
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
