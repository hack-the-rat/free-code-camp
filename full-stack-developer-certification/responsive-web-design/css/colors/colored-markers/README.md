# Build a Set of Colored Markers

## Step 1

Within the `body`, nest an `h1` element with the text `CSS Color Markers`.

## Step 2

In this project you'll work with an external CSS file to style the page. A `styles.css` file has been already created for you. But before you can use it, you'll need to link it to the page.

Nest a `link` element within the `head` element. Give it a `rel` attribute set to `"stylesheet"` and an `href` attribute set to `"styles.css"`.

## Step 3

Now that your external CSS file is set up, you can start styling the page.

As a reminder, here's how to target a paragraph element and align it to the right:

```css
p {
  text-align: right;
}
```

Create a new CSS rule that targets the `h1` element, and set its `text-align` property to `center`.

## Step 4

Now you'll add some elements that you'll eventually style into color markers.

First, within the `body` element, add a `div` element with a `class` attribute set to `container`. Make sure the `div` element is placed below the `h1` element.

## Step 5

Next, within the `div` element, add another `div` element and give it a class of `marker`.

## Step 6

It's time to add some color to the marker. Remember that one way to add color to an element is to use a color keyword like `black`, `cyan`, or `yellow`.

As a reminder, here's how to target the class `freecodecamp`:

```css
.freecodecamp {
  
}
```

Create a new CSS rule that targets the class `marker`, and set its `background-color` property to `red`.

**Note:** You will not see any changes after adding the CSS.

## Step 7

The background color was applied, but since the marker `div` element has no content in it, it doesn't have any height by default.

In your `.marker` CSS rule, set the `height` property to `25px` and the `width` property to `200px`

## Step 8

Your marker would look better if it were centered on the page. An easy way to do this is by using the `margin` shorthand property.

You can set the margin area of elements separately with properties like `margin-top` and `margin-left`, the `margin` shorthand property makes it easy to set multiple margin areas at the same time.

To center your marker on the page, set its `margin` property to `auto`. This sets `margin-top`, `margin-right`, `margin-bottom`, and `margin-left` all to `auto`.

## Step 9

Now that you've got one marker centered with color, it's time to add the other markers.

In the `.container` element, add two more `div` elements and give them each a class of `marker`.

## Step 10

While you have three separate marker `div` elements, they look like one big rectangle. You should add some space between them to make it easier to see each element.

When the shorthand `margin` property has two values, it sets `margin-top` and `margin-bottom` to the first value, and `margin-left` and `margin-right` to the second value.

In your `.marker` CSS rule, set the `margin` property to `10px auto`.

## Step 11

To give the markers different colors, you'll need to add a unique class to each one. You can add multiple classes to an element by listing them in the `class` attribute and separating them with a space. For example, the following code adds both the `animal` and `dog` classes to a `div` element:

```html
<div class="animal dog">
```

If you add multiple classes to an HTML element, the styles of the first classes you list in the stylesheet may be overridden by later classes.

To begin, add the class `one` to the first marker `div` element.

## Step 12

Next, remove the `background-color` property and its value from the `.marker` CSS rule.

## Step 13

Then, create a new CSS rule that targets the class `one` and set its `background-color` property to `red`.

## Step 14

Add the class `two` to the second marker `div` and the class `three` to the third marker `div`.

## Step 15

Create a CSS rule that targets the class `two` and set its `background-color` property to `green`.

Also, create a separate CSS rule that targets the class `three` and set its `background-color` to `blue`.

## Step 16

As you have learned in the lessons, there are two main color models: the additive RGB (red, green, blue) model, used in electronic devices, and the subtractive CMYK (cyan, magenta, yellow, black) model, used in print.

In this project, you'll work with the RGB model. This means colors start as black and change as different levels of red, green, and blue are introduced. An easy way to see this is with the CSS `rgb` function.

Create a new CSS rule that targets the class `container` and set its `background-color` to black with `rgb(0, 0, 0)`.
