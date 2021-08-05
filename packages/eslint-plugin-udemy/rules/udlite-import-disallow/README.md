# UDLite Import Disallow

`udemy/udlite-import-disallow` disallows certain imports in UDLite files- see eslint-plugin-udemy/helpers/is-udlite-file.js. In general, UDLite disallows:

- UDHeavy base-components, in favor of UDLite base-components.
- most third-party libs that UDHeavy uses, in favor of smaller alternatives (in terms of JS size).

Test files (`.spec.js` files, `spec-helpers.js` and typescript equivalents) are exempt from the rule.

## Rule details

The disallowed list is configured by a list of regexes.

Assuming the following configuration:

```js
'udemy/udlite-import-disallow': ['error', [
    {
        source: 'heavyweight-lib',
        message: 'UDLite files may not import Heavyweight lib',
    },
]]
```

The following imports would error, but only for non-test files in a udlite/ directory:

```js 
import 'heavyweight-lib';
import {foo, bar} from 'heavyweight-lib.js';
import {foo} from 'heavyweight-lib/foo';
```
