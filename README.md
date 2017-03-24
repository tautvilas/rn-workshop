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

1. Initialize an empty React Native project called `MemeBuilder`
1. Run the project in both Android and iOS to verify it works
1. Make a trivial change to the text in each of the views and see it update
1. Notice that these two apps look almost the same? Let's share the code by
extracting it to its own component call `HomeScreen`. We'll put it in a directory called `src`.
1. Get comfortable with the parts of the project - make sure to understand what all the major parts do
1. Get comfortable with basic debugging tools - you're going to need them.

## Step 1 - Include an Image

1. Replace the default text in the app with an image. The image
should be centered both vertically and horizontally on the screen.
1. While you're at it, simplify `HomeScreen` to be a stateless functional component.

## Step 2 - Code Reuse and Platform Specific Code

1. Add a message to the bottom of `HomeScreen` informing the user what platform they're using. Use the `Platform` module.
1. Change the background color of the app - use different colors for Android and iOS. Do this by importing a separate module with theming in it that can be configured differently for Android and iOS.
1. Add a simple input box to `HomeScreen`. Don't worry about connecting it to anything,
we'll do that later. Create separate components for iOS and Android and style them differently.

## Step 3 - ListView

1. There should be a `ListView` on the screen displaying a list of images.
1. When tapping an image, print the image data to the console. (Use either `TouchableOpacity` or `TouchableHighlight`. Try them both to see what you like better.)

## Step 4 - Navigation

1. Add simple navigation to the app. When tapping an image, push a screen
with just that image centered in middle of the screen.

## Step 5 - Build Memes!!

1. Add two text inputs on top for the user to type text
1. Superimpose the text on the images - color the text white on a background of 50% opaque black

## Step 6 - Refactor/Styling/UX

1. Organize your code into folders and clean it up if you think it could be better organized. Use stateless functional components where possible.
1. Use flexbox to take up the full width of `HomeScreen` by wrapping the images into a grid instead of a simple list
https://github.com/yelled3/react-native-grid-example
1. Add a back button to the MemeBuilder screen
