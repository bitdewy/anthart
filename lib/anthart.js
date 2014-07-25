/*
 * anthart
 * https://github.com/bitdewy/anthart
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var Canvas = require('canvas');
var conf = require('../conf');

var anthart = {

  awesome: function() {
    return 'awesome';
  },

  scale: function(image) {
    var w = image.width;
    var h = image.height;
    var canvas = new Canvas(w, h);
    var img = new Canvas.Image();
    img.src = image.src;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, w, h);
    return canvas.toBuffer();
  },

  clipToFitRatio: function(image) {
    var img = new Canvas.Image();
    img.src = image.src;
    var origin = img.width / img.height;
    var expect = image.width / image.height;
    var w = img.width * expect;
    var h = img.width / expect;
    var src = [];
    if (expect < origin) {
      h = img.height;
      src = [0.5 * (img.width - w), 0, w, h];
    } else {
      w = img.width;
      src = [0, 0.5 * (img.height - h), w, h];
    }
    var args = [img].concat(src).concat([0, 0, w, h]);
    var canvas = new Canvas(w, h);
    var ctx = canvas.getContext('2d');
    ctx.drawImage.apply(ctx, args);
    return canvas.toBuffer();
  },

  compositeIcon: function(stuff) {
    var prepared = {};
    var size = conf.iconSize;

    var scale = function(key) {
      var image = {
        src: stuff[key],
        width: size,
        height: size
      };
      prepared[key] = anthart.scale(image);
    };

    var keys = Object.keys(stuff);
    keys.forEach(scale);
    
    var canvas = new Canvas(size, size);
    var ctx = canvas.getContext('2d');
    var img = new Canvas.Image();

    img.src = prepared.shape;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    
    ctx.globalCompositeOperation = 'source-in';

    img.src = prepared.icon;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    ctx.globalCompositeOperation = 'destination-over';

    img.src = prepared.base;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    

    ctx.globalCompositeOperation = 'source-atop';
    img.src = prepared.cover;
    ctx.drawImage(img, 0, 0, img.width, img.height);

    return canvas.toBuffer();
  }

};

exports = module.exports = anthart;
