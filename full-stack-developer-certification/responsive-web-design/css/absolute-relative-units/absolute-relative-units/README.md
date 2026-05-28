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
