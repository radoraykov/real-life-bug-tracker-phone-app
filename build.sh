#!/bin/sh
BASEDIR=$(cd "$(dirname "$0")"; pwd)

cd $BASEDIR
#sudo npm install -g ripple-emulator
cordova plugin add org.apache.cordova.geolocation
cordova plugin add org.apache.cordova.camera
cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.media-capture
cordova plugin add org.apache.cordova.network-information
cordova plugin add org.apache.cordova.file