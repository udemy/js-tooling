# No Hardcoded CDNs

`udemy/no-hardcoded-cdns` forbids hardcoding CDNs in urls. Instead, the CDN should be passed from backend to frontend through UD.Config. This makes it easier to migrate our CDNs.

## Rule details

The disallowed list is configured by `{cdn, fixWith}` objects. The `cdn` is the name of the CDN to forbid. The `fixWith` is the code that should be used instead of hardcoding the CDN.

Assuming the following configuration:

```js
'udemy/no-hardcoded-cdns': ['error', [
    {
        cdn: 's.udemycdn.com',
        fixWith: 'udLink.toStorageStaticAsset()',
    },
]]
```

The following would error:

```js 
'https://s.udemycdn.com/partner-logos/logo.svg'
`https://s.udemycdn.com/partner-logos/${logo.img}`
```

The following would not error:

```js
// This outsmarts the rule, but please don't do this!
['https://s', 'udemycdn', 'com'].join('.') + '/partner-logos/logo.svg'

// This is the correct way.
udLink.toStorageStaticAsset('partner-logos/logo.svg')
```
