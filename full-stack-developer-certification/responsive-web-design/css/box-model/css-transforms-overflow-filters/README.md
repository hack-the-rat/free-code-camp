# Working with CSS Transforms, Overflow, and Filters

## What Is Overflow in CSS, and How Does It Work?

*Overflow refers to the way elements handle content that exceeds or overflows the size of the containing element*. For example, the text content of a `div` element can overflow out of its borders.

Overflow is two-dimensional, the x-axis determines horizontal overflow, and the *y-axis determines vertical overflow*.

Let's fix the overflow on our example using the `overflow-y` CSS property. First we can hide the overflow entirely with `hidden` like this:

```html
<link rel="stylesheet" href="styles.css">

<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  height: 200px;
  overflow-y: hidden;
}
```

This resolves the overflow problem but now the extra content becomes completely unreachable. Instead we can use scroll to force the element to become scrollable:

```html
<link rel="stylesheet" href="styles.css">

<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  height: 200px;
  overflow-y: scroll;
}
```

Now this turns the container into a scrollable element, allowing all the content to be viewed by scrolling the element independently of the page scroll. We could also let the browser handle it on its own with `auto` value. It's worth noting that *vertical scrolling is generally considered okay while horizontal scrolling might be questioned as it's generally not a common design decision*.

With this knowledge, you can now control how your content overflows giving you more power over the layout of your pages.
