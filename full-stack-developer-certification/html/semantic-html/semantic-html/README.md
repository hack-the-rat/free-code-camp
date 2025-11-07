# Importance of Semantic HTML

## Why Should You Care About Semantic HTML?

*Semantics are the meaning of words, or phrases, in a language.* In HTML, which is a language, elements have their own semantic meaning too. In fact, you can think of your HTML document like you would a text document. And much like a text document, you might have headings, images, bold text, and other formatting.

The semantic meaning of an element refers to what special information that element conveys. The semantic meaning of a `p` element, for example, is a paragraph of text:

**Example Code**
```<p>Let me tell you about my fantastic holiday in Paris.  I saw the impressive Eiffel Tower up close!</p>```

Most elements have semantic meaning. *The `div` element is one of the very few that does not.* But why is this important?

First and foremost, *using proper semantic HTML will ensure the best experience for users with assistive technology like screen readers*. But also, *semantic HTML can improve your search rankings*. This is referred to as search engine optimization, or SEO.

Finally, *using correct semantic elements can improve your development experience*. Rather than having to sift through a bunch of developments to find your navigation bar, you can edit the `nav` element directly and know what you're changing. Throughout this section, you will learn more about these topics, how to use semantic elements, and why semantic HTML is so important.

## Why is it Important to Have Good Structural Hierarchy?

The most important aspect of creating a structural hierarchy is the proper use of heading elements. Heading elements are numbered as `h1`, `h2`, `h3`, and so on. These numbers represent the heading level for that element.

Much like a text document, you do not want to use heading levels in the incorrect order. Your `h1` element is your top-level heading. You will rarely have more than one of these on a page, and it should typically come before all of your content.

Your `h2` element is your subheading. It should always come after your `h1` and might come after some introductory text. Unlike an `h1` element, you can have multiple `h2` elements on your page. You'll often do this to delineate different sections of content.

Following the pattern, *your `h3` element should always come after an `h2` element*. That is, you should never skip directly from `h1` to `h3`. You can, however, have multiple heading elements at the same level. For example, this code is correct:

```<div> <section> <h1>freeCodeCamp</h1> <h2>Learn Front-End Development</h2> <h2>Learn Back-End Development</h2> </section> </div>```

But the code in [this link](https://codesandbox.io/p/sandbox/l4lsct) would not be correct, because `h3` comes before `h2`.

Move the `h2` element above the `h3` so it is semantically correct.

It may be tempting to use a specific heading element because of its styling, such as `h1` for large text:

```<article> <p>Here is some <h1>Large Text</h1> </p> </article>```

Instead, you should *choose the appropriate element for your document structure and use CSS to achieve the styling you'd like*.

*Using the right hierarchy is important for accessibility.* Assistive technologies, like screen readers, rely on the structure of a web page to determine how to parse and announce that web page to the user. Using an `h3` element after an `h1` might cause a screen reader user to believe they have accidentally skipped over important content, due to the lack of an `h2` element.

*Proper structure is also important for SEO*. Search engines use automation to parse the content of your web page and determine when and where it should show up in results. If your structure is malformed, search engines may not be able to rank you very well in the relevant search results.

*Finally, depending on how incorrect your structure is, your HTML may not even be technically valid.* When this happens, the web browser has to effectively guess what you meant to do. And what it guesses might not even be what you want at all.

As you have learned today, there are many reasons to use the proper structural hierarchy for your page. Keep this in mind as you build new projects.
