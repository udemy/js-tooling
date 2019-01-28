# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

       <a name="8.0.0"></a>
# [8.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@7.0.0...eslint-config-udemy-basics@8.0.0) (2019-01-28)


### Features

* Add proper Prettier + ESLint testing in place. ([f60bfb1](https://github.com/udemy/js-tooling/commit/f60bfb1))


### BREAKING CHANGES

* Previously our `eslint --fix` was failing to fix certain cases. This has happened since I moved the `prettier` plugin next to the other plugins within this repositories. That configuration, unlike the initial setup, caused `prettier` to not be able to override the `rules` we explicitly set here. Hence, we needed to remove those explicit sets. I also integrated a test step that makes sure we won't mistakenly add any conflicting rules going forward.




       <a name="7.0.0"></a>
# [7.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@6.0.3...eslint-config-udemy-basics@7.0.0) (2019-01-28)


### Features

* Add Prettier to ESLInt configuration. ([c648b1d](https://github.com/udemy/js-tooling/commit/c648b1d))


### BREAKING CHANGES

* Prettier has its own way of formatting the code. Some of the ESLint rules is replaced and your ESLint run would fail after this upgrade.




<a name="6.0.4"></a>
## [6.0.4](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@6.0.3...eslint-config-udemy-basics@6.0.4) (2019-01-10)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="6.0.3"></a>
## [6.0.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@6.0.2...eslint-config-udemy-basics@6.0.3) (2018-11-28)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="6.0.2"></a>
## [6.0.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@6.0.1...eslint-config-udemy-basics@6.0.2) (2018-11-27)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="6.0.1"></a>
## [6.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@6.0.0...eslint-config-udemy-basics@6.0.1) (2018-11-27)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="6.0.0"></a>
# [6.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.5...eslint-config-udemy-basics@6.0.0) (2018-11-09)


### Features

* Upgrade eslint to 5.x ([1655e2f](https://github.com/udemy/js-tooling/commit/1655e2f))


### BREAKING CHANGES

* Upgrade ESLint to ^5.9.0 and require node >=8.12.0 as an engine.




<a name="5.0.5"></a>
## [5.0.5](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.4...eslint-config-udemy-basics@5.0.5) (2018-11-06)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="5.0.4"></a>
## [5.0.4](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.3...eslint-config-udemy-basics@5.0.4) (2018-09-24)


### Bug Fixes

* adding eslint-import-resolver-node ([243009a](https://github.com/udemy/js-tooling/commit/243009a))




<a name="5.0.3"></a>
## [5.0.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.2...eslint-config-udemy-basics@5.0.3) (2018-09-24)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="5.0.2"></a>
## [5.0.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.1...eslint-config-udemy-basics@5.0.2) (2018-09-12)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="5.0.1"></a>
## [5.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@5.0.0...eslint-config-udemy-basics@5.0.1) (2018-09-12)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="5.0.0"></a>
# [5.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.21...eslint-config-udemy-basics@5.0.0) (2018-06-29)


* TF-3508 TF-3509 Upgraded @babel/core to 7.0.0-beta.49 (#33) ([8195cff](https://github.com/udemy/js-tooling/commit/8195cff))


### BREAKING CHANGES

* You need to depend on @babel/core in your app directly.

* Publish

- babel-polyfill-udemy-website@6.0.0
- babel-preset-udemy-website@7.0.0
- eslint-config-udemy-babel-addons@2.0.0
- eslint-config-udemy-basics@4.0.0
- eslint-config-udemy-jasmine-addons@4.0.0
- eslint-config-udemy-react-addons@4.0.0
- eslint-config-udemy-website@5.0.0
- eslint-plugin-udemy@5.0.0




<a name="4.0.0"></a>
# [4.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.21...eslint-config-udemy-basics@4.0.0) (2018-06-26)


### Features

* Upgraded [@babel](https://github.com/babel)/core to 7.0.0-beta.49 ([7f4f23a](https://github.com/udemy/js-tooling/commit/7f4f23a))


### BREAKING CHANGES

* You need to depend on @babel/core in your app directly.




<a name="3.1.21"></a>
## [3.1.21](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.20...eslint-config-udemy-basics@3.1.21) (2018-06-15)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.20"></a>
## [3.1.20](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.18...eslint-config-udemy-basics@3.1.20) (2018-06-05)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.19"></a>
## [3.1.19](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.18...eslint-config-udemy-basics@3.1.19) (2018-05-01)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.18"></a>
## [3.1.18](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.17...eslint-config-udemy-basics@3.1.18) (2018-04-24)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.17"></a>
## [3.1.17](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.16...eslint-config-udemy-basics@3.1.17) (2018-04-23)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.16"></a>
## [3.1.16](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.15...eslint-config-udemy-basics@3.1.16) (2018-02-07)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.15"></a>
## [3.1.15](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.14...eslint-config-udemy-basics@3.1.15) (2018-02-07)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.14"></a>
## [3.1.14](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.13...eslint-config-udemy-basics@3.1.14) (2017-12-07)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.13"></a>
## [3.1.13](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.12...eslint-config-udemy-basics@3.1.13) (2017-12-05)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.12"></a>
## [3.1.12](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.11...eslint-config-udemy-basics@3.1.12) (2017-12-05)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.11"></a>
## [3.1.11](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.10...eslint-config-udemy-basics@3.1.11) (2017-12-04)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.10"></a>
## [3.1.10](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.9...eslint-config-udemy-basics@3.1.10) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.9"></a>
## [3.1.9](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.8...eslint-config-udemy-basics@3.1.9) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.8"></a>
## [3.1.8](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.7...eslint-config-udemy-basics@3.1.8) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.7"></a>
## [3.1.7](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.6...eslint-config-udemy-basics@3.1.7) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-basics

<a name="3.1.6"></a>
## [3.1.6](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-basics@3.1.5...eslint-config-udemy-basics@3.1.6) (2017-11-27)




**Note:** Version bump only for package eslint-config-udemy-basics
