# No Hardcoded CDNs

`udemy/no-hardcoded-cdns` forbids hardcoding CDNs in urls. Instead, the CDN should be passed from backend to frontend through UD.Config. This makes it easier to migrate our CDNs.

## Rule details

The blacklist is configured by a list of `{cdn, fixWith}` objects. The `cdn` is the name of the CDN to forbid. The `fixWith` is the code that should be used instead of hardcoding the CDN.

Assuming the following configuration:

```js
'udemy/no-hardcoded-cdns': ['error', [
    {
        cdn: 'udemy-images.udemy.com',
        fixWith: 'udLink.toS3Images()',
    },
]]
```

The following would error:

```js 
'https://udemy-images.udemy.com/user/123/abc.png'
`https://udemy-images.udemy.com/user/${user.id}/abc.png`
```

The following would not error:

```js
// This outsmarts the rule, but please don't do this!
['https://udemy-images', 'udemy', 'com'].join('.') + '/user/123/abc.png'

// This is the correct way.
udLink.toS3Images('user/123/abc.png')
```
