'use strict';

const RuleTester = require('eslint').RuleTester;

const rule = require('./index').rules['no-hardcoded-cdns'];

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
});

const options = [
    [
        {
            cdn: 's.udemycdn.com',
            fixWith: 'udLink.toStorageStaticAsset()',
        },
        {
            cdn: 'udemy-prod-static-assets.s3.amazonaws.com',
            fixWith: 'udLink.toStorageStaticAsset()',
        },
    ],
];

ruleTester.run('no-hardcoded-cdns', rule, {
    valid: [
        {
            code: "udLink.toStorageStaticAsset('partner-logos/logo.svg')",
            options,
        },
        {
            code: '// s.udemycdn.com is the domain for our static assets',
            options,
        },
        {
            code: '// they live in an S3 bucket called udemy-prod-static-assets',
            options,
        },
    ],
    invalid: [
        {
            code: "'https://s.udemycdn.com/partner-logos/logo.svg'",
            errors: [
                {
                    message:
                        'Please do not hardcode the CDN s.udemycdn.com. Instead, build the url with udLink.toStorageStaticAsset().',
                },
            ],
            options,
        },
        {
            // eslint-disable-next-line no-template-curly-in-string
            code: '`https://s.udemycdn.com/partner-logos/${logo.img}`',
            errors: [
                {
                    message:
                        'Please do not hardcode the CDN s.udemycdn.com. Instead, build the url with udLink.toStorageStaticAsset().',
                },
            ],
            options,
        },
        {
            code: "'https://udemy-prod-static-assets.s3.amazonaws.com/partner-logos/logo.svg'",
            errors: [
                {
                    message:
                        'Please do not hardcode the CDN udemy-prod-static-assets.s3.amazonaws.com. Instead, build the url with udLink.toStorageStaticAsset().',
                },
            ],
            options,
        },
    ],
});
