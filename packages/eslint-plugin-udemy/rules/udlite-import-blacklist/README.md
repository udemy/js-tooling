# UDLite Import Blacklist

`udemy/udlite-import-blacklist` blacklists certain imports in UDLite files, i.e. files in a udlite/ directory. In general, UDLite blacklists:

- UDHeavy base-components, in favor of UDLite base-components.
- most third-party libs that UDHeavy uses, in favor of smaller alternatives (in terms of JS size).

Test files (`.spec.js` files, `spec-helpers.js`) are exempt from the rule.

## Rule details

The blacklist is configured by a list of regexes.

Assuming the following configuration:

```js
'udemy/udlite-import-blacklist': ['error', [
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
