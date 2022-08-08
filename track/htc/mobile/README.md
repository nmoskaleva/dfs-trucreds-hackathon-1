# Hack the Code

Follow these instructions to develop a customized mobile application using the **[React Native White Label Mobile App](https://gitlab.com/evernym/mobile/react-native-white-label-app)** by [Avast](https://avast.com) for the ```Hack the Code``` track of the hackathon.  This white labelled app is essentially the **Avast Connect.me** mobile application that you can customize to include our Discover branding.

> Note:  You can use either the **Avast Connect.me** mobile application or the mobile application built from this directory for the ```Hack the Code``` track.

The mobile app source code is available from Avast at https://gitlab.com/evernym/mobile/react-native-white-label-app.  It is written using React Native, and can be built for iOS and Android.

The Avast repo [Readme](https://gitlab.com/evernym/mobile/react-native-white-label-app/-/blob/main/README.md) outlines the instructions to edit and build the mobile app for iOS and Android.  To save time and simplify development, we've performed these instructions for you and have put the resulting code under the `src` directory.  You can start with either the [Avast repo](https://gitlab.com/evernym/mobile/react-native-white-label-app) or code in `src`.

## Tutorial

The following is a turorial which leads you through building and running the mobile app using the source code in the `src` directory.

## Android

To build the React Native White Label Mobile App, you will need the following prerequisites:
- Android SDK with API 31
- yarn (tested with 1.22.19)
- Node.js 12.22+ (tested with 16.15.1)
- Android device

Steps:
1. Install prereqs
	```
	$ cd src
	$ yarn
	```
2. Attach Android device
3. Start Metro server for React Native
    ```
    $ npm start
    ```
4. Build and run application
	```
	$ npm run android
	```

## iOS

To build the React Native White Label Mobile App, you will need the following prerequisites:
- Mac system (tested with OSX 12.3.1)
- Xcode 13+ (tested with 13.4.1)
- yarn (tested with 1.22.19)
- CocoaPod 1.10.1+ (tested with 1.11.3)
- Node.js 12.22+ (tested with 16.15.1)
- iOS device (tested with iPhone 11 iOS 15.5)

Steps:

1. Build 
	```
	$ cd src
	$ yarn
	$ cd src/ios
	$ pod install
	```
2. Open ```MsdkProject.xcworkspace``` in Xcode.
3. Attach iOS device
4. Build and run project



