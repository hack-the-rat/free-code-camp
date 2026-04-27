# CSS Specificity, the Cascade Algorithm, and Inheritance

## What Is CSS Specificity, and the Specificity for Inline, Internal, and External CSS?

CSS specificity is a fundamental concept that determines which styles are applied to an element when multiple rules could apply.

Understanding specificity helps developers resolve conflicts between different CSS rules and ensures that the desired styles are consistently applied.

CSS specificity is calculated based on the type of selectors used.

*The highest specificity is attributed to inline styles*, which are applied directly to an element through the `style` attribute.

In this example, the first paragraph will be red while the other `p` elements will be blue. This is because inline styles have a higher specificity than type selectors like the `p` selector shown in the `styles.css` file.

```html
<link rel="stylesheet" href="styles.css">

<p style="color: red;">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
p {
  color: blue;
}
```

Following this, ID selectors have a high level of specificity.

```html
<link rel="stylesheet" href="styles.css">

<p id="para">Red paragraph</p>
<p>Other paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para {
  color: red; 
}

p {
  color: blue;
}
```

Next, class selectors, attribute selectors, and pseudo-classes come into play.

Examples include class selectors such as `.container` and `.button`, attribute selectors like `[type="text"]`, and pseudo-classes such as `:hover`. These have a moderate level of specificity.

 **NOTE** : You will learn more about pseudo-classes in future lessons.

In this example, the first paragraph will be red because an `id` selector has a higher specificity than classes and type selectors. The `.example-para` elements will have a color of green while the remaining paragraph elements will have a color of blue.

```html
<link rel="stylesheet" href="styles.css">

<p id="para">Example paragraph</p>
<p class="example-para">Other paragraph</p>
<p class="example-para">Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para {
  color: red; 
}

.example-para {
  color: green;
}

p {
  color: blue;
}
```

Type selectors, such as `div` and `h1`, and pseudo-elements like `::before` and `::after`, have a lower specificity compared to the previous groups.

 **NOTE** : You will learn more about pseudo-elements in future lessons.

```html
<link rel="stylesheet" href="styles.css">

<p id="para">Example paragraph</p>
<p>Other paragraph</p>
<p>Yet another paragraph</p>
```

```css
#para {
  color: red; 
}

p {
  color: blue;
}
```

Finally, *the universal selector, represented by an asterisk `*`, has the lowest specificity of all*.

Here is an example of setting the color for all elements to red using the `*` selector. You won't see any red elements though because there are ID and type selectors that override those styles which highlights the low specificity of the `*` selector.

```html
<link rel="stylesheet" href="styles.css">

<p id="para">Example paragraph</p>
<p>Other paragraph</p>
<p>Yet another paragraph</p>
```

```css
* {
  color: red;
}

#para {
  color: green; 
}

p {
  color: blue;
}
```

Specificity values are calculated as a four-part value `(a, b, c, d)`:

* `a`: Inline styles (`1` or `0`).
* `b`: Number of ID selectors.
* `c`: Number of class selectors, attribute selectors, and pseudo-classes.
* `d`: Number of type selectors, pseudo-elements, and universal selectors.

Each part of the specificity value carries different weight:

* **Inline styles** (`a`) have the highest weight, contributing a value of `1` to the first part of the specificity value.
* **ID selectors** (`b`) carry the next highest weight, with each ID contributing `1` to the second part of the specificity value.
* **Class selectors, attribute selectors, and pseudo-classes** (`c`) carry moderate weight, with each contributing `1` to the third part of the specificity value.
* **Type selectors and pseudo-elements** (`d`) have the lowest weight, with each contributing `1` to the fourth part of the specificity value.
* **Universal selector** (`*`): The universal selector contributes `0` to the specificity calculation and does not affect specificity. Its inclusion in a selector does not change the specificity value.

Inline CSS has the highest specificity because it is applied directly to the element. It overrides any internal or external CSS. The specificity value for inline styles is `(1, 0, 0, 0)`.

Here is another example of an inline style:

```html
<p style="color: red;">This text is red.</p>
```

Internal CSS is defined within a `style` element in the `head` section of the HTML document. It has lower specificity than inline styles. Both internal and external CSS share the same specificity level — the specificity is determined by the selectors used, not by where the CSS is defined. When two rules share equal specificity, the one that appears later in the document wins. So if an external stylesheet is linked after an internal `style` block, the external rules take precedence. If it's linked before, the internal rules win.

The specificity value for internal styles is determined by the selectors used. For example, an ID selector within internal CSS has a specificity value of `(0, 1, 0, 0)`.

```html
<head>
  <style>
    #text {
      color: blue;
    }
  </style>
</head>
<body>
  <div id="text">This text is blue.</div>
</body>
```

In this example, the text will be blue unless an inline style or a more specific selector is applied.

External CSS is linked via a `link` element in the `head` section and is written in separate `.css` files. Like internal CSS, the specificity of external styles is determined by the selectors used. External CSS provides the best maintainability for larger projects.

The specificity value for external styles is also determined by the selectors used. For example, a class selector within external CSS has a specificity value of `(0, 0, 1, 0)`.

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="text">This text's color is defined in an external CSS file.</div>
</body>
```

```css
.text {
  color: purple;
}
```

In this example, the text color is defined in the `styles.css` file and will be applied unless overridden by a more specific selector or an inline style.

## What Is the Universal Selector, and What Is Its Specificity?

The universal selector (`*`) is a special type of CSS selector that matches any element in the document.

It is often used to apply a style to all elements on the page, which can be useful for resetting or normalizing styles across different browsers.

The universal selector can be used to select all elements within a specific context or globally across the entire document.

Here is an example of using the universal selector for setting the `margin` and `padding` for the entire HTML document:

```html
<link rel="stylesheet" href="styles.css">

<h1>Heading element</h1>
<p>example paragraph element</p>
```

```css
* {
  margin: 0;
  padding: 0;
}
```

In this code example, the `*` selector resets the margin and padding of all elements to zero, which is a common technique used in CSS resets.

*The universal selector has the lowest specificity value of any selector. It contributes 0 to all parts of the specificity value `(0, 0, 0, 0)`.*

This means that any other selector, including type selectors, class selectors, ID selectors, and inline styles, will override the styles set by the universal selector.

Let's take a look at the following HTML and CSS example:

```html
<head>
  <style>
    * {
      color: blue;
    }
    p {
      color: red;
    }
    .highlight {
      color: green;
    }
    #unique {
      color: purple;
    }
  </style>
</head>
<body>
  <p id="unique" class="highlight">This text has multiple styles applied.</p>
</body>
```

The universal `*` selector sets the text color to `blue` for all elements.

However, the `p` type selector overrides this by setting the text color to `red` specifically for `p` elements.

If an element has the `highlight` class, the class selector takes precedence, changing the text color to `green`.

Finally, the `#unique` ID selector, which has the highest specificity, will override all others, setting the text color to `purple`.

## What Is the Specificity for Type Selectors?

Type selectors, also known as element selectors, target elements based on their tag name.

These selectors are fundamental in CSS and allow you to apply styles to all instances of a specific HTML element.

Type selectors are straightforward to use and are written simply as the tag name of the element you want to style.

Here is an example of a type selector targeting all paragraph elements on the page:

```html
<link rel="stylesheet" href="styles.css">

<p>Paragraph one</p>
<p>Paragraph two</p>
<p>Paragraph three</p>
```

```css
p {
  color: blue;
}
```

In this example, all `p` elements will have their text color set to `blue`.

Type selectors have a relatively low specificity compared to other selectors. *The specificity value for a type selector is `(0, 0, 0, 1)`.*

This means that type selectors will be overridden by class selectors, ID selectors, and inline styles, but can still apply styles unless those higher-specificity rules are present.

Let's take a look at an example where the class selectors will override the styles of the type selector.

Here is an example with two paragraph elements:

```html
<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
```

Both paragraph elements have a class called `para`.

Inside the CSS file, the type selector targets paragraphs, and the class selector targets elements with the `para` class.

```html
<link rel="stylesheet" href="styles.css">

<p class="para">I am a paragraph</p>
<p class="para">Here is another paragraph</p>
```

```css
p {
  color: blue;
}

.para {
  color: red;
}
```

All paragraphs on the page with the class of `para` will have the text color set to `red` instead of `blue` because class selectors have a higher specificity than type selectors.

## What Is the Specificity for Class Selectors?

Class selectors are a key part of CSS, allowing developers to target multiple elements with the same class attribute and apply consistent styling.

This makes them highly versatile and efficient for applying styles across a website.

Class selectors are defined by a period (`.`) followed by the class name. They can be applied to any element in the HTML document.

Here is an example using a class selector:

```html
<link rel="stylesheet" href="styles.css">
<p class="highlight">Example paragraph</p>
```

```css
.highlight {
  color: green;
}
```

In this example, any element with the class `highlight` will have its text color set to `green`.

*Class selectors have a higher specificity than type selectors but lower than ID selectors and inline styles*.

*The specificity value for a class selector is `(0, 0, 1, 0)`.* This means that class selectors can override type selectors, but they can be overridden by ID selectors and inline styles.

Class selectors can be combined with other selectors to create more specific rules.

Here is an example combining a paragraph type selector with a class selector:

```html
<link rel="stylesheet" href="styles.css">

<p class="bold-text">Example paragraph</p>
<p class="bold-text">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
p.bold-text {
  font-weight: bold;
}
```

This rule applies only to `p` elements that also have the `bold-text` class, making their text bold.

## What Is the Specificity for ID Selectors?

ID selectors are among the most powerful selectors in CSS, allowing developers to apply styles to specific elements with unique identifiers.

This makes them highly effective for targeting individual elements that need unique styling.

ID selectors are defined by a hash symbol (`#`) followed by the ID name. They should be unique within an HTML document, meaning no two elements should share the same ID.

Here is an example using an ID selector:

```html
<link rel="stylesheet" href="styles.css">
<p id="unique">Example paragraph</p>
<p>Another paragraph</p>
<p>Yet another paragraph</p>
```

```css
#unique {
  color: purple;
}
```

In this example, the element with the ID `unique` will have its text color set to `purple`.

*ID selectors have a very high specificity, higher than type selectors and class selectors, but lower than inline styles*. *The specificity value for an ID selector is `(0, 1, 0, 0)`.*

This means that ID selectors can override class selectors and type selectors but can be overridden by inline styles.

## What Is the important Keyword, and What Are the Best Practices for Using It?

*The `!important` keyword in CSS is used to give a style rule the highest priority, allowing it to override any other declarations for a property*.

When used, it forces the browser to apply the specified style, regardless of the specificity of other selectors.

Let's say you have an HTML paragraph element with inline styles like this:

```html
<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

In this example, the paragraph element has a background color set to `lightblue` and a text color set to `black`.

The CSS file applies the following styles to the paragraph element:

```html
<link rel="stylesheet" href="styles.css">

<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

```css
.para {
  background-color: black;
  color: white;
}
```

Since inline styles have a higher precedence than class, ID and type selectors, the black background color and white text color will not be applied to that paragraph element.

To override those inline styles, you can use the `!important` keyword like this:

```html
<link rel="stylesheet" href="styles.css">

<p class="para" style="background-color: lightblue; color: black;">
  This is a paragraph.
</p>
```

```css
.para {
  background-color: black !important;
  color: white !important;
}
```

The `!important` keyword is used after the CSS value and before the semicolon.

Now the paragraph element will have those black and white colors applied because the inline styles are being overridden with the use of the `!important` keyword.

The `!important` keyword in CSS is used to give a style rule the highest priority, effectively overriding other declarations, including those with higher specificity and inline styles.

However, the `!important` keyword does not change the specificity of the CSS selector itself. It simply ensures that the rule with `!important` is applied, even if there are other conflicting rules with higher specificity.

*Another appropriate use case for the `!important` keyword is to override styles from third-party libraries or frameworks when you do not have control over the original CSS*.

However, overusing the `!important` keyword can lead to difficulties in maintaining and debugging your CSS, as it breaks the natural cascading of styles and can lead to unintended consequences.

So, it is best to use the `!important` keyword sparingly.
