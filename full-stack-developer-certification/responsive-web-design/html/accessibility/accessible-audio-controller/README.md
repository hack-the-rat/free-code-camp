# Build an Accessible Audio Controller

## Step 1

In this workshop, you will practice working with ARIA by building an accessible audio controller.

To start, add an `h1` element with the text `Audio Controls`.

## Step 2

Next, add a `button` element with the `type` attribute set to the value `button`.

The `button` element's text should be `Play`.

## Step 3

Next, add a `div` element to contain all the elements for the volume control.

Inside the `div` element, nest a `span` element with an `id` attribute set to `volume-label`. Also, the text for the `span` element should be `Volume`.

The `id` will later be referenced by ARIA attributes so assistive technologies can identify this text as the label for the volume control.

## Step 4

Now it is time to add another `span` element.

This `span` element should have an `id` attribute set to `volume-description`. Also, the text for this `span` element should be `Adjust the sound level`.

Similar to the previous `span` element, the `id` of this `span` will later be referenced by ARIA attributes so assistive technologies can identify this text as the description for the volume control.

## Step 5

Next, you need to add an `input` element with the `type` attribute set to `range` to create the volume slider. Set the `min` attribute to `0`, the `max` attribute to `100`, and the `value` attribute to `50` to define the default volume level.

## Step 6

As you recall from prior lessons, the `aria-labelledby` attribute is used when there is existing text on the page that can be used as a label. In this case, you have added the `id` attribute to your `span` elements which will now be used here.

Add an `aria-labelledby` attribute to the `input` element set to `volume-label volume-description`.

## Step 7

Your accessible audio controller is almost complete but there is one last thing to add.

Add a `button` element with the `type` attribute set to `button` and with text `Mute` below the `div` element.

And with that change, you have completed this workshop!
