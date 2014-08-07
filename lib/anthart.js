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

var width = conf.imageSize.width;
var height = conf.imageSize.height;

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

var drawImage = function(ctx, buffer, width, height) {
  var img = new Canvas.Image();
  img.src = buffer;
  ctx.drawImage(img, 0, 0, width, height);
};

var compositeIcon = function(stuff, smartPallet) {
  var size = conf.iconSize;
  if (smartPallet) {
    var canvas = new Canvas(size, size);
    var ctx = canvas.getContext('2d');
    drawImage(ctx, stuff.icon, size, size);

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

    drawImage(ctx, stuff.base, size, size);
    stuff.base = canvas.toBuffer();
  }
  return composite(stuff, size);
};

var drawDockBarIcon = function(ctx, layout, image, index) {
  var img = new Canvas.Image();
  img.src = image.src;
  var icon = [img].concat(layout[index]);
  ctx.drawImage.apply(ctx, icon);

  var w = icon[3];
  var h = icon[4];
  var c = new Canvas(w, h);
  var context = c.getContext('2d');
  context.scale(1, -1);
  context.translate(0, -h);
  context.drawImage(img, 0, 0, w, h);
  context.globalCompositeOperation = 'destination-out';
  var gradient = context.createLinearGradient(0, 0, 0, 70);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 1.0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, w, h);

  icon[0] = c;
  icon[2] += w;
  ctx.drawImage.apply(ctx, icon);
};

var drawCommonWidget = function(ctx, type, name) {
  var img = new Canvas.Image();
  img.src = conf[name];
  var widget = [img].concat(type[name]);
  ctx.drawImage.apply(ctx, widget);
};

var drawIconWithText = function(ctx, layout, options, image, index) {
  var img = new Canvas.Image();
  img.src = image.src;
  var icon = [img].concat(layout[index]);
  var text = image.capital;
  if (text.length > 7) {
    text = image.capital.substr(0, 7) + '...';
  }
  var x = layout[index][0] + layout[index][2] / 2;
  var y = layout[index][1] + layout[index][2] + 5;

  ctx.fillStyle = options.color;
  ctx.font = '14px Arial, sans-serif';
  ctx.textBaseline = 'top';
  ctx.textAlign = 'center';
  ctx.drawImage.apply(ctx, icon);
  ctx.fillText(text, x, y);
};

var updateItems = function(items, options) {

  var update = function(icon) {
    if (options.maskAll || icon.type === 'custom_icon') {
      icon.src = compositeIcon({
        base: options.masking.base,
        shape: options.masking.shape,
        icon: icon.src,
        cover: options.masking.cover
      }, options.smartMask);
    }
  };

  items.forEach(update);
  return items;
};

var anthart = {

  scale: function(image) {
    var w = image.width;
    var h = image.height;
    var canvas = new Canvas(w, h);
    var ctx = canvas.getContext('2d');
    drawImage(ctx, image.src, w, h);
    return canvas.toBuffer();
  },

  clipToFitRatio: function(image) {
    var img = new Canvas.Image();
    img.src = image.src;
    var origin = img.width / img.height;
    var expect = image.width / image.height;
    var w = img.width;
    var h = img.height;
    var src = [];
    if (expect < origin) {
      w = h * expect;
      src = [0.5 * (img.width - w), 0, w, h];
    } else {
      h = w / expect;
      src = [0, 0.5 * (img.height - h), w, h];
    }
    var args = [img].concat(src).concat([0, 0, w, h]);
    var canvas = new Canvas(w, h);
    var ctx = canvas.getContext('2d');
    ctx.drawImage.apply(ctx, args);
    return canvas.toBuffer();
  },

  background: function(wallpaper, width, height) {
    var buffer = anthart.clipToFitRatio({
      src: wallpaper,
      width: width,
      height: height
    });

    buffer = anthart.scale({
      src: buffer,
      width: width,
      height: height
    });
    return buffer;
  },

  home: function(wallpaper, items, options) {
    var canvas = new Canvas(width, height);
    var ctx = canvas.getContext('2d');
    var buffer = anthart.background(wallpaper, width, height);
    drawImage(ctx, buffer, width, height);

    var drawWidget = drawCommonWidget.bind(this, ctx, conf.layout.desktop);
    conf.commonWidget.desktop.forEach(drawWidget);

    var drawDock = drawDockBarIcon.bind(this, ctx, conf.layout.desktop.dockbar);
    var icons = updateItems(items, options);
    icons.forEach(drawDock);
    return canvas.toBuffer();
  },

  drawer: function(wallpaper, items, options) {
    var canvas = new Canvas(width, height);
    var ctx = canvas.getContext('2d');
    var buffer = anthart.background(wallpaper, width, height);
    drawImage(ctx, buffer, width, height);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, width, height);

    var drawWidget = drawCommonWidget.bind(this, ctx, conf.layout.drawer);
    conf.commonWidget.drawer.forEach(drawWidget);

    var layout = conf.layout.drawer.apps;
    var drawIcon = drawIconWithText.bind(this, ctx, layout, options);

    var icons = updateItems(items, options);
    icons.forEach(drawIcon);
    return canvas.toBuffer();
  },

  shortcuts: function(wallpaper, shortcuts, docks, options) {
    var canvas = new Canvas(width, height);
    var ctx = canvas.getContext('2d');
    var buffer = anthart.background(wallpaper, width, height);
    drawImage(ctx, buffer, width, height);

    var drawWidget = drawCommonWidget.bind(this, ctx, conf.layout.shortcuts);
    conf.commonWidget.shortcuts.forEach(drawWidget);

    var layout = conf.layout.shortcuts.apps;
    var drawShortcuts = drawIconWithText.bind(this, ctx, layout, options);
    var shortcutsIcons = updateItems(shortcuts, options);
    shortcutsIcons.forEach(drawShortcuts);

    var dock = conf.layout.shortcuts.dockbar;
    var drawDock = drawDockBarIcon.bind(this, ctx, dock);
    var dockIcons = updateItems(docks, options);
    dockIcons.forEach(drawDock);

    return canvas.toBuffer();
  }

};

exports = module.exports = anthart;
