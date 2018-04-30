'use strict';

module.exports.rules = {
    'import-blacklist': {
        meta: {
            schema: [{
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        source: {
                            type: 'string',
                        },
                        specifier: {
                            type: 'string',
                        },
                        message: {
                            type: 'string',
                        },
                        exceptions: {
                            type: 'array',
                            items: {
                                type: 'string',
                            },
                        },
                    },
                    required: ['source', 'message'],
                },
            }],
        },
        create: function create(context) {
            const blacklist = context.options[0] || [];
            const filename = context.getFilename();

            return {
                ImportDeclaration: function ImportDeclaration(node) {
                    blacklist.forEach(rule => {
                        const isException = (rule.exceptions || []).some(pattern => {
                            return new RegExp(pattern).test(filename);
                        });
                        if (isException) {
                            return;
                        }

                        let isBlacklisted = new RegExp(rule.source).test(node.source.value);
                        if (rule.specifier) {
                            isBlacklisted = isBlacklisted && node.specifiers.some(specifier => {
                                return new RegExp(rule.specifier).test(specifier.imported && specifier.imported.name);
                            });
                        }
                        if (isBlacklisted) {
                            context.report({ node, message: rule.message });
                        }
                    });
                },
            };
        },
    },
};
