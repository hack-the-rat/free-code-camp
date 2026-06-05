# Design a Greeting Card

## Step 1

In this workshop, you will practice working with different pseudo-classes and pseudo-elements by designing a greeting card. The HTML boilerplate has been provided for you.

Start the workshop by linking the `styles.css` file.

## Step 2

Create a `div` element that has an `id` of `greeting-card` and a `class` of `card`.

Inside the `div` element, add an `h1` with the text `Happy Birthday!`. Then add a paragraph element with a `class` called `message` and the text `Wishing you all the happiness and joy on your special day!`.

## Step 3

Now it is time to style your greeting card.

Add a selector for the `body` element, then:

* change the `font-family` to be `Arial` followed by the generic `sans-serif`,
* give a padding on all sides of `40px`,
* set the `text-align` property to `center`.

## Step 4

Now it's time for some color. Give the `body` a `background-color` of `brown` and also give the `.card` a `background-color` of `white`.

## Step 5

Give `.card` a `max-width` of `400px`, a `padding` of `40px` on all sides, and a `margin` of `0` for top and bottom and `auto` for left and right (use the shorthand property).

## Step 6

The `.card` element needs some more styling: add a `border-radius` of `10px`, and a `box-shadow` with a value of `0 4px 8px gray`.

## Step 7

Now add a new `div` below the `.message` element. The new `div` should have a `class` attribute of `card-links`.

## Step 8

Add two `a` elements inside the `.card-links` element.

The first one should have a text of `Send Card`, a `class` of `send-link` and an `href` of `#send`.

The second one should have a text of `Share on Social Media`, a `class` of `share-link` and an `href` of `#share`.

## Step 9

Add two `section` elements, one after the other. The first should have an `id` of `send`, the second one should have an `id` of `share`.

## Step 10

Add an `h2` to `#send` that contains the text `Sending your card...`, then add a `p` element with the text `Card successfully sent to your recipient!`.

## Step 11

Time to fill the second `section`!

Add an `h2` element to the `#share` element that contains the text `Sharing your card...`, then add a `p` element with the text `Your card was shared on social media!`.

## Step 12

Add a new selector that changes the `background-color` of the `.card` element to `khaki` when it is hovered over.

## Step 13

The `transform` property can transform the element look. For example, giving it a value of `scale(0.9)` would make the element 10% smaller.

```css
p {
  transform: scale(0.9);
}
```

Add a `transform` property to the `.card:hover` selector and set to `scale(1.1)`.
