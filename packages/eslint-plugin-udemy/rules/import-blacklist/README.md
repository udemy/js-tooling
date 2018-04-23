# Import Blacklist

`udemy/import-blacklist` blacklists certain imports in JS files. For example, it might tell you to `please import from e.g. foo/lib/bar, not from foo directly`. There are several reasons we enforce this rule:

- Sometimes, a more specific import, e.g. `import bar from 'foo/lib/bar';`, can significantly reduce JS bundle size compared to e.g. `import { bar } from 'foo';`, since `'foo'` may contain many modules that the importing file is not actually using.
- Some libraries have Udemy-specific wrappers that configure or extend the original library, in which case the library will only work properly if it is imported via the wrapper.
- For code consistency, we may prefer one syntax over another. For example, if "main" in package.json points to `'foo/lib/foo'`, we may prefer `import foo from 'foo';` over `import foo from 'foo/lib/foo';`.

## Rule details

The blacklist is configured by a list of regexes. You may optionally specify a list of exception regexes to whitelist certain files from the blacklist.

Assuming the following configuration:

```js
'udemy/import-blacklist': ['error', [
    {
        pattern: '^foo(?:\\.js)?$',
        message: 'Please import from foo/lib/, not from foo',
    },
]]
```

The following imports would error:

```js 
import foo from 'foo';

import foo from 'foo.js';

import 'foo';

import { foo } from 'foo';
```

The following imports would not error:

```js
import foo from 'foo/lib/foo';

import foo from 'foo.less';
```

If we added:

```js
exceptions: ['bar\\.js'],
```

then none of the imports in some-path/bar.js would error.
