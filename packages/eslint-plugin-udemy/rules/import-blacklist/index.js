'use strict';

const blacklist = [
    {
        // For correct configuration
        pattern: '^currencyformatter(?:\\.js)?$',
        message: 'Please import from utils/currency-formatter/, not from currencyformatter',
        exceptions: ['utils/currency-formatter(?:\\.spec)?\\.js$'],
    },
    {
        // For improved JS bundling
        pattern: '^lodash(?:\\.js)?$',
        message: 'Please import from lodash/lib/, not from lodash directly',
    },
    {
        // For code consistency
        pattern: '^mobx/lib/mobx(?:\\.js)?$',
        message: 'Please import from mobx, not from mobx/lib/mobx',
    },
    {
        // For correct configuration
        pattern: '^moment(?:\\.js)?$',
        message: 'Please import from utils/ud-moment, not from moment',
        exceptions: ['utils/ud-moment(?:\\.spec)?\\.js$'],
    },
    {
        // For correct configuration
        pattern: '^numeral(?:\\.js)?$',
        message: 'Please import from utils/ud-numeral, not from numeral',
        exceptions: ['utils/ud-numeral(?:\\.spec)?\\.js$'],
    },
    {
        // For improved JS bundling
        pattern: '^react-bootstrap(?:\\.js)?$',
        message: 'Please import from react-bootstrap/lib/, not from react-bootstrap directly',
    },
    {
        // For correct implementation
        pattern: '^react-bootstrap.*?$',
        message: 'Please import from base-components/, not from react-bootstrap/',
        exceptions: ['/base-components/'],
    },
    {
        // For improved JS bundling
        pattern: '^react-overlays(?:\\.js)?$',
        message: 'Please import from react-overlays/lib/, not from react-overlays directly',
    },
];

module.exports.rules = {
    'import-blacklist': {
        create: function create(context) {
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
