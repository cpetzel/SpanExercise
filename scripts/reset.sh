#!/bin/bash

set -e
set -x

echo "Cleaning up node modules";
rm -rf node_modules;
yarn

echo "Cleaning all temp directories";
rm -rf $TMPDIR/react-native-packager-cache-*;
rm -rf $TMPDIR/metro-*;
rm -rf $TMPDIR/react-*;
rm -rf $TMPDIR/haste-*;
watchman watch-del-all;

echo "Cleaning up iOS folders"
cd ios;
rm -rf Pods;
rm -rf Podfile.lock;
rm -rf build;
rm -rf ~/Library/Developer/Xcode/DerrivedData

pod install;
cd ..;
echo "Cleanup android folder"
cd android;
rm -rf build;

echo "PLEASE DELETE THE APP AND RESTART SIMULATOR after cache is reset";
cd ..;
yarn start -- --reset-cache;