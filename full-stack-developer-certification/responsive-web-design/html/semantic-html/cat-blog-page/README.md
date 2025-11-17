# Build a Cat Blog Page

## Step 1

In this workshop, you will practice working with semantic HTML by building a blog page dedicated to Mr. Whiskers the cat.

The first section you will build out is the page *header*.

The `header` element is used to represent introductory content like page navigation and other introductory information.

Here is an example using the `header` element:

**Example Code**
``<header> <h1>Main Page Title Goes Here</h1> <img src="example-logo.png" alt="Example logo" /> </header>``

Inside the `body` element, add a `header` element.

## Step 2

The `header` will be responsible for displaying main title, image and page navigation for the blog.

Inside the `header` element, add an `h1` with the text of `Welcome to Mr. Whiskers' Blog Page!`.

## Step 3

In this introductory content, you will want to show an image of Mr. Whiskers with a caption.

Below the `h1` element, start by adding a `figure` element.

Inside the `figure` element, add an `img` element.

The `src` attribute of the `img` should have a value of `"https://cdn.freecodecamp.org/curriculum/css-photo-gallery/1.jpg"` and the `alt` text should have a value of `"a cat in the garden"`.

Below your `img` element, add a `figcaption` with the text `Mr. Whiskers in the Garden`.

## Step 4

For your blog, there should be a way for users to navigate to different sections on the page.

The `nav` element is used to provide navigation links to other sections in the document or other sections in the website. A lot of times you will see the `nav` element used for menus or table of contents.

Here is an example of using the `nav` element:

**Example Code**
``<nav> <ul> <li><a href="#">Home</a></li> <li><a href="#about">About</a></li> <li><a href="#contact">Contact</a></li> </ul> </nav>``

Below your `figure` element, add a `nav` element with a `ul` element nested inside.

Inside the `ul` element, add three `li` elements.

## Step 5

Inside each of the `li` elements, you will need to have an anchor element.

For the first anchor element, the text should be `About` and the `href` attribute value should be `"#about"`. The hash symbol in front of the `about` represents an `id` name which be added later on in the project.

For the second anchor element, the text should be `Posts` and the `href` attribute value should be `"#posts"`.

For the third anchor element, the text should be `Contact` and the `href` attribute value should be `"#contact"`.

## Step 6

Now that you are finished building out the page header, you will need to start adding your main content.

Below your `header`, add a `main` element.

## Step 7

The first section on the page will be the about section. The section will introduce Mr. Whiskers and give users an idea of what this blog is about.

Inside your `main` element, add a `section` element with the `id` attribute set to `"about"`.

Inside the `section` element, add an `h2` with the text of `About`.

## Step 8

Below your `h2` element, add a paragraph element with the text of `Hi there! I'm Jane Doe, a passionate writer who finds endless inspiration in the antics of my beloved cat, Mr. Whiskers.`.

Below your paragraph element, add another paragraph element with the text of `His playful nature and boundless energy keeps me on my toes. I love him so much.`

## Step 9

Now that you have added the about section, try clicking on the `About` link to see the page jump down to that section.

The next section in the blog page will be a list of posts talking about Mr. Whiskers.

Add another `section` element with an `id` set to `"posts"`.

Inside the `section` element, add an `h2` element with the text of `Posts`.
