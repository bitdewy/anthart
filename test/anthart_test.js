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
var baby = path.join(__dirname, 'data/baby.jpg');
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

var fn = function(test) {

  var recv = function(err) {
    test.ifError(err);
    test.done();
  };
  return recv;
};

var tests = {

  setUp: function(done) {
    mkdirp.sync(buildPath);
    done();
  },

  scale: function(test) {
    var dest = path.join(buildPath, 'arale.scale.png');

    var buffer = anthart.scale({
      src: fs.readFileSync(baby),
      width: 1200,
      height: 1440,
      exif: {
        image: {
          Orientation: 1
        }
      }
    });


    fs.writeFile(dest, buffer, fn(test));
  },

  scaleToJpegStream: function(test) {
    var dest = fs.createWriteStream(path.join(buildPath, 'baby.scale.jpg'));

    var stream = anthart.scaleToJpegStream({
      src: fs.readFileSync(baby),
      width: 1440,
      height: 1200
    });
    stream.pipe(dest);
    dest.on('close', fn(test));
  },

  scaleToPngStream: function(test) {
    var dest = fs.createWriteStream(path.join(buildPath, 'baby.scale.png'));

    var stream = anthart.scaleToPngStream({
      src: fs.readFileSync(baby),
      width: 190,
      height: 337
    });
    stream.pipe(dest);
    dest.on('close', fn(test));
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
      },
      exif: {
        image: {
          Orientation: 6
        }
      }
    });

    fs.writeFile(dest, buffer, fn(test));
  },


  decorate: function(test) {
    var dest = path.join(buildPath, 'arale.decorate.png');

    var buffer = anthart.decorate({
      src: fs.readFileSync(arale),
      width: 128,
      height: 128
    });

    fs.writeFile(dest, buffer, fn(test));
  },

  clipToFitHeight: function(test) {
    var fitHeight = path.join(buildPath, 'arale.shrikToFitHeight.png');
    var buffer = anthart.clipToFitRatio({
      src: fs.readFileSync(arale),
      width: 63,
      height: 125,
      exif: {
        image: {
          Orientation: 3
        }
      }
    });
    fs.writeFile(fitHeight, buffer, fn(test));
  },

  clipToFitWidth: function(test) {
    var fitWidth = path.join(buildPath, 'arale.shrikToFitWidth.png');
    var buffer = anthart.clipToFitRatio({
      src: fs.readFileSync(baby),
      width: 1440,
      height: 1200,
      exif: {
        image: {
          Orientation: 8
        }
      }
    });
    fs.writeFile(fitWidth, buffer, fn(test));
  },

  home: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var home = fs.createWriteStream(path.join(buildPath, 'home.jpg'));
    var docks = require('./data/dockicons').icons;
    var options = require('./data/dockicons').options;
    var stream = anthart.home(wallpaper, docks, options);
    stream.pipe(home);
    home.on('close', fn(test));
  },

  drawer: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var drawer = fs.createWriteStream(path.join(buildPath, 'drawer.jpg'));
    var apps = require('./data/apps').icons;
    var options = require('./data/apps').options;
    var stream = anthart.drawer(wallpaper, apps, options);
    stream.pipe(drawer);
    drawer.on('close', fn(test));
  },

  shortcuts: function(test) {
    var wallpaper = path.join(__dirname, 'data/wallpaper.png');
    var widgets = fs.createWriteStream(path.join(buildPath, 'widgets.png'));
    var dock = require('./data/dockicons').icons;
    var shortcuts = require('./data/shortcuts').icons;
    var options = require('./data/shortcuts').options;
    var stream = anthart.shortcuts(wallpaper, shortcuts, dock, options);
    stream.pipe(widgets);
    widgets.on('close', fn(test));
  }
};

exports = module.exports = tests;
