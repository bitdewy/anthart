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
      text: 'Beauty Center'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_gallery3d_com_android_gallery3d_app_gallery.png')),
      text: 'Gallery'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_settings_com_android_settings_settings.png')),
      text: 'Settings'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/ic_widget_diy_theme.png')),
      text: 'DIY Theme'
    }
  ],
  options: {
    color: '#999999'
  }
};

exports = module.exports = shortcuts;
