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
  frame: fs.readFileSync(path.join(__dirname, 'images/frame.png')),
  indicator: fs.readFileSync(path.join(__dirname, 'images/indicator.png')),
  titleBar: fs.readFileSync(path.join(__dirname, 'images/titlebar.png')),
  weather: fs.readFileSync(path.join(__dirname, 'images/weather.png')),
  layout: {
    desktop: {
      titleBar: [0, 0, 360, 20],
      weather: [],
      indicator: [],
      dockbar:[]
    },
    drawer: {
      titleBar: [0, 0, 360, 20],
      apps: [],
      indicator: []
    },
    shortcuts: {
      titleBar: [0, 0, 360, 20],
      shorcuts: [],
      dockbar: []
    }
  }
};

exports = module.exports = configure;
