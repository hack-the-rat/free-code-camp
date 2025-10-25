# Build a Video Display Using iframe

In this workshop, you'll learn how to work with the `iframe` element by building a video display.

## Step 1

In this workshop, you will use the `iframe` element to display a video. The basic HTML boilerplate has been prepared for you.

Begin by creating an `h1` element with the text `iframe Video Display`.

## Step 2

Now, create an `iframe` element. Don't put anything in it yet.

## Step 3

In the first lesson on the `iframe` element, you learned it's a replaced element just like `img`. That means it can also take the `width` and `height` properties to determine how tall and wide it should be.

Give your `iframe` element a `width` of `560` and a `height` of `315`.

## Step 4

The `iframe` element also takes an `src` attribute with a value that indicates the URL or the path of the resource to display.

Add an `src` attribute of `https://www.youtube.com/embed/I0_951_MPE0` to your `iframe` element.

At this point, you should see the video displaying on the page, but there are some more attributes you need to add.

## Step 5

One of the attributes is `allow`. It's like a permission list that tells the browser what features the `iframe` is allowed to use.

Here's an `iframe` element with the `allow` attribute:

**Example Code**
```<iframe allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture web-share"></iframe>```

Add the `allow` attribute with the value `accelerometer`, `autoplay`, and `clipboard-write`.

`accelerometer` lets the `iframe` use motion sensors so it can detect things like device tilting and rotation. `autoplay` lets the video start playing automatically, and `clipboard-write` lets the iframe write data to the user’s clipboard.
