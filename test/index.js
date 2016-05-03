"use strict";

var assert = require('core-assert'),
    json = require('nano-json'),
    timer = require('nano-timer'),
    Promise = require('nano-promise'),
    fs = require('nano-fs'),
    util = require('util');


/* ------------------------------------------------------------------------ */
function Logger(stage, job) {

	var context = job.sched.name + ':' + job.name + '#' + stage;

	this.stage = stage;
	this.job = job;
	this.acc = [];
	this.dumps = [];

	this.log = function (code, format, a, b, etc) {
		acc.push(util.format('  %s: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.trace = function () {
		this.log.apply(this, Array.prototype.concat.apply(['trace'], arguments));
	};

	this.warn = function (code, format, a, b, etc) {
		acc.push(util.format('W.%s: warning: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.error = function (format, a, b, etc) {
		acc.push(util.format('E.%s: error: %s', context, util.format.apply(util.format, Array.prototype.slice.call(arguments, 1))));
	};

	this.fail = function (format, a, b, etc) {
		acc.push(util.format('F.%s: FAIL: %s', context, util.format.apply(util.format, arguments)));
	};

	this.writeListing = function (name, data) {
		this.dumps.push({
			name: name, 
			data: data
		});

		return Promise.resolve();
	};
}

Logger.prototype = {
};



var plugin = require('../index.js'),
    svg = '\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">\n\
	<symbol id="ic-hs-offline" viewBox="0 0 16 16">\n\
		<circle cx="8" cy="8" r="6" class="ic-hs-offline"/>\n\
	</symbol>\n\
</svg>\n',
	jsvg = [
	'viewBox', '0 0 16 16',
	'symbol', [
		'id', 'ic-hs-offline',
		'viewBox', '0 0 16 16',
		'circle', [
			'cx', '8',
			'cy', '8',
			'r', '6',
			'class', 'ic-hs-offline'
		]
	]
],
	opts = {
			dist_folder: {},
			sources_folder: __dirname+'/src'
		},
    job = {
		name: 'test',
		sched: {
			name: 'test',
			opts: opts
		}
	};

suite('svgjs.parse', function () {
	test('good', function (done) {
		var log = new Logger('svg.parse', job),
		    data = {
					opts: opts,
					encoding: 'utf8',
					content: svg
				};

		Promise.resolve(log, data)
			.then(plugin.parse)
			.then(function () {
				assert.strictEqual(data.encoding, 'json');
				assert.deepEqual(data.content, jsvg);
				done();
			}).catch(done);
	});

	test('bad', function (done) {
		var log = new Logger('svg.parse', job),
		    data = {
					opts: opts,
					encoding: 'tex',
					content: svg
				};

		Promise.resolve(log, data)
			.then(plugin.parse)
			.then(function () {
				done(Error('not failed'));
			}, function () {
				done();
			}).catch(done);
	});
});

suite('svgjs.optimise-ids', function () {
	test('good', function (done) {
		var log = new Logger('svg.optimize-ids', job),
		    data = {
					opts: opts,
					encoding: 'json',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['optimize-ids'])
			.then(function () {
				assert.strictEqual(data.encoding, 'json');
				assert.deepEqual(data.content, jsvg);
				done();
			}).catch(done);
	});

	test('bad', function (done) {
		var log = new Logger('svg.optimize-ids', job),
		    data = {
					opts: opts,
					encoding: 'jso',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['optimize-ids'])
			.then(function () {
				done(Error('not failed'));
			}, function () {
				done();
			}).catch(done);
	});
});

suite('svgjs.optimise', function () {
	test('good', function (done) {
		var log = new Logger('svg.optimize', job),
		    data = {
					opts: opts,
					encoding: 'json',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['optimize'])
			.then(function () {
				assert.strictEqual(data.encoding, 'json');
				assert.deepEqual(data.content, jsvg);
				done();
			}).catch(done);
	});

	test('bad', function (done) {
		var log = new Logger('svg.optimize', job),
		    data = {
					opts: opts,
					encoding: 'jso',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['optimize'])
			.then(function () {
				done(Error('not failed'));
			}, function () {
				done();
			}).catch(done);
	});
});

suite('svgjs.optimise', function () {
	test('good', function (done) {
		var log = new Logger('svg.pack', job),
		    data = {
					opts: opts,
					encoding: 'json',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['pack'])
			.then(function () {
				assert.strictEqual(data.encoding, 'json');
				assert.deepEqual(data.content, jsvg);
				done();
			}).catch(done);
	});

	test('bad', function (done) {
		var log = new Logger('svg.pack', job),
		    data = {
					opts: opts,
					encoding: 'jso',
					content: jsvg
				};

		Promise.resolve(log, data)
			.then(plugin['pack'])
			.then(function () {
				done(Error('not failed'));
			}, function () {
				done();
			}).catch(done);
	});
});

