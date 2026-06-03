# Working with Pseudo-Classes and Pseudo-Elements in CSS

## What Are Pseudo-classes, and How Do They Work?

*Pseudo-classes are special CSS keywords that allow you to select an element based on its specific state or position*. The element's state or position could include:

* When it's active.
* When it's being hovered over by a mouse.
* When it's the first child of a parent.
* When it's the last child of a parent.
* When a link has been visited.
* When it's disabled.

To use a pseudo-class, you add it to the selector by using a colon (`:`) followed by the name of the pseudo-class:

```css
selector:pseudo-class {
  /* CSS properties */
}
```

Let's see how you can use a pseudo-class to represent each of the states and positions we already mentioned.

The `:active` pseudo-class lets you select the active state of an element, like clicking on a button:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
```

```css
button:active {
  background: greenyellow;
}
```

The `:hover` pseudo-class defines the hover state of an element. An example would be hovering over a button or link:

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Hover over me!</a>  
```

```css
a:hover {
  text-decoration: none;
  color: white;
  background: crimson;
}
```

The `:first-child` pseudo-class selects an element that is the first child of its parent element. Here's an example of targeting the first paragraph element in a `div` container:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:first-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

The first paragraph element in that `div` will receive the `lightcoral` background color and `padding` of `0.4rem` on all four sides.

The `:last-child` pseudo-class targets the last element that is the child of its parent. Here is an example of targeting the last paragraph element in the container `div` element:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:last-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

The `:visited` pseudo-class lets you style a link the user has already visited:

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: purple;
}
```

The `:disabled` pseudo-class lets you style an interactive element in disabled mode:

```html
<link rel="stylesheet" href="styles.css" />
<button disabled>Disabled Button</button>
```

```css
button:disabled {
  background-color: lightgray;  
}
```

As you can see, pseudo-classes let you style elements based on user interactions, like hovering or visiting a link. This makes your website feel more interactive.

Apart from the pseudo-classes already mentioned, there are others like:

* `:focus`
* `:first-of-type`
* `:last-of-type`
* `:nth-of-type`
* `:modal`
* `:enabled`
* `:checked`
* `:required`, and more.
