# Design a Set of Colorful Boxes

## Step 1

In this workshop you will practice working with CSS flexbox by designing a set of colored boxes.

To begin, inside the `body` element, add a `header` element. Nest an `h1` element inside the `header` element with the text `Colored Boxes Layout`.

## Step 2

Now link your `styles.css` file to the HTML document.

## Step 3

Now it is time to add some CSS rules to the `styles.css` file. Start by creating a selector for the `h1` element.

Center the content of the `h1` element by setting its `text-align` property to `center`. Also create a `margin-bottom` property with the value `10px` to add margin between the bottom of the `h1` element and any HTML element that goes below.

## Step 4

Now add a `div` element with the class `flex-container` below your `header`. Then create six `div` elements with the class `box` inside the `div` you just created.

Remember that a class attribute is often used to point to a class name in a style sheet. In this case, all of the `div` elements will be styled equally according to the `.flex-container` and `.box` style definition.

## Step 5

Inside each `.box` element, add an `h2` element with the text `Box` followed by a space and a sequential number starting from `1`.

## Step 6

Now it's time to create the color name for the boxes. To do this, add a `p` element below each `h2` element with these color names in order: `Red`, `Orange`, `Yellow`, `Green`, `Blue`, and `Indigo`. One color for each box.

## Step 7

Now you are going to style the `div` elements with the class `box`. First create a `.box` class selector and add the property `max-height` with the value `120px` to the `box` class selector.

## Step 8

Still inside the `.box` selector, add the property `color` with the value `#000`. This is going to make all text of `.box` elements to have the `#000` color.

## Step 9

Add the property `border` with the value `1px solid #000` to the `.box` selector. The `border` property is used to create a visible outline around an element. It can be customized in terms of `border-width`, `border-style`, and `border-color`.

In this case, `1px` is `border-width`, which defines the thickness of the border. `solid` is `border-style` and sets the appearance of the border (solid, dashed, dotted and so on). And `#000` is `border-color`, which defines the color of the border.

## Step 10

The `display` property controls how an element is rendered on the page. When you define it with the `flex` value, this enables flexbox layout mode, which gives you control to arrange and align the items inside the container.

Now add the property `display` with the value `flex` to the `.box` selector.

## Step 11

The `flex` property controls the size and behavior of the items inside a flexible container. It is composed by three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.

Now add the `flex` property with the value `1 1 100px` to the `.box` selector. This will make each box start at `100px`, allowing them to grow to fill available space, or shrink when needed.

## Step 12

The `flex-direction` property controls how flex items are arranged within their container. The default value is `row`, which arranges items horizontally from left to right. This property only works on elements with `display: flex` or `display: inline-flex`.

With the `column` value, items stack vertically from top to bottom. Other possible values are `row`, `row-reverse` and `column-reverse`.

Now add the `flex-direction` property with the value `column` to the `.box` selector.

## Step 13

The `align-items` property aligns flex items along the cross axis (perpendicular to the main axis).

Now add the `align-items` property with the value `center` to the `.box` selector. Since the `box` class has `flex-direction: column`, the cross axis is horizontal, so `center` will center items horizontally within the box.

## Step 14

Now add the property `margin` with the value `10px` to the `.box` selector.

## Step 15

The `font-weight` property controls font thickness.

Now add the `font-weight` property with a value `bold` to the `.box` selector.

## Step 16

Add the property `font-size` with the value `1.125rem` to the `.box` selector.

The `font-size` property specifies the size of the text. It can be set using different units like pixels, em, rem, percentages, and so on, making it flexible for responsive designs.

In this case, the value uses `rem` units, which are relative to the root `html` element, not the parent element. This means the font size stays consistent and isn't affected by parent element sizes, making it more predictable for layouts.

## Step 17

The `border-radius` property rounds the corners of an element's border. You can specify:

* One value to apply to all four corners.
* Two values, with the first value for top-left/bottom-right, and second for top-right/bottom-left.
* Three values, corresponding to top-left, top-right/bottom-left, bottom-right.
* Four values, which set the border radius clockwise starting from top-left corner.

Now add the property `border-radius` with the value `5px` to the `.box` selector.

## Step 18

The `order` property specifies the order of a flex item relative to other flex items inside the same container. By default, all flex items have an `order` value of `0`, meaning they appear in the order they're written in the HTML. Items with lower `order` values appear first, while items with higher values appear last.

Add the property `order` with the value `0` to the `.box` selector.

## Step 19

Create a `.flex-container` selector and set the `display` property to the value `flex`.

## Step 20

The `flex-wrap` property defines whether flex items are forced onto one line or can wrap onto multiple lines.

By default, flex items have a value of `nowrap`, meaning they stay on a single line even if they overflow the container. The `wrap` value instead makes flex items wrap onto new lines when they don't fit in the container's width, creating a more flexible, responsive layout.

To continue, add the `flex-wrap` property with the value `wrap` to the `.flex-container` class selector.
