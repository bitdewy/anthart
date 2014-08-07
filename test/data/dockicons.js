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

var dock = {
  icons: [
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_dialtactsactivity.png')),
      capital: 'Phone',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_mms_com_android_mms_ui_conversationlist.png')),
      capital: 'Messages',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/ic_allapps.png')),
      capital: 'Apps',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_camera_com_android_camera_camera.png')),
      capital: 'Camera',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_browser_com_android_browser_browseractivity.png')),
      capital: 'Browser',
      type: 'app_icon'
    },
  ],
  options: {
    color: '#999999',
    maskAll: false,
    smartMask: true,
    masking: {
      base: fs.readFileSync(path.join(__dirname, 'base.png')),
      shape: fs.readFileSync(path.join(__dirname, 'shape.png')),
      cover: fs.readFileSync(path.join(__dirname, 'cover.png'))
    }
  }
};

exports = module.exports = dock;
