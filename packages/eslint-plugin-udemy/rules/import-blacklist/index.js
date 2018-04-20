'use strict';

module.exports.rules = {
    'import-blacklist': {
        meta: {
            schema: [{
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        pattern: {
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
                    required: ['pattern', 'message'],
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
                        const isBlacklisted = new RegExp(rule.pattern).test(node.source.value);
                        if (isBlacklisted) {
                            context.report({ node, message: rule.message });
                        }
                    });
                },
            };
        },
    },
};
