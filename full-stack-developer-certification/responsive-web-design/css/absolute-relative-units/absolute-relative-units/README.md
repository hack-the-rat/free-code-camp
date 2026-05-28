# Working with Relative and Absolute Units

## What Are Absolute Units in CSS, and When Should You Use Them?

As you design your pages, you will work with different properties like widths, heights, padding, margins, and more. When you define these properties, you will need to specify the length units of measurement you want to use.

There are two types of units you can use to define these properties: *relative units and absolute units*. In this lesson, we will just focus on absolute units.

Absolute length units are of fixed length and are not relative to anything else. Relative means that the length is relative to something else, like the size of the screen or the size of the parent element. We will talk more about relative units in the next few lessons.

The most common absolute unit is the pixel (`px`). *Pixels are a fixed-size unit of measurement in CSS, providing precise control over dimensions*. This means that 1px is always equal to 1/96th of an inch.

It is important to note that while 1px is standardized as 1/96th of an inch for the purposes of CSS layout, the actual physical size of a pixel may differ depending on the display.

Let's take a look at an example of using pixels to set the width and height for a box:

```html
<link rel="stylesheet" href="styles.css" />
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

In this example, we have a red box with a width and height set to `100px`. The dimensions for this box will stay the same regardless of changes pertaining to the screen size.

So, if you are on a device with a small screen, the box will still be `100px` wide. If you are on a large desktop screen, the box will still be `100px` wide.

So, when should you use absolute units like pixels? Well, it depends on the situation. But generally you will use pixels where you need precise control over element dimensions, spacing, and layout. Sometimes you might use pixels for margins, padding, and borders.

Here is an example of using pixels to set the margin for two boxes:

```html
<link rel="stylesheet" href="styles.css" />
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 10px;
}
```

Remember that margin is the space outside of the box. So, in this example, the box will have a margin of `10px` on all sides.

Other types of absolute units include the following:

* The `in` (inches) unit, which is equal to 96px
* The `cm` (centimeters) unit, which is equal to 25.2/64 of an inch
* The `mm` (millimeters) unit, which is equal to 1/10th of a centimeter
* The `q` (quarter-millimeters) unit, which is equal to 1/40th of a centimeter
* The `pc` (picas) unit, which is equal to 1/6th of an inch
* The `pt` (points) unit, which is equal to 1/72th of an inch

Most of these units will be used for print and not for screens.

While the most common unit you will use is pixels, it is important to know that the other absolute units exist.

## What Are Percentages in CSS, and When Should You Use Them?

Percentages in CSS are relative units that allow you to define sizes, dimensions, and other properties as a proportion of their parent element. When you use a percentage value, you're essentially saying, "Make this X% of its container."

For example, if you set `width: 50%` on an element, it will occupy half the width of its parent container. This makes percentages incredibly useful for creating responsive designs that adapt to different screen sizes.

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <div class="box"></div>
</div>
```

```css
.container {
  width: 400px;
  height: 200px;
  background-color: lightgray;
}

.box {
  width: 50%;
  height: 100%;
  background-color: red;
}
```

Percentages are ideal for creating fluid layouts that adjust to various screen sizes. For instance, setting a container to `width: 80%` ensures it takes up 80% of its parent's width, regardless of the device.

```html
<link rel="stylesheet" href="styles.css" />
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 100%;
  height: 300px;
  background-color: lightblue;
}

.child {
  width: 80%;
  height: 100%;
  background-color: red;
}
```

Using percentages for flexible images is another common practice. By applying `max-width: 100%` to images, you allow them to scale down on smaller screens while maintaining their aspect ratio.

```html
<link rel="stylesheet" href="styles.css" />
<img src="https://placehold.co/150x150" alt="Example Product Image" />
```

```css
img {
  max-width: 100%;
  height: auto;
}
```

While less common, percentages can also be used for font sizes to create scalable typography. For example, `font-size: 120%` would make the text 20% larger than its parent's font size.

```html
<link rel="stylesheet" href="styles.css" />
<div class="text-container">
  Parent text.
  <p class="text">This is some example text.</p>
</div>
```

```css
.text-container {
  font-size: 16px;
}

.text {
  font-size: 120%;
}
```

Percentages can be particularly handy for vertical centering. Here's an example of how you might use percentages with the `transform` property to center an element vertically.

This example positions the element 50% from the top of its container, then uses `transform` to move it back up by half its own height, effectively centering it vertically.

```html
<link rel="stylesheet" href="styles.css" />
<div class="centered"></div>
```

```css
.centered {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 300px;
  background-color: red;
}
```

You will learn more about how absolute positioning and the transform properties work in more detail in future lessons.

Remember, percentages are always relative to something. For horizontal properties like `width`, they're relative to the parent's width. For vertical properties like `height`, they're usually relative to the parent's height (if specified).

However, be cautious when nesting elements with percentage-based dimensions, as this can lead to unexpected results. Also, keep in mind that percentage-based heights can be tricky if the parent doesn't have a defined height.

In summary, percentages in CSS are powerful tools for creating flexible, responsive designs. Use them when you want elements to scale proportionally to their containers or when you need layouts that adapt seamlessly to different screen sizes.

## What Are ems and rems in CSS, and When Should You Use Them?

In the previous lesson, we learned about absolute length units like pixels. While absolute units can be helpful in certain situations, there will be times when you want to use relative units.

In this lesson, we will learn about two relative units: `em`s and `rem`s.

*`em` units are relative to the font size of the element*. If you are using ems for the `font-size` property, the size of the text will be relative to the font size of the parent element.

To better understand how this works, let's take a look at an example:

```html
<link rel="stylesheet" href="styles.css" />
<p class="para">I am a paragraph element</p>

<div class="blue-box"></div>
```

```css
.para {
  font-size: 20px;
  margin-bottom: 1.5em;
  border: 2px solid red;
}

.blue-box {
  background-color: blue;
  color: white;
  padding: 10px;
  width: 100px;
  height: 100px;
}
```

For the HTML, we have a paragraph and a `div` element. The paragraph element has a class of `para`, and the `div` element has a class of `blue-box`.

For the `para` class, we set the `font-size` to `20px` and the `margin-bottom` to `1.5em`. This means that the margin will be 1.5 times the font size of the paragraph element. `1.5em` results in 30 pixels of margin at the bottom of the paragraph. We have also set a `border` of `2px solid red` so you can see the margins better.

For the `blue-box` class, we set the background color to `blue`, the text color to `white`, and the `padding` to `10px` on all four sides.

From the example, there'll be a clear space between the bottom of the paragraph element and the blue box.

So what happens if we remove the `font-size` property from the `para` class?

Well, the bottom margin will be relative to the font size of the parent element. In this case, the parent element is the body element, which has a default font size of `16px`.

Good use cases for `em`s would be when you are working with modular components like buttons or cards. By using `em` units, you can ensure that all aspects of the component (such as padding, margin, and borders) scale proportionally with the font size, keeping consistent proportions.

So, up until this point, we have been setting the font size for an element using pixels. But that does present some challenges for users.

Inside your browser settings, you can control the default font size.

For those with visual impairments, they may increase the font size to make it easier to read. But if you are setting pixels for the font sizes in your web designs, the text will not scale proportionally with the rest of the content.

One way to address this issue is to use `rem` units for typography. *A `rem` unit is relative to the font size of the root element*, which is the `html` element.

By default, the font size of the `html` element is `16px`. If the user increases the font size in their browser settings, the font size of the `html` element will increase, and all rem units will scale proportionally.

Here is an example of using the `rem` unit for the font size instead of pixels:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is regular text.</p>
<p class="para">This text is slightly larger.</p>
```

```css
.para {
  font-size: 1.2rem;
  margin-bottom: 1.5em;
  border: 2px solid red;
}
```

By setting the font size to `1.2rem`, the font size of the paragraph element will be 1.2 times the font size of the root element. If the user hasn't changed the default font size, the font size of the paragraph element will be `19.2px` because it is 1.2 times `16px`.

So when should you use `rem` units? *`rem` units are preferred over pixels for typography because they scale proportionally with the user's browser settings*. This makes your content more accessible to users with visual impairments.

`rem` units can also help maintain consistent spacing and layout across different elements.

## What Are vh and vw Units, and When Should You Use Them?

In CSS, `vh` and `vw` are viewport-relative units that allow you to size elements based on the dimensions of the browser window. These units are particularly useful for creating responsive designs that adapt to different screen sizes.

*`vh` stands for "viewport height," and `1vh` is equal to 1% of the viewport's height*.

Similarly, `vw` stands for "viewport width," and `1vw` is equal to 1% of the viewport's width.

This means that if you set an element's height to `100vh`, it will occupy the full height of the viewport, regardless of the actual pixel dimensions of the device.

These units are especially handy when you want to create full-screen layouts or elements that maintain a specific proportion of the screen.

For example, you might want to use them to create a hero section that always fills the entire screen (to interact with the example, you will need to enable the [interactive editor](https://codesandbox.io/p/sandbox/8k7nrt)).

```html
<link rel="stylesheet" href="styles.css" />

<section class="hero">
  <h1>100vh / 100vw Example</h1>
  <p>This section fills the entire browser window.</p>
</section>
```

```css
body {
  margin: 0;
  font-family: sans-serif;
  border: 5px dashed #333;
}

.hero {
  height: 100vh;
  width: 100vw;
  background-color: #add8e6; 
  padding: 2em;
}

.hero h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.hero p {
  font-size: 1em;
}
```

This CSS ensures that the hero section will always be exactly the size of the viewport, regardless of the device's screen size.

`vh` and `vw` units can also be used for typography to create responsive text sizes.

Enable the [interactive editor](https://codesandbox.io/p/sandbox/gcdsy3) and try adjusting the size of the preview window to see how the text scales with the viewport size:

```html
<link rel="stylesheet" href="styles.css" />
<h1>Responsive Heading</h1>
<p>The h1 heading scales with the viewport width.</p>
```

```css
h1 {
  font-size: 5vw;
}
```

This will set the font size of `h1` elements to 5% of the viewport width, allowing the text to scale smoothly with the browser window size.

One of the advantages of `vh` and `vw` units is that they respond to changes in the viewport size in real-time. This means that if a user resizes their browser window, elements sized with these units will adjust accordingly without needing to reload the page. However, it's important to use these units judiciously. Setting font sizes solely with `vw` units, for example, can lead to text becoming too small on narrow screens or too large on wide screens.

Another consideration is that on mobile devices, *the viewport height can change when the browser's address bar appears or disappears, which can cause unexpected layout shifts if you're using `vh` units extensively*.

In summary, `vh` and `vw` units are powerful tools for creating responsive layouts and elements that adapt to the viewport size. They're particularly useful for full-screen sections, maintaining aspect ratios, and creating smoothly scaling designs. However, they should be used thoughtfully and often in combination with other CSS techniques to ensure the best user experience across all devices.
