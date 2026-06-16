# Working with Colors in CSS

## What Is Color Theory in Design?

Color theory is the study of how colors interact with each other and how they affect our perception. It covers color relationships, color harmony, and the psychological impact of color. Let's start diving into this world. Colors can be classified as either primary, secondary, or tertiary.

Primary colors, yellow, blue, and red, are the fundamental hues from which all other colors are derived.

![Color classification diagram](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-1.png)
Secondary colors result from mixing equal amounts of two primary colors. Green, orange, and purple are examples of secondary colors.

![Primary colors diagram](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-2.png)
For example, green is the result of combining yellow and blue.

![Secondary colors diagram](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-3.png)
Tertiary colors result from combining a primary color with a neighboring secondary color. Yellow-Green, Blue-Green, and Blue-Violet, are examples of tertiary colors.

![Green color mixing example](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-4.png)
This is a fundamental classification in the world of color theory, but there are other ways to classify colors. They can be classified as warm or cool, based on their temperature.

![Warm and cool colors diagram](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-5.png)
Warm colors, like reds, oranges, and yellows, evoke feelings of comfort, warmth, and coziness.

![Warm colors examples](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-6.png)
Cool colors, like blues, green, and purples, evoke feelings of calmness, serenity, and professionalism.

Colors can also be represented through color models. They are essential for describing and reproducing colors in a standard way. Frequently used color models include the RGB model, the HSV model, and the HSL model. They represent colors based on different properties. You will learn more about them in future lessons.

Great. Now that you know more about this, let's talk about a fundamental tool that designers use to represent colors and their relationships.

The color wheel is a circular diagram that shows how colors relate to each other. It's an essential tool for designers because it helps them to select color combinations. This is very helpful for creating color palettes and color schemes.

![Color wheel diagram](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-7.png)
A color scheme is the set of colors chosen for a specific design or project. They are usually based on the principles of color theory. By understanding the relationships between colors on the wheel, you can develop different types of color schemes. Let's see some of them.

*Analogous color schemes create cohesive and soothing experiences*. They have analogous colors, which are adjacent to each other in the color wheel.

Complementary color schemes create high contrast and visual impact. Their colors are located on the opposite ends of the color wheel, relative to each other.

Color contrast is essential for web accessibility. It ensures that text and other important elements are clearly distinguishable from their background. This is especially important for people with visual disabilities.

In an RGB color wheel, complementary colors are located at the opposite ends of the wheel. For example, magenta is complementary to green and blue is complementary to yellow and so on.

A triadic color scheme has vibrant colors. They are made from colors that are approximately equidistant from each other. If they are connected, they form an equilateral triangle on the color wheel.

And finally, we have the monochromatic color scheme. In this color scheme, all the colors are derived from the same base color by adjusting its lightness, darkness, and saturation. This evokes a feeling of unity and harmony while still creating contrast.

![Monochromatic color scheme example](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/lecture-what-is-color-theory-in-design-11.png)
And finally, here are some tips for using color effectively in web development:

* Create a color scheme that defines your website's branding.
* Use colors to evoke the emotions and perceptions that align with your goals.
* Choose colors with enough contrast to make your website accessible for everyone.
* Use color to highlight important elements of your website, like buttons.
* Use color consistently and use it to create a visual hierarchy.

*Color theory is a core aspect of design. By understanding color psychology, harmonies, and accessibility, you can create effective designs, evoke emotions, and enhance user experience*.

## What Are Named Colors in CSS, and When to Use Them?

In CSS, colors play a crucial role in designing web pages, enhancing readability, setting the mood, and improving user experience. One of the simplest ways to define colors in CSS is by using named colors. Named colors are predefined color names recognized by browsers. Here is an example of using a named color for a paragraph element:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
p {
  color: red;
}
```

In this example, we're using the named color `red` to style the text in a paragraph.

Named colors in CSS are a collection of 140 standard color names like `red`, `blue`, `yellow`, `aqua`, `fuchsia`, `black`, and so on. *These names are simple to use and make your code more readable, and they are self-descriptive*.

Named colors are useful for quick prototyping, simple designs, and improving code readability. Here is an another example of using named colors for an `h1` selector:

```html
<link rel="stylesheet" href="styles.css" />
<h1>This is a heading</h1>
```

```css
h1 {
  color: navy;
  background-color: lightgray;
}
```

In this example, the heading text will be styled in navy, with a light gray background. The readability of the code improves since named colors provide an immediate visual understanding of the intended style.

*Named colors in CSS are convenient but limited, with only 140 available options. They may not offer the precise shade needed for more detailed designs*.

Named colors in CSS are a great way to apply colors quickly and descriptively. While they are useful for basic designs, prototyping, and improving code readability, their limited range makes them less suitable for complex designs requiring precise color control.

By understanding the strengths and limitations of named colors, you can determine when it’s best to use them over more detailed color models like RGB or HSL, which you will learn about in future lessons.

## What Is the RGB Color Model, and How Does the RGB Function Work in CSS?

When working with colors in CSS, understanding the RGB color model is essential. RGB stands for Red, Green, and Blue — the primary colors of light. These three colors are combined in different intensities to create a wide range of colors.

The RGB color model is an additive color model, which means colors are created by combining light at varying intensities.

The intensity of each color can range from `0` (which means no light) to `255` (which means full light). By mixing different levels of red, green, and blue, you can produce any color you see on your screen. For example:

* Black is represented by `rgb(0, 0, 0)`, which means no light for any of the three colors.
* White is represented by `rgb(255, 255, 255)`, which means full light intensity for all three colors.
* Red is represented by `rgb(255, 0, 0)`, with full intensity for red and none for green or blue.

In CSS, the `rgb()` function allows you to define colors using the RGB color model. *The function takes three values, each representing the intensity of red, green, and blue light, respectively*. Here is the basic syntax:

```css
element {
  color: rgb(red, green, blue);
}
```

The values for red, green, and blue can range from `0` to `255`, where `0` represents the absence of that color, and *`255` represents full saturation*. Here is an example of how you might use the `rgb()` function in CSS:

```html
<link rel="stylesheet" href="styles.css" />
<p>This is a paragraph.</p>
```

```css
p {
  color: rgb(255, 0, 0);
}
```

This code would change the text color of the paragraph to red because the red value is set to `255`, while green and blue are set to `0`.

CSS also provides *the `rgba()` function, which adds a fourth value —alpha— that controls the transparency of the color*. The alpha value ranges from `0` (completely transparent) to `1` (completely opaque). Here is an example of using `rgba()`:

```html
<link rel="stylesheet" href="styles.css" />
<div>This is a div.</div>
```

```css
div {
  background-color: rgba(0, 0, 255, 0.5);
}
```

This code would apply a semi-transparent blue background to a `div` element because the red and green values are set to `0`, the blue value is set to `255`, and the alpha value is set to `0.5` (50% transparency).

The RGB color model is especially useful for digital media because it directly corresponds to how screens display colors. Monitors and displays use tiny red, green, and blue pixels to create the colors you see. By controlling the intensity of these pixels through RGB values, you can achieve a wide range of colors for your web design.

Additionally, the RGB model is ideal when working with dynamic designs. For instance, if you want to create animations or color effects that require real-time changes, the flexibility of the RGB function allows you to modify colors programmatically.

By understanding the RGB color model and how to use the `rgb()` and `rgba()` functions in CSS, you'll have greater control over how colors are displayed on your web pages. You can create vibrant designs, transparency, and even programmatically adjust colors for dynamic effects.
