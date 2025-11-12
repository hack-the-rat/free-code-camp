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
