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
      capital: 'Browser',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calculator2_com_android_calculator2_calculator.png')),
      capital: 'Calculator',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calendar_com_android_calendar_allinoneactivity.png')),
      capital: 'Calendar',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_camera_com_android_camera_camera.png')),
      capital: 'Camera',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_deskclock_com_android_deskclock_deskclock.png')),
      capital: 'Clock',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_peopleactivity.png')),
      capital: 'Contacts',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_providers_downloads_ui_com_android_providers_downloads_ui_downloadlist.png')),
      capital: 'Downloads',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_email_com_android_email_activity_welcome.png')),
      capital: 'Email',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_gallery3d_com_android_gallery3d_app_gallery.png')),
      capital: 'Gallery',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_mms_com_android_mms_ui_conversationlist.png')),
      capital: 'Messaging',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_musicbrowseractivity.png')),
      capital: 'Music',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_dialtactsactivity.png')),
      capital: 'Phone',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_settings_com_android_settings_settings.png')),
      capital: 'Settings',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_videobrowseractivity.png')),
      capital: 'Video',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_cyou_cma_clauncher_com_cyou_cma_beauty_center_beautycenterentrance.png')),
      capital: 'Beauty Center',
      type: 'app_icon'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/ic_widget_diy_theme.png')),
      capital: 'DIY Theme',
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
