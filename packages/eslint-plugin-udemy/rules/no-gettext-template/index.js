'use strict';

/**
 * Switches quoting of javascript string from ` to ' escaping and unescaping as necessary.
 *
 * Does not convert curly variables - no-template-curly-in-string will alert you about those.
 *
 * Adapted from https://github.com/eslint/eslint/blob/master/lib/rules/quotes.js
 */
const convert = function(str) {
    return (
        // eslint-disable-next-line prefer-template
        "'" +
        str.slice(1, -1).replace(/\\(`)|'|(\s*\n\s*)/gu, (match, escaped, newline) => {
            if (escaped === '`') {
                return escaped; // unescape backticks
            }
            if (match === "'") {
                return "\\'"; // escape single quotes
            }
            if (newline) {
                return " ' +\n '"; // convert newlines(+whitespace) to string concatenation
            }
            return match;
        }) +
        "'"
    );
};

module.exports.rules = {
    'no-gettext-template': {
        meta: {
            type: 'problem',
            schema: [],
            fixable: 'code',
        },

        create(context) {
            const sourceCode = context.getSourceCode();

            return {
                TemplateLiteral(node) {
                    if (
                        node.parent.type === 'CallExpression' &&
                        node.parent.callee.name === 'gettext'
                    ) {
                        context.report({
                            node,
                            message: 'No template strings inside gettext.',
                            fix(fixer) {
                                return fixer.replaceText(node, convert(sourceCode.getText(node)));
                            },
                        });
                    }
                },
            };
        },
    },
};
