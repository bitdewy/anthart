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
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_browser_com_android_browser_browseractivity.png')),
      text: 'Browser',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calculator2_com_android_calculator2_calculator.png')),
      text: 'Calculator',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calendar_com_android_calendar_allinoneactivity.png')),
      text: 'Calendar',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_camera_com_android_camera_camera.png')),
      text: 'Camera',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_deskclock_com_android_deskclock_deskclock.png')),
      text: 'Clock',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_peopleactivity.png')),
      text: 'Contacts',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_providers_downloads_ui_com_android_providers_downloads_ui_downloadlist.png')),
      text: 'Downloads',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_email_com_android_email_activity_welcome.png')),
      text: 'Email',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_gallery3d_com_android_gallery3d_app_gallery.png')),
      text: 'Gallery',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_mms_com_android_mms_ui_conversationlist.png')),
      text: 'Messaging',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_musicbrowseractivity.png')),
      text: 'Music',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_dialtactsactivity.png')),
      text: 'Phone',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_settings_com_android_settings_settings.png')),
      text: 'Settings',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_videobrowseractivity.png')),
      text: 'Video',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_cyou_cma_clauncher_com_cyou_cma_beauty_center_beautycenterentrance.png')),
      text: 'Beauty Center',
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
