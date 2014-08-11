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

  crop: function(test) {
    var dest = path.join(buildPath, 'arale.crop.png');

    var buffer = anthart.crop({
      src: fs.readFileSync(arale),
      canvas: {
        width: 128,
        height: 128
      },
      topLeft: {
        x: 0,
        y: 0
      },
      bottomRight: {
        x: 64,
        y: 64
      }
    });

    fs.writeFileSync(dest, buffer);
    test.done();
  },


  decorate: function(test) {
    var dest = path.join(buildPath, 'arale.decorate.png');

    var buffer = anthart.decorate({
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

  home: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var home = path.join(buildPath, 'home.png');
    var docks = require('./data/dockicons').icons;
    var options = require('./data/dockicons').options;
    var buffer = anthart.home(wallpaper, docks, options);
    fs.writeFileSync(home, buffer);
    test.done();
  },

  drawer: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var drawer = path.join(buildPath, 'drawer.png');
    var apps = require('./data/apps').icons;
    var options = require('./data/apps').options;
    var buffer = anthart.drawer(wallpaper, apps, options);
    fs.writeFileSync(drawer, buffer);
    test.done();
  },

  shortcuts: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var widgets = path.join(buildPath, 'widgets.png');
    var dock = require('./data/dockicons').icons;
    var shortcuts = require('./data/shortcuts').icons;
    var options = require('./data/shortcuts').options;
    var buffer = anthart.shortcuts(wallpaper, shortcuts, dock, options);
    fs.writeFileSync(widgets, buffer);
    test.done();
  }
};

exports = module.exports = tests;
