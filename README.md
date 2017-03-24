## Introduction

Together, we're going to build a very simple app that exposes us to the most basic 
components of a React Native developer's toolkit. We'll work through some of the steps 
together and leave some for you to try on your own. 

Every step has an accompanying branch in this repo that contains all of the code for the tasks up to (and including)
that step. If necessary, you can check out a step's branch to see a potential solution
or to skip to a later step.

###Setup

Before beginning, please make sure you have your environment set up for React Native development.
If you have any trouble, just ask for help.

The complete instructions can be found on React Native’s website: 
https://facebook.github.io/react-native/docs/getting-started.html#content. 
Notice that there are separate tabs for iOS and Android. You should set up both of them.
The basic idea is as follows: 

####Install

1. Xcode (This takes a long time to download…)
1. Android Studio (This also takes quite a while…)
1. `brew install node`
1. `brew install watchman`
1. `npm install -g react-native-cli`

####Test

1. `react-native init TestProject`
1. `cd TestProject`
1. `react-native run-ios`
1. `react-native run-android`

All works? Great! Now go ahead and clone this repo and navigate to the created directory.

## Step 0 - First Steps

1. Run the project in both Android and iOS to verify it works
1. Make a trivial change to the text in each of the views and see it update
1. Notice that these two apps look almost the same? Let's share the code by
extracting it to its own component call `HomeScreen`. We'll put it in a directory called `src`.
1. Get comfortable with the parts of the project - make sure to understand what all the major parts do
1. Get comfortable with basic debugging tools - you're going to need them.

## Step 1 - Include an Image

1. Replace the default text in the app with an image. The image width should be stretched to screen width.

## Step 2 - Add multiple to a ScrollView

1. Add multiple images in home screen
1. Put them in ScrollView for a nice scrolling effect

## Step 3 - ListView

1. Replace `ScrollView` with `ListView`.

## Step 4 - Navigation

1. Add simple navigation to the app. When tapping an image, push an emty screen

## Step 5 - Text input

1. Add two text inputs on top for the user to type text in  the form screen

## Step 6 - Build memes!

1. Pass selected image data to FormScreen
2. Overimpose typed text on image

## Step 7 - Platform specific and native code

1. Add a button 'take photo' to home screen
2. Integrate your app with [react-native-camera(https://github.com/lwansbrough/react-native-camera) and push camera screen on button press. (Don't forget to give the app camera permissions first)
