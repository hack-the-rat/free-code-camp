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

## Step 21

Now you will set the width and height of the `.flex-container` element. To do this, add the `width` property with the value `70%` and the `height` property with the value `600px`.

Defining `width` and `height` properties will set the amount of width and height the `div` takes form its parent element, in this case the `body` element.

## Step 22

To finish styling the `flex-container` class, add the `padding` property with a value of `10px` and the `margin` property with a value of `20px auto`.

Remember: `padding` adds space inside the element (between the border and content), while `margin` adds space outside the element (between the border and other elements).

## Step 23

Now you are going to use the `align-content` property. This property controls the arrangement of items along the cross axis. While the default value of `align-content` is `stretch`, the most relevant options you can use for `align-content` are: `space-between`, `start`, `center`, `end`, `space-around` and `space-evenly`.

Add the property `align-content` with the value `space-between` to see how the boxes will align in the `.flex-container` element.

## Step 24

Now try another alignment value. Change the `align-content` value from `space-between` to `start`.

With the `start` value, items are packed toward the start edge of the alignment container.

## Step 25

Next on the list is the `center` value. Change `align-content` value from `start` to `center`.

With the `center` value, items will be packed to the center of the alignment container.

## Step 26

Now to see how the `end` value works, change the `align-content` value from `center` to `end`.

With the `end` value, items will be packed to the end of the alignment container.

## Step 27

With the `space-around` value, items are evenly distributed within the alignment container. Each item has equal space on both sides, but the space at the start and end edges is half the space between two adjacent items. To see it in action, change the `align-content` value from `end` to `space-around`.

## Step 28

Now you are going to check on the last alignment value. Change the `align-content` value from `space-around` to `space-evenly`.

With the `space-evenly` value, items are evenly distributed within the alignment container. The space between all items is exactly the same, including the space at the start and the end.

## Step 29

The `flex` property controls the size and behavior of the items inside a flexible container. It is composed by three properties: `flex-grow`, `flex-shrink`, and `flex-basis`.

The `flex-grow` property controls how much extra space the flex item should take up if there is free space available in the container.

Now, getting back to the `.box` selector, change the first number in `flex` (corresponding to the `flex-grow` value) from `1` to `0`.

## Step 30

The second value of the `flex` property sets the `flex-shrink` property. This property controls how much the flex item will shrink when there isn't enough space in the container for all items.

Still inside the `.box` selector, change the second value in `flex` from `1` to `0`.

## Step 31

The last value of the `flex` property sets the `flex-basis` property. This property sets the starting size of a flex item before it grows or shrinks.

Finally, change the last value in `flex` from `100px` to `150px` inside your `.box` selector.

## Step 32

Going back to the `html` file, add the class `box1` to the first `div` with the class of `box`.

## Step 33

Now you are going to organize the boxes inside your flexbox container. First, create a `.box1` selector and add to it the `background` property with the value `#f16e79`.

Then, add the property `order` with the value `1`. You'll see the first box move to the end. This happens because the `box` class already has an `order` value of `0`, and items with higher order values appear later.

Also add the `flex-grow` property with a value of `1`. This will make the box grow to fill extra space on its line.
