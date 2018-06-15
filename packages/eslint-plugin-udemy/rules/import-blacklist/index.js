'use strict';

function interpolate(string, matches) {
    return string.replace(/\$(\d+)/g, (fullMatch, matchIndex) => {
        return String(matches[matchIndex - 1]);
    });
}

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

                        const sourceMatches = (node.source.value || '')
                            .match(new RegExp(rule.source));
                        let isBlacklisted = !!sourceMatches;
                        let specifierMatches = null;
                        if (rule.specifier) {
                            isBlacklisted = isBlacklisted && node.specifiers.some(specifier => {
                                if (!specifier.imported) {
                                    return false;
                                }
                                specifierMatches = (specifier.imported.name || '')
                                    .match(new RegExp(rule.specifier));
                                return !!specifierMatches;
                            });
                        }
                        if (isBlacklisted) {
                            let matchedGroups = [];
                            if (sourceMatches) {
                                matchedGroups = matchedGroups.concat(sourceMatches.slice(1));
                            }
                            if (specifierMatches) {
                                matchedGroups = matchedGroups.concat(specifierMatches.slice(1));
                            }
                            context.report({
                                node,
                                message: interpolate(rule.message, matchedGroups),
                            });
                        }
                    });
                },
            };
        },
    },
};
