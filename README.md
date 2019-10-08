Udemy's JS tooling related public NPM packages [![CircleCI Status](https://circleci.com/gh/udemy/js-tooling.png?style=shield)](https://circleci.com/gh/udemy/js-tooling/tree/master)
==============================================

This repository has [*Babel*](https://www.github.com/babel/babel) and [*ESLint*](https://www.github.com/eslint/eslint) 
related packages used by various Udemy projects. It is owned by [@udemy/web-frontend](https://github.com/orgs/udemy/teams/web-frontend), 
but everyone is welcome to contribute. Please refer to the [Contributing](#contributing) section to learn more.

This repository uses [*Lerna*](https://github.com/lerna/lerna) to manage multiple [*npm*](https://www.npmjs.com/) packages. We 
configured Lerna to use [*Yarn Workspaces*](https://yarnpkg.com/lang/en/docs/workspaces/) under the hood.

# Installation

Refer to each package's *Installation* section in order to learn how to install each package.
There is no top-level installation. Though, [`eslint-config-udemy-basics`](packages/eslint-config-udemy-basics)
and [`eslint-plugin-udemy`](packages/eslint-plugin-udemy) are good starting points.

# Commands

In order to contribute to this repository, you need to have a basic understanding of 
[Lerna commands](https://github.com/lerna/lerna#commands). In a nutshell, 
there are three important commands to know:

* **[`lerna add`](https://github.com/lerna/lerna#add):** In order to add a new dependency to an existing package's 
`package.json` file, you'd run `` `yarn bin`/lerna add dependency-name --scope=package-name``. E.g.:

    ```
    $ `yarn bin`/lerna add eslint-plugin-lodash --scope=eslint-config-udemy-website
    ```

* **[`lerna remove` is not implemented yet](https://github.com/lerna/lerna/issues/833#issuecomment-375850356):** In order to remove a dependency from an existing package's `package.json` file, for now you'd run `` `cd packages/package-name; yarn remove dependency-name` ``. E.g.:

    ```
    $ cd packages/eslint-config-udemy-website
    $ yarn remove eslint-plugin-lodash
    ```

* `lerna upgrade` also doesn't exist: Follow the instructions above to do a remove and then re-add the package.
* **[`lerna bootstrap`](https://github.com/lerna/lerna#bootstrap):** In order to install all of the dependencies
for every package, you can simply run `` `yarn bin`/lerna bootstrap``.
* **[`lerna publish`](https://github.com/lerna/lerna#publish):** In order to publish your changes to npm, you
can simply run `` `yarn bin`/lerna publish ``. It will prompt you for a version number for each package you have 
changed.

# List of available packages

We individually publish all folders inside [`packages`](packages) as a separate npm package. These packages are
owned by our [Udemy npm organization](https://www.npmjs.com/org/udemy).

* **[`babel-polyfill-udemy-website`](packages/babel-polyfill-udemy-website):** The Babel polyfills used by 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/src/udemy/js/entry/main.js#L1) codebase.
* **[`babel-preset-udemy-website`](packages/babel-preset-udemy-website):** The Babel preset used by 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/.babelrc) codebase.
* **[`eslint-config-udemy-basics`](packages/eslint-config-udemy-basics):** A basic ESLint configuration for writing 
ES2015 JavaScript code. This is used by various Udemy projects.
* **[`eslint-config-udemy-babel-addons`](packages/eslint-config-udemy-babel-addons):** 
[*Babel*](https://github.com/babel/babel) specific ESLint configuration. Extended by 
[`eslint-config-udemy-website`](packages/eslint-config-udemy-website).
* **[`eslint-config-udemy-jasmine-addons`](packages/eslint-config-udemy-jasmine-addons):** 
[*Jasmine*](https://github.com/jasmine/jasmine) specific ESLint configuration. Extended by 
[`eslint-config-udemy-website`](packages/eslint-config-udemy-website).
* **[`eslint-config-udemy-react-addons`](packages/eslint-config-udemy-react-addons):**
[*React*](https://github.com/facebook/react) specific ESLint configuration. Extended by 
[`eslint-config-udemy-website`](packages/eslint-config-udemy-website).
* **[`eslint-config-udemy-website`](packages/eslint-config-udemy-website):**
The ESLint configuration used by 
[`udemy/website-django/static/`](https://github.com/udemy/website-django/tree/master/static/.eslintrc.js) codebase.
* **[`eslint-plugin-udemy`](packages/eslint-plugin-udemy):**
A set of custom ESLint rules written for Udemy, by Udemy. These rules are mainly used by
[`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Contributing

Install [*Yarn v1.9.4*](https://github.com/yarnpkg/yarn/releases/tag/v1.9.4) globally. 

    $ npm install -g yarn@1.9.4

Install all dependencies locally.

    $ yarn install
    $ `yarn bin`/lerna bootstrap

Run tests to verify everything is working.

    $ yarn test

## Updating an existing package

1. Create a new branch.
1. Add any new dependencies to any of the packages via `lerna add`.
1. Install all dependencies (see above).
1. Make your necessary source file changes.
1. Write your tests if applicable.
1. Do *NOT* update version numbers in `package.json` files (`lerna publish` does it for you).
1. Run `yarn test` to make sure all tests pass.
1. Commit/push your changes.
1. Create a pull request against master.
1. Get your pull request approved by a member of the Web Frontend team.
1. Run `git fetch origin --tags`. This is important for the `lerna publish` step below, as lerna checks git tags to determine what changed. See [https://github.com/lerna/lerna#updated](https://github.com/lerna/lerna#updated).
1. Get the latest code from master, via either pull or rebase. This is important for the `lerna publish` step below. If you have a merge conflict, lerna will fail to automatically push its "Publish" commit to your branch.
1. Run `lerna publish` in order to publish your changes to npm.
   - Ideally we would first merge the pull request to master, then publish master to npm, but `lerna publish`
     creates a "Publish" commit which would have to be pushed to master, and non-admins cannot push
     directly to master.
   - If this is your first time running `lerna publish`, you will be prompted to first run
     `npm adduser`. If you don't have an npm account, create one at <https://www.npmjs.com/signup>,
     and ping [@udemy/web-frontend](https://github.com/orgs/udemy/teams/web-frontend) to add your account to
     the [Udemy npm organization](https://www.npmjs.com/org/udemy).
   - If `lerna publish` doesn't pick up your changes (this happens if you had to run `npm adduser`),
     you can manually publish a package via e.g. `cd packages/eslint-config-udemy-website; npm publish`.
1. Confirm your changes were published to npm by checking the npm website,
   e.g. <https://www.npmjs.com/package/eslint-config-udemy-website>.
1. `lerna publish` should have created a "Publish" commit, which includes changes to CHANGELOG.md and package.json.
   See [#4a7ba34](https://github.com/udemy/js-tooling/commit/4a7ba340cee2bbbabe37b88efe5404a820bc1316) for example.
   Push this commit. Merge your pull request.
   - Do *NOT* squash merge after publishing since it confuses Lerna.
1. Go to the repository where you'd use these new package changes.
1. Update the `package.json` dependencies to any `babel|eslint-*-udemy-*` package as necessary.
1. Run `yarn install` to install the changes and to be able to start using the package.

You can always reach out to [@udemy/web-frontend](https://github.com/orgs/udemy/teams/web-frontend) on the 
[#dev-team-web-frontend Slack channel](https://udemy.slack.com/messages/dev-team-web-frontend).

## Adding a new package

1. Get in touch with [@udemy/web-frontend](https://github.com/orgs/udemy/teams/web-frontend) on the 
[#dev-team-web-frontend Slack channel](https://udemy.slack.com/messages/dev-team-web-frontend) to assess the need for a
new npm package to avoid any duplicate work.
1. Once there is consensus, create a new folder under [packages](packages/) folder under the
desired npm package name.
1. Use `index.js` as the package's main entry point, and `tests.js` as its entry point for tests.
1. Make sure `package.json` has the necessary information, per existing examples.
1. Make sure the new package has a meaningful `README.md` and a valid `LICENSE` file.
1. Follow the regular pull request and `lerna publish` flow as described above.
1. After publishing the package, make sure that everyone in the `udemy:developers` npm group has read-write permissions for the package:
    ```
    # Grant permissions.
    npm access grant read-write udemy:developers <package name>
    
    # Should list everyone in https://www.npmjs.com/settings/udemy/teams/team/developers/users
    npm access ls-collaborators <package name>
    ```

## Writing commit messages

We use [Conventional Commits](https://conventionalcommits.org) for commit guidelines. The commit message should be 
structured as follows: 



```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

_Example_

```
feat: Introduce eslint-config-tester

It is a utility library to write tests for ESLint configurations.

BREAKING CHANGE: Add a line like this if your code results in a breaking change. This will result
in a major version change.
```

The commit message format is 
important because these messages are used to create a changelog for each release.
