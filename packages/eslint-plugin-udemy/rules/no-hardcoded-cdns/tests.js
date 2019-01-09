'use strict';

const RuleTester = require('eslint').RuleTester;

const rule = require('./index').rules['no-hardcoded-cdns'];

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'module',
    },
});

const options = [[
    {
        cdn: 'udemy-images.udemy.com',
        fixWith: 'udLink.toS3Images()',
    },
]];

ruleTester.run('no-hardcoded-cdns', rule, {
    valid: [
        {
            code: "udLink.toS3Images('user/123/foo.png')",
            options,
        },
        {
            code: '// We used to use udemy-images.udemy.com for S3 images.',
            options,
        },
    ],
    invalid: [
        {
            code: "'https://udemy-images.udemy.com/user/123/foo.png'",
            errors: [{ message: 'Please do not hardcode the CDN udemy-images.udemy.com. Instead, build the url with udLink.toS3Images().' }],
            options,
        },
        {
            // eslint-disable-next-line no-template-curly-in-string
            code: '`https://udemy-images.udemy.com/user/${user.id}/foo.png`',
            errors: [{ message: 'Please do not hardcode the CDN udemy-images.udemy.com. Instead, build the url with udLink.toS3Images().' }],
            options,
        },
    ],
});
