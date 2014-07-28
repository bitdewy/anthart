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

var icons = [
  {
    src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_dialtactsactivity.png')),
    text: 'Phone'
  },
  {
    src: fs.readFileSync(path.join(__dirname, 'icons/com_android_mms_com_android_mms_ui_conversationlist.png')),
    text: 'Messages'
  },
  {
    src: fs.readFileSync(path.join(__dirname, 'icons/ic_allapps.png')),
    text: 'Apps'
  },
  {
    src: fs.readFileSync(path.join(__dirname, 'icons/com_android_camera_com_android_camera_camera.png')),
    text: 'Camera'
  },
  {
    src: fs.readFileSync(path.join(__dirname, 'icons/com_android_browser_com_android_browser_browseractivity.png')),
    text: 'Browser'
  },
];

exports = module.exports = icons;
