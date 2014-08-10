/*
 * anthart
 * https://github.com/bitdewy/anthart
 *
 * Copyright (c) 2014 bitdewy
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');

var configure = {
  iconSize: 56,
  imageSize: {
    width: 360,
    height: 640
  },
  wallpaperSize: {
    width: 1440,
    heigth: 1200
  },
  frame: fs.readFileSync(path.join(__dirname, 'images/frame.png')),
  indicator: fs.readFileSync(path.join(__dirname, 'images/indicator.png')),
  mask: fs.readFileSync(path.join(__dirname, 'images/mask.png')),
  titleBar: fs.readFileSync(path.join(__dirname, 'images/titlebar.png')),
  weather: fs.readFileSync(path.join(__dirname, 'images/weather.png')),
  commonWidget: {
    desktop: ['titleBar', 'weather', 'indicator'],
    drawer: ['titleBar', 'indicator'],
    shortcuts: ['titleBar', 'indicator']
  },
  layout: {
    desktop: {
      titleBar: [0, 0, 360, 20],
      weather: [20, 120, 332, 80],
      indicator: [156, 530, 48, 13],
      dockbar: [
        [14, 555, 56, 56],
        [83, 555, 56, 56],
        [152, 555, 56, 56],
        [221, 555, 56, 56],
        [290, 555, 56, 56]
      ],
    },
    drawer: {
      titleBar: [0, 0, 360, 20],
      apps: [
        [24, 55, 56, 56], [109, 55, 56, 56], [194, 55, 56, 56], [279, 55, 56, 56],
        [24, 165, 56, 56], [109, 165, 56, 56], [194, 165, 56, 56], [279, 165, 56, 56],
        [24, 275, 56, 56], [109, 275, 56, 56], [194, 275, 56, 56], [279, 275, 56, 56],
        [24, 385, 56, 56], [109, 385, 56, 56], [194, 385, 56, 56], [279, 385, 56, 56],
        [24, 495, 56, 56], [109, 495, 56, 56], [194, 495, 56, 56], [279, 495, 56, 56]
      ],
      indicator: [156, 590, 48, 13]
    },
    shortcuts: {
      titleBar: [0, 0, 360, 20],
      apps: [
        [24, 438, 56, 56],
        [109, 438, 56, 56],
        [194, 438, 56, 56],
        [279, 438, 56, 56]
      ],
      indicator: [156, 530, 48, 13],
      dockbar: [
        [14, 555, 56, 56],
        [83, 555, 56, 56],
        [152, 555, 56, 56],
        [221, 555, 56, 56],
        [290, 555, 56, 56]
      ]
    }
  }
};

exports = module.exports = configure;
