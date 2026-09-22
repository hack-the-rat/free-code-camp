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
