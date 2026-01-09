# Build an HTML Video Player

## Step 1

In this workshop, you will build an HTML video player. The HTML boilerplate has been provided for you.

Create an `h1` element and give it the text `Working with the HTML Video Element`.

## Step 2

Next, create a `video` element below the `h1`. Over the next few steps, you will add the necessary attributes to make the video player functional.

## Step 3

In a previous lesson, you learned about different attributes available to the `video` element. The `width` attribute determines the width of the video in pixels.

Add the `width` attribute to the `video` element with a value of `640`.

## Step 4

The `loop` attribute will restart the video once playback is completed. Think of an internet meme that repeats playback. Omitting the `loop` attribute will make the video playback once.

The `loop` attribute is a boolean attribute and does not need a value.

Add the `loop` attribute to the `video` element.

## Step 5

The `controls` attribute provides playback controls including playback, rewind, and volume control for the `video` element.

The `controls` attribute is a boolean attribute and does not need a value.

Add the `controls` attribute to the `video` element.

Now you should see the video element displayed on the page.

## Step 6

The `muted` attribute will silence audio on initial playback. If you have `controls` enabled, the user will be able to unmute audio. Omitting the `muted` attribute will play audio on initial playback.

The `muted` attribute is a boolean attribute and does not need a value.

Add the `muted` attribute to the `video` element.

## Step 7

The `poster` attribute is a thumbnail image of the video. Think of the videos you watch on YouTube. It's displayed while the video is downloading. If the attribute is omitted, the first video frame is shown during the download phase.

Now, add the `poster` attribute with the value `https://cdn.freecodecamp.org/curriculum/labs/past-event2.jpg` to your `video` element.
