# Working with the iframe Element

In these lessons, you will learn how to work with the `iframe` element which is used to embed an external site on your web page.

## What Are Replaced Elements, and What Are Some Examples?

A replaced element is an element whose content is determined by an external resource rather than by CSS itself. CSS, or cascading stylesheets, is used to add styles to a web page. Common examples of replaced elements include the image, iframe, and video elements.

*With replaced elements, you can control the position, or layout of an element.* But your CSS cannot directly modify the content of that element. This might be easier to explain with some examples. Consider the image element, which embeds an image on your web page:

```<img src="example-img-url" alt="Descriptive text goes here">```

*The element itself is replaced with the external object*: the image. Your CSS can control things like the positioning of the image, or apply a filter to it, but you cannot actually modify the image itself. *A more robust example might be the `iframe` element*, which embeds an external site on your web page.

Here is an [example](https://codesandbox.io/p/sandbox/hkj3nf) of using the `iframe` element for a popular YouTube video on the freeCodeCamp channel. If you want to see different videos in the preview window, change the value of the `src` attribute to a video of your choosing.

**NOTE:** Don't worry about the extra attributes mentioned in the interactive example like `referrerpolicy` and `allowfullscreen`. You will learn more about working with `iframe` elements in a future workshop.

Other common examples of using the `iframe` element would be to embed maps onto the page. Here is an example of an embedded map.

Try playing around with the map itself in [this example](https://codesandbox.io/p/sandbox/6r98ls) by zooming in/out.

The element itself is replaced with the external object: the site. Your CSS can change the positioning of the embedded site, but you cannot modify the site's contents. To dive a bit further, if the embedded site has an `h1` element, your CSS would not be able to style that `h1` element. You cannot change the size, font color, and so on.

There are some other replaced elements, such as `video`, and `embed`. And some elements behave as replaced elements under specific circumstances. Here's an example of an `input` element with the `type` attribute set to `image`:

```<input type="image" alt="Descriptive text goes here" src="example-img-url">```

This type of `input` is considered to be a replaced element, but other `input` types like `text`, or `email` are not replaced elements.

## How Do You Embed Videos onto Your Page Using the iframe Element?

In a prior lesson, you were first introduced to the `iframe` element. In this lesson, you will learn more about how to work with the `iframe` element. This element stands for *inline frame*. It's an inline element used to embed other HTML content directly within the HTML page. That HTML content could be a video, map, another HTML element, or even other web pages.

Here's an [example](https://codesandbox.io/p/sandbox/wrktmg) of embedding a popular freeCodeCamp course from YouTube. To see a different video, change the `src` value to a video of your choosing.

*The `src` attribute specifies the URL of the page you want to embed.* The `width` attribute specifies the width of the `iframe`. The `height` attribute specifies the height of the `iframe`. The `allowfullscreen` attribute allows the user to display the `iframe` in full screen mode. It's also a good practice to specify a `title` attribute for the `iframe`, as it's important for accessibility.

Note that the video can come from anywhere. It doesn't have to come from video services like YouTube and Vimeo.

Don't forget you can also embed a map, another web page, or direct HTML within the `iframe` element. Here is an example of an embedded map.

Try interacting with the map in [this example](https://codesandbox.io/p/sandbox/zff8cc) by zooming in and out.

*If you want to embed direct HTML within the `iframe` element you have to use the `srcdoc` attribute* instead of `src`.
