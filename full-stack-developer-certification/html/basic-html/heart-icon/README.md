# Build a Heart Icon

In this workshop, you will practice working with SVGs by building a heart icon

## Step 1

In a previous lesson, you learned about `svg` elements and how they're often used as icons in projects. In real-world codebases, you would typically rely on icon libraries, so you don't need to create `svg` elements from scratch. However, in this workshop, you'll build a heart icon to learn about the core attributes used inside an `svg` element.

Start by creating an `svg` element on the page.

## Step 2

The next step is to set the `width` and `height` attributes for the `svg` element. As you are creating an icon, both values should be set small.

Set both values to `24`.

## Step 3

You are getting closer. The next thing to do is to set the `viewBox` attribute of the `svg` element. This will control how much of the image is visible. The first two numbers set the center of the image.

The following two numbers set the size of the image we can see: width followed by height.

Since here the entirety of the icon should be visible, you should set the `viewBox` attribute to `0 0 24 24`.
