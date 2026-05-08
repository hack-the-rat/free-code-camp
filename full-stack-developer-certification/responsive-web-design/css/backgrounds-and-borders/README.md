# Working with Backgrounds and Borders

## How Do Background Image Size, Repeat, Position, and Attachment Work?

When working with background images in CSS, you have several properties at your disposal to control how these images are displayed.

The main properties we'll focus on are `background-size`, `background-repeat`, `background-position`, and `background-attachment`.

Let’s first take a look at the `background-image` property:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

The above CSS sets a cat background image for the `body` element.

If you want to set the size for the background image, you can use the `background-size` property.

*You can use `contain` to scale the image as large as possible without cropping or stretching*.

Here's an example with `background-size: contain`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    min-height: 100px;
  }
</style>
```

We are setting the `min-height` to `100px` so the background image is visible and the layout maintains a baseline height, ensuring that even with minimal content, the design appears balanced and visually appealing.

If we change the `background-size` property to use the `cover` value, then the background image will scale to cover the entire `body` element while maintaining its aspect ratio.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: cover;
    min-height: 100px;
  }
</style>
```

In the previous examples, you probably noticed that the background image would continuously repeat.

By default, background images repeat both horizontally and vertically to fill the entire element. However, you can control this behavior.

You can use the `background-repeat` property with the value set to `no-repeat`.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 100px;
  }
</style>
```

With the `background-size` set to `contain` and the `background-repeat` set to `no-repeat`, the image will no longer repeat on the screen.

*If you wanted to repeat the background image horizontally, you can use the `repeat-x` value* for the `background-repeat` property.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: repeat-x;
    min-height: 100px;
  }
</style>
```

If you wanted to repeat the background image vertically, you can use the `repeat-y` value for the `background-repeat` property.

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: repeat-y;
    min-height: 100px;
  }
</style>
```

To position a background image on the screen, you can use the `background-position` property.

The `background-position` property allows you to set where in the element the background image appears. You can use keywords like `top`, `bottom`, `left`, `right`, and `center`, or specific pixel or percentage values.

Here is an example using the `center` and `top` for the `background-position`:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center top;
    min-height: 100px;
  }
</style>
```

This CSS code positions the background image at the center of the element horizontally and at the top vertically.

Lastly, `background-attachment` determines whether the background image scrolls with the content or remains fixed when the page is scrolled.

The main values are `scroll` (default), where the background image scrolls with the content, and *`fixed`, where the background image stays in the same position on the screen*.

Here is an example using the `fixed` value for the `background-attachment` property:

```html
<style>
  body {
    background-image: url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
    background-position: center top;
    background-attachment: fixed;
  }
</style>
```

This CSS code sets the background image to remain fixed in place even when the page is scrolled.

If you wanted to combine a few of the properties into one line, you can do that by using the shorthand `background` property.

Here is an example:

```html
<style>
  body {
    background: center top fixed
      url("https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg");
  }
</style>
```

The above example combines the `background-image`, `background-position`, and `background-attachment` into a single line.

By mastering these properties, you'll have great control over how background images are displayed in your web designs, allowing for more visually appealing and functional layouts.

## What Is a Background Gradient, and How Does It Work?

A background gradient in CSS is a smooth transition between two or more colors that can be applied to the background of an element. Gradients allow you to create visually appealing backgrounds without needing images.

There are two main types of gradients in CSS: linear gradients and radial gradients.

A linear gradient transitions colors along a straight line. You can define the direction and the colors involved.

Here is the basic syntax:

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

In this example, we are using the `background` CSS property with a value of the `linear gradient`.

The direction specifies the direction of the gradient. It can be an angle (such as `45deg`), a keyword (such as `to right`, `to bottom`), or a side/corner.

`color-stop` specifies the colors and positions where the gradient transitions occur.

To better understand how linear gradients work, let's take a look at the following example:

```html
<link rel="stylesheet" href="styles.css">
<div class="linear-gradient"></div>
```

```css
.linear-gradient{
  background: linear-gradient(to right, red, yellow);
  height: 40vh;
}
```

This CSS creates a linear gradient that transitions from `red` on the `left` to `yellow` on the `right`. The gradient is applied to an element with a height of `40%` of the viewport height. You'll learn more about `vh` units in a future lesson.

The `to right` direction means the gradient runs horizontally from left to right.

Another type of gradient would be the `radial` gradient.

A radial gradient transitions colors radiating from an origin (usually the center) outward in a circular or elliptical shape.

Here is the basic syntax:

```css
background: radial-gradient(shape size at position, color-stop1, color-stop2, ...)
```

On the syntax, the `shape` specifies the shape of gradient which could be `circle` or `ellipse`.

The `size` determines the size of the gradient's ending shape which could be `closest-side`, `closest-corner`, `farthest-side` or `farthest-corner`.

`position` determines the position of the gradient's center which could be specified using keywords (such as `center`, `top left`, `bottom right`) or precise values (such as `50% 50%`, `10px 20px`).

Lastly, color stops are a list of colors that the gradient transitions through. Each color stop can optionally include a position value (percentage or length) indicating where the color should be placed.

An example would be:

```html
<link rel="stylesheet" href="styles.css">
<div class="radial-gradient"></div>
```

```css
.radial-gradient{
  background: radial-gradient(circle closest-side at center, red, yellow 50%, green);
  height: 60vh;
}
```

*This CSS creates a circular radial gradient centered in the element*. It starts with `red` at the center, transitions to `yellow` at `50%` of the radius, and ends with `green`.

*The `closest-side` keyword makes the gradient's ending shape fit the closest side of the elemen*t. The gradient is applied to an element with a height of `60%` of the viewport height.

Understanding how to work with CSS gradients can significantly enhance your designs by providing visually appealing backgrounds without the need for images.

With options like linear gradients for smooth transitions and radial gradients for circular effects, they offer both flexibility and creativity in web design.
