# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-tester@3.0.0...eslint-config-tester@3.0.1) (2019-08-12)

**Note:** Version bump only for package eslint-config-tester





<a name="3.0.0"></a>
# [3.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-tester@2.0.0...eslint-config-tester@3.0.0) (2019-01-28)


### Features

* Add proper Prettier + ESLint testing in place. ([f60bfb1](https://github.com/udemy/js-tooling/commit/f60bfb1))


### BREAKING CHANGES

* Previously our `eslint --fix` was failing to fix certain cases. This has happened since I moved the `prettier` plugin next to the other plugins within this repositories. That configuration, unlike the initial setup, caused `prettier` to not be able to override the `rules` we explicitly set here. Hence, we needed to remove those explicit sets. I also integrated a test step that makes sure we won't mistakenly add any conflicting rules going forward.




<a name="2.0.0"></a>
# [2.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-tester@1.0.0...eslint-config-tester@2.0.0) (2019-01-28)


### Features

* Add Prettier to ESLInt configuration. ([c648b1d](https://github.com/udemy/js-tooling/commit/c648b1d))


### BREAKING CHANGES

* Prettier has its own way of formatting the code. Some of the ESLint rules is replaced and your ESLint run would fail after this upgrade.




<a name="1.0.0"></a>
# [1.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-tester@0.1.3...eslint-config-tester@1.0.0) (2018-11-09)


### Features

* Upgrade eslint to 5.x ([1655e2f](https://github.com/udemy/js-tooling/commit/1655e2f))


### BREAKING CHANGES

* Upgrade ESLint to ^5.9.0 and require node >=8.12.0 as an engine.




<a name="0.1.3"></a>
## [0.1.3](https://github.com/udemy/js-tooling/compare/eslint-config-tester@0.1.2...eslint-config-tester@0.1.3) (2018-11-06)




**Note:** Version bump only for package eslint-config-tester

<a name="0.1.2"></a>
## [0.1.2](https://github.com/udemy/js-tooling/compare/eslint-config-tester@0.1.1...eslint-config-tester@0.1.2) (2018-02-07)




**Note:** Version bump only for package eslint-config-tester

<a name="0.1.1"></a>
## [0.1.1](https://github.com/udemy/js-tooling/compare/eslint-config-tester@0.1.0...eslint-config-tester@0.1.1) (2018-02-07)




**Note:** Version bump only for package eslint-config-tester

<a name="0.1.0"></a>
# 0.1.0 (2017-12-07)


### Features

* Introduce eslint-config-tester ([8999ae2](https://github.com/udemy/js-tooling/commit/8999ae2))
