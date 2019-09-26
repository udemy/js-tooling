# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [12.0.15](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.14...eslint-config-udemy-website@12.0.15) (2019-09-26)

**Note:** Version bump only for package eslint-config-udemy-website





## [12.0.14](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.13...eslint-config-udemy-website@12.0.14) (2019-09-04)

**Note:** Version bump only for package eslint-config-udemy-website





## [12.0.13](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.12...eslint-config-udemy-website@12.0.13) (2019-08-27)

**Note:** Version bump only for package eslint-config-udemy-website





## [12.0.12](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.8...eslint-config-udemy-website@12.0.12) (2019-08-14)

**Note:** Version bump only for package eslint-config-udemy-website





## [12.0.11](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.8...eslint-config-udemy-website@12.0.11) (2019-08-13)

**Note:** Version bump only for package eslint-config-udemy-website





## [12.0.10](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.8...eslint-config-udemy-website@12.0.10) (2019-08-13)

**Note:** Version bump only for package eslint-config-udemy-website





 <a name="12.0.9"></a>
## [12.0.9](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.8...eslint-config-udemy-website@12.0.9) (2019-07-29)




**Note:** Version bump only for package eslint-config-udemy-website

 <a name="12.0.8"></a>
## [12.0.8](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.7...eslint-config-udemy-website@12.0.8) (2019-06-12)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.7"></a>
## [12.0.7](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.6...eslint-config-udemy-website@12.0.7) (2019-05-29)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.6"></a>
## [12.0.6](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.5...eslint-config-udemy-website@12.0.6) (2019-05-20)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.5"></a>
## [12.0.5](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.4...eslint-config-udemy-website@12.0.5) (2019-05-20)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.4"></a>
## [12.0.4](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.3...eslint-config-udemy-website@12.0.4) (2019-05-08)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.3"></a>
## [12.0.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.2...eslint-config-udemy-website@12.0.3) (2019-05-07)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.2"></a>
## [12.0.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.1...eslint-config-udemy-website@12.0.2) (2019-02-28)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.1"></a>
## [12.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@12.0.0...eslint-config-udemy-website@12.0.1) (2019-01-28)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="12.0.0"></a>
# [12.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@11.0.0...eslint-config-udemy-website@12.0.0) (2019-01-28)


### Features

* Add proper Prettier + ESLint testing in place. ([f60bfb1](https://github.com/udemy/js-tooling/commit/f60bfb1))


### BREAKING CHANGES

* Previously our `eslint --fix` was failing to fix certain cases. This has happened since I moved the `prettier` plugin next to the other plugins within this repositories. That configuration, unlike the initial setup, caused `prettier` to not be able to override the `rules` we explicitly set here. Hence, we needed to remove those explicit sets. I also integrated a test step that makes sure we won't mistakenly add any conflicting rules going forward.




<a name="11.0.0"></a>
# [11.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@9.0.1...eslint-config-udemy-website@11.0.0) (2019-01-28)


### Bug Fixes

* disallow inject as global ([139d514](https://github.com/udemy/js-tooling/commit/139d514))


### Features

* Add Prettier to ESLInt configuration. ([c648b1d](https://github.com/udemy/js-tooling/commit/c648b1d))
* Add udemy/no-hardcoded-cdns ([daf4226](https://github.com/udemy/js-tooling/commit/daf4226))


### BREAKING CHANGES

* Prettier has its own way of formatting the code. Some of the ESLint rules is replaced and your ESLint run would fail after this upgrade.
* inject is no longer accepted as a global. previously, we accepted it in angularjs specs, but it is problematic because ESLint doesn't complain when we use inject from mobx without importing it. fix angularjs specs via `import mocks from 'angularMocks'; mocks.inject`.




<a name="10.1.0"></a>
# [10.1.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@10.0.0...eslint-config-udemy-website@10.1.0) (2019-01-10)


### Features

* Add udemy/no-hardcoded-cdns ([daf4226](https://github.com/udemy/js-tooling/commit/daf4226))




<a name="10.0.0"></a>
# [10.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@9.0.1...eslint-config-udemy-website@10.0.0) (2019-01-03)


### Bug Fixes

* disallow inject as global ([139d514](https://github.com/udemy/js-tooling/commit/139d514))


### BREAKING CHANGES

* inject is no longer accepted as a global. previously, we accepted it in angularjs specs, but it is problematic because ESLint doesn't complain when we use inject from mobx without importing it. fix angularjs specs via `import mocks from 'angularMocks'; mocks.inject`.




<a name="9.0.1"></a>
## [9.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@9.0.0...eslint-config-udemy-website@9.0.1) (2018-12-10)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="9.0.0"></a>
# [9.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@8.0.3...eslint-config-udemy-website@9.0.0) (2018-12-05)


### Features

* Disalllow angular as a global keyword. ([177a98a](https://github.com/udemy/js-tooling/commit/177a98a))


### BREAKING CHANGES

* We no longer allow "angular" global keyword. Users need to `import angular from "angular";` in order to use `angular`.




<a name="8.0.3"></a>
## [8.0.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@8.0.2...eslint-config-udemy-website@8.0.3) (2018-11-28)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="8.0.2"></a>
## [8.0.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@8.0.1...eslint-config-udemy-website@8.0.2) (2018-11-27)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="8.0.1"></a>
## [8.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@8.0.0...eslint-config-udemy-website@8.0.1) (2018-11-27)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="8.0.0"></a>
# [8.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.10...eslint-config-udemy-website@8.0.0) (2018-11-09)


### Features

* Upgrade eslint to 5.x ([1655e2f](https://github.com/udemy/js-tooling/commit/1655e2f))


### BREAKING CHANGES

* Upgrade ESLint to ^5.9.0 and require node >=8.12.0 as an engine.




<a name="7.1.10"></a>
## [7.1.10](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.9...eslint-config-udemy-website@7.1.10) (2018-11-06)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.9"></a>
## [7.1.9](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.8...eslint-config-udemy-website@7.1.9) (2018-11-06)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.8"></a>
## [7.1.8](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.7...eslint-config-udemy-website@7.1.8) (2018-11-06)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.7"></a>
## [7.1.7](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.6...eslint-config-udemy-website@7.1.7) (2018-10-03)


### Bug Fixes

* Add npgettext to list of acceptable global variables ([3923fac](https://github.com/udemy/js-tooling/commit/3923fac))




<a name="7.1.6"></a>
## [7.1.6](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.5...eslint-config-udemy-website@7.1.6) (2018-09-24)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.5"></a>
## [7.1.5](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.4...eslint-config-udemy-website@7.1.5) (2018-09-24)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.4"></a>
## [7.1.4](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.3...eslint-config-udemy-website@7.1.4) (2018-09-12)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.3"></a>
## [7.1.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.2...eslint-config-udemy-website@7.1.3) (2018-09-12)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.2"></a>
## [7.1.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.1...eslint-config-udemy-website@7.1.2) (2018-07-18)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.1"></a>
## [7.1.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.1.0...eslint-config-udemy-website@7.1.1) (2018-07-18)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="7.1.0"></a>
# [7.1.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@7.0.0...eslint-config-udemy-website@7.1.0) (2018-07-18)


### Features

* import blacklist Link from react-router-dom ([3db4b23](https://github.com/udemy/js-tooling/commit/3db4b23))




<a name="7.0.0"></a>
# [7.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@6.0.0...eslint-config-udemy-website@7.0.0) (2018-07-11)


### Features

* Improve lodash related linting for website-django ([c4b9fce](https://github.com/udemy/js-tooling/commit/c4b9fce))


### BREAKING CHANGES

* This change may cause new eslint failures related with lodash imports.




<a name="6.0.0"></a>
# [6.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.4.0...eslint-config-udemy-website@6.0.0) (2018-06-29)


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




<a name="5.0.0"></a>
# [5.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.4.0...eslint-config-udemy-website@5.0.0) (2018-06-26)


### Features

* Upgraded [@babel](https://github.com/babel)/core to 7.0.0-beta.49 ([7f4f23a](https://github.com/udemy/js-tooling/commit/7f4f23a))


### BREAKING CHANGES

* You need to depend on @babel/core in your app directly.




<a name="4.4.0"></a>
# [4.4.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.3.2...eslint-config-udemy-website@4.4.0) (2018-06-20)


### Features

* import blacklist enzyme/build/index ([8568456](https://github.com/udemy/js-tooling/commit/8568456))




<a name="4.3.2"></a>
## [4.3.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.3.1...eslint-config-udemy-website@4.3.2) (2018-06-15)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.3.1"></a>
## [4.3.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.3.0...eslint-config-udemy-website@4.3.1) (2018-06-06)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.3.0"></a>
# [4.3.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.1.2...eslint-config-udemy-website@4.3.0) (2018-06-05)


### Features

* Add a way to blacklist import specifiers. ([a310ea7](https://github.com/udemy/js-tooling/commit/a310ea7))
* Blacklist BrowserRouter, HashRouter, Router from react-router-dom ([60b299a](https://github.com/udemy/js-tooling/commit/60b299a))




<a name="4.2.0"></a>
# [4.2.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.1.1...eslint-config-udemy-website@4.2.0) (2018-05-01)


### Features

* Add a way to blacklist import specifiers. ([a310ea7](https://github.com/udemy/js-tooling/commit/a310ea7))
* Blacklist BrowserRouter, HashRouter, Router from react-router-dom ([60b299a](https://github.com/udemy/js-tooling/commit/60b299a))




<a name="4.1.2"></a>
## [4.1.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.1.1...eslint-config-udemy-website@4.1.2) (2018-04-30)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.1.1"></a>
## [4.1.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.1.0...eslint-config-udemy-website@4.1.1) (2018-04-24)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.1.0"></a>
# [4.1.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.5...eslint-config-udemy-website@4.1.0) (2018-04-23)


### Features

* Introduce udemy/import-blacklist ([3e922cd](https://github.com/udemy/js-tooling/commit/3e922cd))




<a name="4.0.5"></a>
## [4.0.5](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.4...eslint-config-udemy-website@4.0.5) (2018-02-21)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.0.4"></a>
## [4.0.4](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.3...eslint-config-udemy-website@4.0.4) (2018-02-07)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.0.3"></a>
## [4.0.3](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.1...eslint-config-udemy-website@4.0.3) (2018-02-07)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.0.2"></a>
## [4.0.2](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.1...eslint-config-udemy-website@4.0.2) (2017-12-18)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.0.1"></a>
## [4.0.1](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@4.0.0...eslint-config-udemy-website@4.0.1) (2017-12-07)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="4.0.0"></a>
# [4.0.0](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.20...eslint-config-udemy-website@4.0.0) (2017-12-05)


### Features

* Introduce `settings.udemy.srcPath` ([3d0f522](https://github.com/udemy/js-tooling/commit/3d0f522))


### BREAKING CHANGES

* Start relying on `settings.udemy.srcPath` instead of rule option for `angular-path-based-module-names` rule.

This fixes a problem faced when IDEs run eslint on different cwd paths per file.




<a name="3.3.20"></a>
## [3.3.20](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.19...eslint-config-udemy-website@3.3.20) (2017-12-05)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.19"></a>
## [3.3.19](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.18...eslint-config-udemy-website@3.3.19) (2017-12-05)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.18"></a>
## [3.3.18](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.16...eslint-config-udemy-website@3.3.18) (2017-12-05)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.17"></a>
## [3.3.17](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.16...eslint-config-udemy-website@3.3.17) (2017-12-04)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.16"></a>
## [3.3.16](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.15...eslint-config-udemy-website@3.3.16) (2017-12-04)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.15"></a>
## [3.3.15](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.14...eslint-config-udemy-website@3.3.15) (2017-12-04)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.14"></a>
## [3.3.14](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.13...eslint-config-udemy-website@3.3.14) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.13"></a>
## [3.3.13](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.12...eslint-config-udemy-website@3.3.13) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.12"></a>
## [3.3.12](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.11...eslint-config-udemy-website@3.3.12) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.11"></a>
## [3.3.11](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.10...eslint-config-udemy-website@3.3.11) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.10"></a>
## [3.3.10](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.9...eslint-config-udemy-website@3.3.10) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.9"></a>
## [3.3.9](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.8...eslint-config-udemy-website@3.3.9) (2017-12-02)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.8"></a>
## [3.3.8](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.7...eslint-config-udemy-website@3.3.8) (2017-12-01)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.7"></a>
## [3.3.7](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.6...eslint-config-udemy-website@3.3.7) (2017-12-01)




**Note:** Version bump only for package eslint-config-udemy-website

<a name="3.3.6"></a>
## [3.3.6](https://github.com/udemy/js-tooling/compare/eslint-config-udemy-website@3.3.5...eslint-config-udemy-website@3.3.6) (2017-11-27)




**Note:** Version bump only for package eslint-config-udemy-website
