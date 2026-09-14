# Design a Rothko Painting

## Step 1

Begin your project by adding an `img` element with a `src` of `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-1.png` within the `body` element.

## Step 2

In previous lessons about the CSS box model, you learned that every HTML element is treated as a box with four areas.

Imagine you receive a box from your favorite online retailer — the content is the item in the box, or in your case, a header, paragraph, or image element.

Change the `src` attribute in the `<img>` from `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-1.png` to `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-2.png`.

## Step 3

The content is surrounded by a space called padding, similar to how bubble wrap separates an item from the box around it.

Think of the border like the cardboard box your item was shipped in.

Change the `src` attribute to `https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png`

## Step 4

Margin is the area outside of the box, and can be used to control the space between other boxes or elements.

Here the bottom element has a larger top margin, pushing it further down the page.

Now that you quickly reviewed the CSS box model, it's time to get started on the Rothko painting.

Remove the `img` element.

## Step 5

Add a `div` element in the `body`.

Set the `class` attribute equal to `canvas`.

This will act as the canvas for your painting.

## Step 6

Before you can start styling the `div` you added, you need to link your CSS to your HTML.

Add a `link` element to link your `styles.css` file. Set the `href` to `styles.css`, and remember to set the `rel` attribute to `stylesheet`.

## Step 7

Time for CSS.

Even though your `<div>` has no text, it's still treated as a box with content. Write a CSS rule that uses the `.canvas` class selector and set its `width` to 500 pixels. Here's a CSS rule that sets the width of the class `card` to 300 pixels:

```css
.card {
  width: 300px;
}
```

## Step 8

Add the `height` property with the value `600px` to your `.canvas` rule.

## Step 9

Change the `background-color` of the canvas to `#4d0f00`.

## Step 10

Every painting needs a frame.

Wrap the `.canvas` element in another `div`. Give that `div` the `frame` class.

## Step 11

Write a new rule using the `.frame` class selector.

Use the `border` shorthand declaration to give the `.frame` element a solid, black border with a width of `50px`.

## Step 12

The frame is much too wide.

In `.frame`, set its `width` to 500 pixels.

## Step 13

Use padding to adjust the spacing within an element.

In `.frame`, use the `padding` shorthand property to increase the space between the `.frame` and `.canvas` elements by `50px`. The shorthand will increase space in the top, bottom, left, and right of the element's border and canvas within.

## Step 14

Use margins to adjust the spacing outside of an element.

Using the `margin` property, give the `.frame` element vertical margin of `20px`, and horizontal margin of `auto`. This will move the frame down 20 pixels and horizontally center it on the page.

## Step 15

Add a new `div` element inside of your `.canvas` element.

Give the new `div` the `class` attribute with a value of `one`. This will be your first rectangle.

## Step 16

Write a new rule that targets `.one` and set its `width` to 425 pixels.

## Step 17

Now set the `height` for `.one` to 150 pixels.

## Step 18

Set the `background-color` of `.one` to `#efb762`.

## Step 19

Use margins to position the `.one` element on the canvas.

Add the shorthand `margin` property with a vertical margin of `20px` and a horizontal margin of `auto`.

## Step 20

Now `.one` is centered horizontally, but its top margin is pushing past the canvas and onto the frame's border, shifting the entire canvas down 20 pixels.

Add `padding` of `1px` to the `.canvas` element to give the `.one` element something solid to push off of.

## Step 21

Adding 1 pixel of padding to the top, bottom, left, and right of the canvas changed its dimensions to 502 pixels x 602 pixels.

Replace the `padding` property with `overflow` set to `hidden` - changing the canvas back to its original dimensions.

## Step 22

Add another `div` with a `class` value of `two` just below your `one` element. This will be your second rectangle.

## Step 23

Create a new CSS rule using the `.two` selector and set its `width` to 475 pixels.

## Step 24

Set the `height` of the `.two` element to 200 pixels.

## Step 25

Set the `background-color` of the `.two` element to `#8f0401`.

## Step 26

Center the `.two` element by setting its `margin` to `auto`.

## Step 27

Create a new `div` with a `class` value of `three` right under the `.two` element. This will be your third rectangle.

## Step 28

You don't always have to use pixels when sizing an element.

Create a new rule, `.three`, and set its `width` to `91%`.

## Step 29

Set the `height` of `.three` to `28%`.

## Step 30

Change the `background-color` of `.three` to `#b20403`.
