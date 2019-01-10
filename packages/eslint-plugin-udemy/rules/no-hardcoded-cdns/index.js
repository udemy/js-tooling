'use strict';

module.exports.rules = {
    'no-hardcoded-cdns': {
        meta: {
            schema: [{
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        cdn: {
                            type: 'string',
                        },
                        fixWith: {
                            type: 'string',
                        },
                    },
                    required: ['cdn', 'fixWith'],
                },
            }],
        },
        create(context) {
            const cdns = context.options[0] || [];
            const sourceCode = context.getSourceCode();

            function checkForCDNs(string, currentNode) {
                cdns.forEach(({ cdn, fixWith }) => {
                    if (string.includes(cdn)) {
                        context.report({
                            node: currentNode,
                            message: (
                                `Please do not hardcode the CDN ${cdn}. ` +
                                `Instead, build the url with ${fixWith}.`
                            ),
                        });
                    }
                });
            }

            return {
                TemplateLiteral(node) {
                    checkForCDNs(sourceCode.getText(node), node);
                },
                Literal(node) {
                    if (node.value && typeof node.value === 'string') {
                        checkForCDNs(node.value, node);
                    }
                },
            };
        },
    },
};
