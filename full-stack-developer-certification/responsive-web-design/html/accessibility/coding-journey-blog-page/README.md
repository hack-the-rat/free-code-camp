# Debug a Coding Journey Blog Page

## Step 1

Camperbot has created a coding journey blog page, but it looks like the page has some accessibility issues and bad practices. Your job in this workshop, is to fix these issues for Camperbot.

The first set of errors has to deal with the use of headings. In a prior lesson, you learned that it is best practice to only use one `h1` per page. But it looks like Camperbot is a using a few `h1`s.

Leave the `<h1>Welcome to Camperbot's Blog</h1>` alone and change the other `h1` elements to `h2` elements.

## Step 2

It looks like there are still some issues with the use of headings on the page. If you look at the first `div` element, there are two `h4` elements used as subheadings. A better practice would be to use `h3` elements for these subheadings since they are a level below the `h2` element.

Change the two `h4` elements to `h3` elements.

## Step 3

In the second post section, there is an `h5` element being used. It would be more appropriate to use an `h3` element here.

Change the `h5` element to an `h3` element.

## Step 4

Below the main title of the page, there is a navigation section that contains links to each blog post.

This section should be wrapped in a `nav` element to indicate its purpose as a navigation landmark.

## Step 5

In the blog page, there are a total of three blog posts wrapped inside generic `div` elements. But it would be better to use semantic elements to wrap each post.

Change each `div` element that wraps each blog post to an `article` element.

## Step 6

Since the entire section containing the blog posts represents the main content of the page, it should be wrapped in a `main` element. This helps screen readers and other assistive technologies understand the structure of the page better.

## Step 7

For the last part of the workshop, there are a few changes needed for the contact section at the bottom.

The first change would be to wrap the contact section inside of a `footer` element. This will help screen readers identify this section as the footer of the page.

## Step 8

Right now the `footer` section has an `h3` heading. But it should be an `h2` heading to maintain a proper heading hierarchy.

Change the `h3` to an `h2`.
