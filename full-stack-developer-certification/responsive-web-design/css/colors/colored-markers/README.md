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
