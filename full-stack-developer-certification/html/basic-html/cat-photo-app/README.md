# Build a Cat Photo App

HTML stands for HyperText Markup Language and it represents the content and structure of a web page.

In this workshop, you will learn how to work with basic HTML elements such as headings, paragraphs, images, links, and lists.

## Step 1

In this workshop, you will continue working with basic HTML elements like headings, paragraphs, and lists by building a cat photo app.

Begin the workshop by adding an `h1` element with the text of `CatPhotoApp`.

## Step 2

Below the `h1` element, add an `h2` element with this text:

`Cat Photos`

## Step 3

Create a `p` element below your `h2` element and give it the following text:

`Everyone loves cute cats online!`

## Step 4

Commenting allows you to leave messages without affecting the browser display. It also allows you to make code inactive. A comment in HTML starts with `<!--`, contains any number of lines of text, and ends with `-->`.

Here is an example of a comment with the `TODO: Remove h1:`

**Example Code**
```<!-- TODO: Remove h1 -->```

Add a comment above the `p` element with this text:

`TODO: Add link to cat photos`

## Step 5

HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.

The `main` element is used to represent the main content of the body of an HTML document. Content inside the `main` element should be unique to the document and should not be repeated in other parts of the document.

**Example Code**
```<main><h1>Most important content of the document</h1><p>Some more important content...</p></main>```

Identify the main section of this page by adding a `<main>` opening tag before the `h1` element, and a `</main>` closing tag after the `p` element.

## Step 6

In the previous step, you put the `h1`, `h2`, comment, and `p` elements inside the `main` element. This is called *nesting*. Nested elements should be placed two spaces further to the right of the element they are nested in. This spacing is called indentation and it is used to make HTML easier to read.

Here is an example of nesting and indentation:

**Example Code**
```<main><h1>Most important content of the document</h1><p>Some more important content...</p></main>```

The `h1` element, `h2` element and the comment are indented two spaces more than the `main` element in the code below. Use the space bar on your keyboard to add two more spaces in front of the `p` element so that it is indented properly as well.

## Step 7

You can add images to your website by using the `img` element. `img` elements have an opening tag without a closing tag. An element without a closing tag is known as a *void element*.

Add an `img` element below the `p` element. At this point, no image will show up in the browser.
