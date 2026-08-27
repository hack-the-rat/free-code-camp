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
