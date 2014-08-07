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

var shortcuts = {
  icons: [
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_cyou_cma_clauncher_com_cyou_cma_beauty_center_beautycenterentrance.png')),
      text: 'Beauty Center',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_gallery3d_com_android_gallery3d_app_gallery.png')),
      text: 'Gallery',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_settings_com_android_settings_settings.png')),
      text: 'Settings',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/ic_widget_diy_theme.png')),
      text: 'DIY Theme',
      type: 'app_icon'
    }
  ],
  options: {
    color: '#999999',
    maskAll: true,
    smartMask: true,
    masking: {
      base: fs.readFileSync(path.join(__dirname, 'base.png')),
      shape: fs.readFileSync(path.join(__dirname, 'shape.png')),
      cover: fs.readFileSync(path.join(__dirname, 'cover.png'))
    }
  }
};

exports = module.exports = shortcuts;
