# Working with Specialized Semantic Elements

## How Do You Display Mathematical Equations and Chemical Formulas in HTML?

*The superscript element is used to display a piece of text as a superscript.* A superscript is a symbol or letter printed above the normal line of text.

Here is an example using the superscript element to illustrate exponents (to see the previews, click on the [interactive editor](https://codesandbox.io/p/sandbox/hqjz6r)):

In this example, the number 2 is wrapped in `sup` tags to represent the superscript inside the paragraph. In the preview window, you will see that the second number 2 is smaller and slightly higher than the first number 2.

Common use cases for the superscript element would include exponents, superior lettering, and ordinal numbers. Here is an example using the superscript element for superior lettering (to see the previews, lick on the [interactive editor](https://codesandbox.io/p/sandbox/8ds5y8)):

Superior lettering refers to letters written in superscript, usually to indicate abbreviations. The letters `g` and `r` are wrapped inside superscript tags to illustrate the abbreviation in this example.

It is important to note that the superscript element should only be used for typographical reasons. If you want *to style a piece of text with a raised baseline, then you should use CSS instead of the superscript element*.

To represent chemical equations inside HTML, you would use the subscript element. This element uses a subscript which displays a lowered baseline using smaller text.

Here is an example of using the subscript element to show the chemical representation for carbon dioxide (to see the previews, lick on the [interactive editor](https://codesandbox.io/p/sandbox/rx452f)):

The number two is wrapped inside `sub` tags to illustrate that the character should be a subscript.

Common use cases for the subscript element include chemical formulas, footnotes, and variable subscripts.

## How Do You Represent Computer Code in HTML?

*The inline code element is used to represent short snippets of code inside text*. Common use cases for the code element would be for technical articles and documentation pages.

Here is an [example](https://codesandbox.io/p/sandbox/nmz5ms) of using the `code` element to show a CSS code snippet:

In this example, the CSS `color` property is used to set the text color to `blue`. By wrapping this code snippet inside `<code>` tags, it communicates to the browser that the text is a piece of inline code.

The browser will apply default styles for content inside of the `code` element. *The default styling is a monospaced font*.

The `code` element is meant to represent a single line of code. If you want to represent multiple lines of code, you will need to place a `code` element inside a preformatted text element.

*The preformatted text element is used to represent preformatted text*. Here is an [example](https://codesandbox.io/p/sandbox/xq2hw9) of using the preformatted text element to show a CSS declaration:

When using the `pre` element, you will need to be mindful of spacing because it will display exactly as written inside the HTML document.

In the browser, you will see that the code is indented several spaces to the right. If you were to change the indentation in the code example, then you will see a difference in indentation on the screen.

When it comes to including code examples inside your HTML document, you should use the `code` element for short inline examples.

If you need to display longer code snippets, then you will need to use the `pre` and `code` elements.
