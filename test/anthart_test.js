/*
 * anthart
 * https://github.com/bitdewy/anthart
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var mkdirp = require('mkdirp');
var path = require('path');
var anthart = require('../lib/anthart');

var arale = path.join(__dirname, 'data/arale.png');

var buildPath = path.join(__dirname, '../build');
/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var tests = {

  setUp: function(done) {
    mkdirp.sync(buildPath);
    done();
  },

  awesome: function(test) {
    test.expect(1);
    // tests here
    test.equal(anthart.awesome(), 'awesome', 'should be awesome.');
    test.done();
  },

  scale: function(test) {
    var dest = path.join(buildPath, 'arale.scale.png');

    var buffer = anthart.scale({
      src: fs.readFileSync(arale),
      width: 128,
      height: 128
    });

    fs.writeFileSync(dest, buffer);
    test.done();
  },

  clipToFitRatio: function(test) {
    var fitWidth = path.join(buildPath, 'arale.shrikToFitWidth.png');
    var buffer = anthart.clipToFitRatio({
      src: fs.readFileSync(arale),
      width: 125,
      height: 63
    });
    fs.writeFileSync(fitWidth, buffer);

    var fitHeight = path.join(buildPath, 'arale.shrikToFitHeight.png');
    buffer = anthart.clipToFitRatio({
      src: fs.readFileSync(arale),
      width: 63,
      height: 125
    });
    fs.writeFileSync(fitHeight, buffer);
    test.done();
  },

  compositeIcon: function(test) {
    var base = path.join(__dirname, 'data/base.png');
    var shape = path.join(__dirname, 'data/shape.png');
    var icon = path.join(__dirname, 'data/arale.alpha.edge.png');
    var cover = path.join(__dirname, 'data/cover.png');
    var composited = path.join(buildPath, 'arale.composited.png');
    var smartPallet = path.join(buildPath, 'arale.smartPallet.png');

    var buffer = anthart.compositeIcon({
      base: fs.readFileSync(base),
      shape: fs.readFileSync(shape),
      icon: fs.readFileSync(icon),
      cover: fs.readFileSync(cover)
    });

    fs.writeFileSync(composited, buffer);

    buffer = anthart.compositeIcon({
      base: fs.readFileSync(base),
      shape: fs.readFileSync(shape),
      icon: fs.readFileSync(icon),
      cover: fs.readFileSync(cover)
    }, true, 96);

    fs.writeFileSync(smartPallet, buffer);

    test.done();
  }
};

exports = module.exports = tests;
