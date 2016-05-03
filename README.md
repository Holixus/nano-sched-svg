
[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]


# nano-sched-svg
'nano-sched' plugin for parse, optimize and pack svg to json

## svg.parse(log, data)

* data Object
   * encoding `String` = 'utf8'
   * content `String`
* result data Object
   * encoding `String` = 'json'
   * content `Object`

Converts svg text into js object


## svg.optimize-ids(log, data)

* data Object
   * encoding `String` = 'json'
   * content `Object`


## svg.optimize(log, data)

* data Object
   * encoding `String` = 'json'
   * content `Object`


## svg.pack(log, data)

* data Object
   * encoding `String` = 'json'
   * content `Object`



[bithound-image]: https://www.bithound.io/github/Holixus/nano-sched-svg/badges/score.svg
[bithound-url]: https://www.bithound.io/github/Holixus/nano-sched-svg

[gitter-image]: https://badges.gitter.im/Holixus/nano-sched-svg.svg
[gitter-url]: https://gitter.im/Holixus/nano-sched-svg

[npm-image]: https://badge.fury.io/js/nano-sched-svg.svg
[npm-url]: https://badge.fury.io/js/nano-sched-svg

[github-tag]: http://img.shields.io/github/tag/Holixus/nano-sched-svg.svg
[github-url]: https://github.com/Holixus/nano-sched-svg/tags

[travis-image]: https://travis-ci.org/Holixus/nano-sched-svg.svg?branch=master
[travis-url]: https://travis-ci.org/Holixus/nano-sched-svg

[coveralls-image]: https://coveralls.io/repos/github/Holixus/nano-sched-svg/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Holixus/nano-sched-svg?branch=master

[david-image]: https://david-dm.org/Holixus/nano-sched-svg.svg
[david-url]: https://david-dm.org/Holixus/nano-sched-svg

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE

[downloads-image]: http://img.shields.io/npm/dt/nano-sched-svg.svg
[downloads-url]: https://npmjs.org/package/nano-sched-svg
