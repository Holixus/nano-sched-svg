"use strict";

var jsvg = require('nano-svg2js');

module.exports = {

'parse': function sync(log, data) {
	if (data.encoding !== 'text')
		throw TypeError('data.encoding should be equal "text"');
	return jsvg.parseSVG(data.content).then(function (jsvg) {
		data.content = jsvg;
		data.encoding = 'json';
	});
},

'optimize-ids': function sync(log, data) {
	if (data.encoding !== 'json')
		throw TypeError('data.encoding should be equal "json"');
	data.content = jsvg.optimizeIds(data.content, data.opts['svg-ids-prefix'] || '$');
},

'optimize': function sync(log, data) {
	if (data.encoding !== 'json')
		throw TypeError('data.encoding should be equal "json"');
	data.content = jsvg.optimizeJSVG(data.content);
},

'pack': function sync(log, data) {
	if (data.encoding !== 'json')
		throw TypeError('data.encoding should be equal "json"');
	data.content = jsvg.packJSVG(data.content);
}

};
