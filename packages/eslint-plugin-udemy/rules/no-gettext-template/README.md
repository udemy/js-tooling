# No template string formatting inside gettext()

`udemy/no-gettext-template` checks for template string interpolation inside gettext calls. If templates are used inside gettext, whitespace gets pushed to TMS, causing potential issues on translation and unnecessary "new" strings on indentation changes.

## Rule details

The following would error:

```js
gettext(`some text
         some more text`);
```

The following would not error:

```js
gettext('some text ' +
        'some more text');
```
