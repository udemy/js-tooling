Udemy ESLint
============

This repository has [*ESLint*](https://www.github.com/eslint/eslint) related packages used by various Udemy projects. 
It is owned by [@udemy/team-f](https://github.com/orgs/udemy/teams/team-f), but everyone is welcome to contribute.
Please refer to [Contributing](#contributing) section to learn more.

This repository uses [*Lerna*](https://github.com/lerna/lerna) to manage multiple [*npm*](https://www.npmjs.com/) packages. We 
configured Lerna to use [*Yarn Workspaces*](https://yarnpkg.com/lang/en/docs/workspaces/) under the hood.

# Installation

Refer to individual packages' *Installation* section in order to learn more about how you can use each package.
There is no top-level installation. Though, [`eslint-config-udemy-basics`](packages/eslint-config-udemy-basics)
and [`eslint-plugin-udemy`](packages/eslint-plugin-udemy) are good starting points.

# Commands

In order to contribute to this repository, you need to have a basic understanding of 
[Lerna commands](https://github.com/lerna/lerna#commands). In a nutshell, 
there are three important commands to know:

* **[`lerna add`](https://github.com/lerna/lerna#add):** In order to add a new dependency to an existing package's 
`package.json` file, you'd run `` `yarn bin`/lerna add dependency-name --scope=package-name``. e.g.
    ```
    $ `yarn bin`/lerna add eslint-plugin-lodash --scope=eslint-config-udemy-website
    ``` 
* **[`lerna bootstrap`](https://github.com/lerna/lerna#bootstrap):** In order to install all of the dependencies
for every package, you can simply run `` `yarn bin`/lerna bootstrap``
* **[`lerna publish`](https://github.com/lerna/lerna#publish):** In order to publish your changes to npm, you
can simply run `` `yarn bin`/lerna publish ``. It would prompt you to decide version numbering for each changed
package.

# List of available packages

We individually publish all folders inside [`packages`](packages) as a separate npm package. These packages are
owned by our [Udemy npm organization](https://www.npmjs.com/org/udemy).

* **[`eslint-config-udemy-basics`](packages/eslint-config-udemy-basics):** A basic ESLint configuration for writing 
ES2015 JS code. Used by various Udemy projects.
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
A set of custom ESLint rules written for Udemy, by Udemy. This rules are mainly used by  
[`eslint-config-udemy-website`](packages/eslint-config-udemy-website).

# Contributing

Install [*Yarn@1.3.2*](https://github.com/yarnpkg/yarn/releases/tag/v1.3.2) globally. 

    $ npm install -g yarn@1.3.2
    
<small>**Note:** Since our main `udemy/website-django` codebase
uses a different Yarn version at the moment (v0.22), you might want to utilize 
[*nvm*](https://github.com/creationix/nvm) to maintain multiple Yarn versions. e.g. Use 
`nvm use system && npm install -g yarn@0.22` for `udemy/website-django`, and 
`nvm install 6.10.1 && nvm use 6.10.1 && npm install -g yarn@1.3.2` for `udemy/eslint-udemy`. 
If you do so, you need to remember to switch between `6.10.1` vs `system` whenever you are working on
one project or the other. This is a temporary measure until 
[@udemy/sre](https://github.com/orgs/udemy/teams/sre) unifies Yarn versions across the board.</small>

Install all dependencies locally.

    $ `yarn bin`/lerna bootstrap
    
Run tests to verify everything is working.

    $ npm run test

Once you are good to go, a typical contribution to this repository would require you to:

1. Create a new branch,
1. Add any new dependencies to any of the packages via `lerna add`,
1. Run `lerna bootstrap` to make sure everything is installed,
1. Make your necessary source file changes,
1. Write your tests if applicable,
1. Do *NOT* update version numbers in `package.json` files (`lerna publish` does it for you),
1. Run `npm run test` to make sure all tests pass,
1. Commit/push your changes,
1. Create a PR against master,
1. Once your PR is approved, merge it to master,
1. Pull latest master locally,
1. Run `lerna publish` in order to publish your changes to npm,
1. Go to the repository where you'd use these new ESLint rule changes,
1. Update the `package.json` dependencies to any `eslint-config|plugin-udemy-*` package as necessary.

You can always reach out to [@udemy/team-f](https://github.com/orgs/udemy/teams/team-f) at 
[#dev-team-f Slack channel](https://udemy.slack.com/messages/dev-team-f).
 
