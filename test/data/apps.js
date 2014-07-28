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
      text: 'Browser'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calculator2_com_android_calculator2_calculator.png')),
      text: 'Calculator'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_calendar_com_android_calendar_allinoneactivity.png')),
      text: 'Calendar'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_camera_com_android_camera_camera.png')),
      text: 'Camera'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_deskclock_com_android_deskclock_deskclock.png')),
      text: 'Clock'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_peopleactivity.png')),
      text: 'Contacts'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_providers_downloads_ui_com_android_providers_downloads_ui_downloadlist.png')),
      text: 'Downloads'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_email_com_android_email_activity_welcome.png')),
      text: 'Email'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_gallery3d_com_android_gallery3d_app_gallery.png')),
      text: 'Gallery'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_mms_com_android_mms_ui_conversationlist.png')),
      text: 'Messaging'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_musicbrowseractivity.png')),
      text: 'Music'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_contacts_com_android_contacts_activities_dialtactsactivity.png')),
      text: 'Phone'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_settings_com_android_settings_settings.png')),
      text: 'Settings'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_android_music_com_android_music_videobrowseractivity.png')),
      text: 'Video'
    },
    {
      src: fs.readFileSync(path.join(__dirname, 'icons/com_cyou_cma_clauncher_com_cyou_cma_beauty_center_beautycenterentrance.png')),
      text: 'Beauty Center'
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
