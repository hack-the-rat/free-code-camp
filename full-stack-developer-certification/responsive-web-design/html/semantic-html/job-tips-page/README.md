# Build Quincy's Job Tips Page

## Step 1

In this workshop, you will practice working with semantic HTML by building a web page that includes some of Quincy Larson's tips for landing a developer job. The basic HTML boilerplate has been prepared for you.

Begin by creating an `h1` element with the text `Quincy's Tips for Getting a Developer Job`.

## Step 2

Now, create a paragraph element below the `h1` element. Inside this paragraph add the text `Learning to code is hard, but as Quincy Larson says, You can become a developer.`.

## Step 3

In a previous lesson you learned that the `q` element is used to distinguish quoted text from the surrounding content.

Here is an example:

**Example Code**
```<p>Nancy said, <q>Learning is fun!</q></p>```

Most modern browsers will add quotation marks around an inline quote automatically when you use the `q` element.

Inside the paragraph wrap `You can become a developer.` in an inline quotation element, keeping the rest of the paragraph unchanged.

## Step 4

If the source of a quote is a website, you can cite it with the `cite` attribute. The value of this attribute should be a valid URL. While this attribute doesn't change the presentation of the block quote, it's very helpful for giving screen readers and search engines more information about the quote.

Here is an example of an inline quotation element with a `cite` attribute:

**Example Code**
```<p>Nancy said, <q cite="https://example.com">Learning is fun!</q></p>```

Add the `cite` attribute to the inline quotation element with this URL:

`https://www.freecodecamp.org/news/learn-to-code-book/`

## Step 5

Below the paragraph element, add a `main` element and nest three `section` elements inside it.

## Step 6

Inside the first `section` element, add an `h2` element with the text `Envisioning Success`.

## Step 7

Below the `h2` element, you will add another quote by Quincy. This time, the quote won't be part of a larger paragraph. Instead, the whole paragraph will be a quote. In order to distinguish quoted text like this, you should use the block quotation element: `blockquote`. In the browser, you'll see that the text is slightly indented.

Here is an example of a block quotation element with quoted text:

**Example Code**
```<blockquote>The first thing you should consider about education is this is an economic decision.</blockquote>```

Now, inside the first section, add a block quotation element below the `h2` element with the text `Can you imagine what it would be like to be a successful developer? To have built software systems that people rely upon?`.

## Step 8

Exactly like the inline quotation element, you can also add a `cite` attribute to a block quotation element.

Here is an example of a block quotation element with a `cite` attribute:

**Example Code**
```<blockquote cite="https://www.freecodecamp.org/news/is-college-worth-it/">The first thing you should consider about education is this is an economic decision.</blockquote>```

Now, add a `cite` attribute to the block quotation element with the URL `https://www.freecodecamp.org/news/learn-to-code-book/`.

## Step 9

Below the block quotation element, add a paragraph element with the text `—Quincy Larson, How to Learn to Code and Get a Developer Job [Full Book]`.
