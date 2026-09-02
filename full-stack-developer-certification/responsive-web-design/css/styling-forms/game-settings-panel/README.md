# Build a Game Settings Panel

## Step 1

In this workshop, you will practice styling checkboxes by building a game settings panel.

All of the HTML boilerplate (`DOCTYPE`, `html`, `head` and `body`) has been provided for you.

Within the `body`, create a `div` element with an `h1` element nested inside. Give the `h1` element the text `Game Settings`

## Step 2

Immediately after your `h1` element, create four `label` elements.

Inside of each of the `label` elements, create an `input` element with the `type` attribute set to `"checkbox"`.

After each `input` element, give your `label` elements the following texts, in order: `Sound Effects`, `Background Music`, `Hard Mode`, and `Haptic Feedback`.

## Step 3

Now you will begin sprucing the page up with some CSS styling. Begin by creating the `body` selector.

Set the `body` to have a `height` property with a value of `100vh` and a `background-color` property with a value of `#f0f0f0`.

The `height` of `100vh` makes the `body` take up the full height of the browser viewport, while the light gray background color provides a subtle base for the page.

Lastly, set a `text-align` property with the value of `center`. This will center all inline-content contained within the page unless a child element overrides it with its own alignment.

## Step 4

Now that the body has been styled, you are going to create a container card for the Game Settings panel.

To start, add a class of `settings-card` to your `div` element.

## Step 5

Now it is time to style the `settings-card` container. Create a class selector for `settings-card`.

This will be where all of your formatting for the container will go. Set the `max-width` to `250px` to define the overall size of your container.

Next, set your `padding` to `20px` so that your content has space between it and the border of the container.

After this, create a rounded edge by setting your `border-radius` to `10px`.

Then set a `box-shadow` with the values of `0 2px 6px rgba(0,0,0,0.2)`. This will create a subtle "lifted" look that will create depth for the container.

## Step 6

Within your `.settings-card` selector set the `margin` property to `auto`.

Setting the `margin` property to `auto` automatically adjusts the margins of an element to evenly distribute the remaining space in its container, commonly used to center block-level elements horizontally.

And last, set a `text-align` property with the value of `left`. This will align the inline content, such as text, to the left side of its containing element.

## Step 7

Now create an `h1` selector and set the `text-align` property with a value of `center`. This will center your `h1` elements.

## Step 8

You need some spacing between the checkboxes and the labels. Begin by using the selector for `label` in your CSS and set a `display` property of `block`.

Next, set a `margin` property of `8px auto` to add vertical spacing between elements. This will create consistent spacing above and below each element, helping to separate content and improve readability.

Finally, set the `cursor` property to `pointer` on the `label` elements. This will change the cursor to a hand icon when a user hovers over a `label`, signaling that the element is clickable and improving the overall user experience.

## Step 9

Next up, you are going to enlarge the checkboxes for better visibility.

Begin by setting up a selector for `input`, but specifically targeting your `[type="checkbox"]`.

Within your selector, set the `width` and the `height` to `20px`. This makes it larger than it was before.

And to conform with your `cursor` setting that was set on the labels, add `cursor` and assign the value of `pointer` to it. After that, when you hover over the checkboxes it will display a pointer.
