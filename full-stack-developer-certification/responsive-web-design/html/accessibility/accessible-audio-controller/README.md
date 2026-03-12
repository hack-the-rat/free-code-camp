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
