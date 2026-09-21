# Working with CSS Flexbox

## What Is CSS Flexbox, and When Should You Use It?

CSS flexbox is a one-dimensional layout model that allows you to arrange elements in rows or columns within a container. You can also control their order and orientation. Web developers use it to create responsive websites and web applications that adapt to different screen sizes and orientations. We refer to flexbox as a one-dimensional layout model because it focuses on arranging elements along a single axis at a time. The axis can be either horizontal or vertical.

### Flex Containers and Flex Items

There are two key concepts that you should know about before you start working with flexbox: flex container and flex item.

A flex container is an HTML element with a flex layout. You can arrange and align elements in various ways within a flex container. To make an HTML element a flex container, you need to add `display: flex` to its CSS styles.

Flex items are the direct children of a flex container. These elements can be arranged and aligned within a flex container based on its properties. They can also shrink or expand to fit the available space.

This is an example with a `main` container and three child `div` elements:

```html
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

If you set only the `width`, `height`, and `background-color` of these `div` elements in the CSS stylesheet, every child element will be placed on its own row because the container is not flex by default (to see the previews, enable the [interactive editor](https://codesandbox.io/p/sandbox/2jz353)):

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

But if you add `display: flex` to the `main` [container](https://codesandbox.io/p/sandbox/h4gcdp), the `div` elements will be rearranged to fit on the same row and they will shrink if necessary:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

By default, a flex container will be a block-level element, so the container itself will be on its own row relative to other elements and containers.

### Flex Properties

Now that you know more about flex containers and flex items, you should also know about flex properties. These properties determine how flex items will be arranged, resized, and distributed within the flex container. Some of the most commonly used ones are `flex-direction`, `justify-content`, `align-items`, and `flex-wrap`.

### The Flex Model

Great. Now let's talk a little bit about the flex model. This model defines how flex items are arranged within a flex container. Every flex container has two axes:

* The main axis.
* The cross axis.

The orientation of these axes determines how different properties will affect the layout and distribution of the flex items. By default, the main axis of a flex container is horizontal and the cross axis is vertical. Flex items are arranged in the direction of the main axis. *The cross axis is perpendicular to the main axis*.

### The `flex-direction` Property

The `flex-direction` property sets the direction of the main axis. The default value of `flex-direction` is `row`, which places all the flex items on the same row, in the direction of your browser's default language (left to right or right to left):

`flex-direction: row; /* Default */`

To reverse the [items](https://codesandbox.io/p/sandbox/r92y7c) in the row, you can use `flex-direction: row-reverse`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: row-reverse; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

This will reverse the order of the flex items. If you want to align the flex items vertically instead, you just need to set `flex-direction` to `column` in the flex [container](https://codesandbox.io/p/sandbox/4m6pw8). This will change the direction of the main axis:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: column; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

Now the `div` elements will be aligned vertically because the main axis will be vertical and the cross axis will be horizontal.

You can also reverse the order of the flex [items](https://codesandbox.io/p/sandbox/lthdp4) vertically with `flex-direction: column-reverse`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  flex-direction: column-reverse; 
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

CSS flexbox is a powerful layout model that provides a flexible and efficient way to arrange elements within a container. By understanding the key concepts of flex containers, flex items, and the various flex properties, you can create dynamic and responsive websites that adapt to different screen sizes and orientations.

## What Are Some Common Flex Properties, and How Do They Work?

Flex properties control how elements behave inside a flex layout, from container-level distribution to item-level self-alignment. We'll cover some of the most commonly used ones in this lesson: `flex-wrap`, `flex-flow`, `justify-content`, `align-items`, and `align-self`.

### Wrapping Items with `flex-wrap`

Let's start with `flex-wrap`. This property determines how flex items are wrapped within a flex container to fit the available space. `flex-wrap` can take three possible values: `nowrap`, `wrap`, and `wrap-reverse`. `nowrap` is the default value: flex items won't be wrapped onto a new line, even if their width exceeds the container's width.

In the [code](https://codesandbox.io/p/sandbox/sdd2dw) below, we have three `div` elements. Let's focus on the `width`. The bordered `main` container has a `width` of `200px`, while its three child `div` elements combined have a `width` of `240px` (`80px` each):

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

The width of the `div` elements exceeds the width of their container, but by default they will be shrunk to fit the available space. If you do want to wrap them when they exceed the width of their container, you can set `flex-wrap: wrap` on the flex [container](https://codesandbox.io/p/sandbox/8rljz7):

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  display: flex;
  flex-wrap: wrap;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

### Combining Direction and Wrap with `flex-flow`

The `div` elements will be rearranged in rows when they exceed the width of their container. You can wrap flex items in reverse order with `flex-wrap: wrap-reverse`. *The `flex-flow` property is a shorthand property for `flex-direction` and `flex-wrap`*. In this [example](https://codesandbox.io/p/sandbox/nnsp4f), we set `flex-direction` to `column` and `flex-wrap` to `wrap-reverse`:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  width: 200px;
  height: 120px;
  display: flex;
  flex-flow: column wrap-reverse;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

### Aligning Items Along the Main Axis with `justify-content`

Great. Now let's talk about `justify-content`. `justify-content` aligns the child elements along the main axis of the flex container. If you assign the value `flex-start` to `justify-content`, the flex [items](https://codesandbox.io/p/sandbox/clgdk4) will be aligned to the start of the main axis. This could be horizontal or vertical:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

With `justify-content: flex-end`, flex [items](https://codesandbox.io/p/sandbox/pzxcxk) are aligned to the end of the main axis, horizontally or vertically.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: flex-end;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

To center the flex [items](https://codesandbox.io/p/sandbox/w87mpj) along the main axis, you can use `justify-content: center`.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: center;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

To distribute the elements along the main axis with no space at the edges, you can use `justify-content: space-between`. The first item sits at the start of the main axis, the last item sits at the end, and any remaining space is distributed between adjacent [items](https://codesandbox.io/p/sandbox/f55d9q).

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-between;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

`justify-content: space-around` distributes flex items evenly along the main axis, adding a space before the first item and after the last [item](https://codesandbox.io/p/sandbox/g4r6yg). This additional space is half of the space between each pair of adjacent items. If there's only one item to distribute, it will be centered.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-around;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

And last but not least, we have `justify-content: space-evenly`, which distributes the items evenly along the main axis. The space between the items and the space before and after the first and last [elements](https://codesandbox.io/p/sandbox/7xvx96) are exactly the same:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  justify-content: space-evenly;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

### Aligning Items Along the Cross Axis with `align-items`

Great. Now you know how to distribute flex items along the main axis. But you may also want to distribute them along the cross axis. Remember that the cross axis is perpendicular to the main axis. You can do this with the `align-items` property. To center the items along the cross axis, you just need to add `align-items: center` to the flex [container](https://codesandbox.io/p/sandbox/ls4ts3):

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: center;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

In this example, the flex items are centered along the cross axis, which is vertical by default. If the cross axis is horizontal, they will be centered horizontally instead. In contrast, `align-items: flex-start` aligns the [items](https://codesandbox.io/p/sandbox/8shzyp) to the start of the cross axis:

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

The opposite is `align-items: flex-end`. This will align flex [items](https://codesandbox.io/p/sandbox/yc2294) to the end of the cross axis, vertically or horizontally.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-end;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
}
```

To stretch the flex items along the cross axis, you can use `align-items: stretch`. This only affects items whose size on the cross axis is `auto`; items with an explicit size on the cross axis (for example, a set `height` in a row container) won't stretch. The affected items will fill the [container](https://codesandbox.io/p/sandbox/q6mglq) in the direction of the cross axis.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: stretch;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
  height: auto;
}
```

### Overriding Alignment for a Single Item with `align-self`

And finally, you can use the `align-self` property to assign a different alignment on the cross axis to an individual flex item. For [example](https://codesandbox.io/p/sandbox/kn2s2c), you can stretch it with `align-self: stretch`.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
  align-self: stretch;
}
```

You can center [it](https://codesandbox.io/p/sandbox/ykywhf) with `align-self: center`.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
  align-self: center;
}
```

You can align [it](https://codesandbox.io/p/sandbox/3c9tzj) to the start of the cross axis with `align-self: flex-start`.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
  align-self: flex-start;
}
```

Or you can align [it](https://codesandbox.io/p/sandbox/9tf66g) to the end of the cross axis with `align-self: flex-end`.

```html
<link rel="stylesheet" href="styles.css">
<main>
  <div id="first-div"></div>
  <div id="second-div"></div>
  <div id="third-div"></div>
</main>
```

```css
main {
  display: flex;
  height: 300px;
  align-items: flex-start;
  border: 2px solid #444;
}

div {
  width: 80px;
  height: 50px;
}

#first-div {
  background-color: #4d70b2;
}

#second-div {
  background-color: #5c4db2;
}

#third-div {
  background-color: #4da3b2;
  align-self: flex-end;
}
```

There are other flex properties and values that you can choose from to create the responsive layout that you envision, but these are the most commonly used ones. With these CSS flex properties and your new knowledge of the CSS flex model, you can start creating responsive layouts to create a smooth and inclusive user experience across devices.
