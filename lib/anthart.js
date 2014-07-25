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

var composite = function(stuff, size) {

  var canvas = new Canvas(size, size);
  var ctx = canvas.getContext('2d');
  var img = new Canvas.Image();

  img.src = stuff.shape;
  ctx.drawImage(img, 0, 0, size, size);

  ctx.globalCompositeOperation = 'source-in';

  img.src = stuff.icon;
  ctx.drawImage(img, 0, 0, size, size);

  ctx.globalCompositeOperation = 'destination-over';

  img.src = stuff.base;
  ctx.drawImage(img, 0, 0, size, size);
  
  ctx.globalCompositeOperation = 'source-atop';

  img.src = stuff.cover;
  ctx.drawImage(img, 0, 0, size, size);

  return canvas.toBuffer();
};

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

  compositeIcon: function(stuff, smartPallet, len) {
    var size = len || conf.iconSize;
    if (smartPallet) {
      var img = new Canvas.Image();
      img.src = stuff.icon;
      var canvas = new Canvas(size, size);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, size, size);

      var black = [0, 0, 0, 255];
      var p0 = ctx.getImageData(size / 5, size / 5, 1, 1).data;
      var p1 = ctx.getImageData(size / 2, size / 2, 1, 1).data;

      var average = function(dot, index) {
        return Math.floor((dot + p0[index] + p1[index]) / 3);
      };

      var color = black.map(average);
      ctx.fillStyle = 'rgba(' + color.join(',') + ')';
      ctx.fillRect(0, 0, size, size);
      ctx.globalCompositeOperation = 'destination-in';
      img.src = stuff.base;
      ctx.drawImage(img, 0, 0, size, size);
      stuff.base = canvas.toBuffer();
    }
    return composite(stuff, size);
  }

};

exports = module.exports = anthart;
