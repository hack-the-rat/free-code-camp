# Working with Text and Time Semantic Elements

## How Do Block and Inline Quotes Work in HTML?

In HTML, quoted elements are used to distinguish quoted text from the surrounding content. This gives the quoted text a format that is easy to identify.

*You should use the block quotation element for representing a section quoted from another source. It's mainly used for extended quotations.* If the source of the quote has an address, you can cite it with the `cite` attribute. The value of this attribute should be a valid URL. This is an [example](https://codesandbox.io/p/sandbox/g4xckh) of a quote within a block quotation element:

This element has a `cite` attribute. The value of the `cite` attribute is the URL of the source. While this attribute doesn't change the presentation of the block quote, it's very helpful for giving screen readers and search engines more information about the quote. In the browser, you'll see that the text is slightly indented.

If you want to start and end the block quote with quotation marks, you may need to write them explicitly within the text. You can write the text directly within the block quotation element, like I just did, or wrap it within one or more paragraph elements. This is helpful when the text has multiple paragraphs, but you want to keep them within the same block quote. Here's an [example](https://codesandbox.io/p/sandbox/f7hqt9) with four paragraphs:

All the paragraphs are contained within the same block quotation element, so they are part of the same quotation. You can see that the element has a `cite` attribute with the URL of the source. In the browser, you'll see that the four paragraphs are aligned relative to each other, but they are indented relative to their container.

So far I've been using the `cite` attribute to attribute the source of the quotation, but the attribute doesn't really show the source to the user. It only works behind the scenes.

If you want to attribute the source visually, you can add a citation element, `cite`, outside of the block quotation element. This is different from the `cite` attribute. *The citation element is an HTML element that you can use to mark up the title of a referenced creative work like a book article, song, film, website, or research paper.* Here's an [example](https://codesandbox.io/p/sandbox/ttyrv7):

The block quotation element contains quoted text. Below the element you can see a paragraph element with the name of the author, followed by a citation element. The citation element contains the title of the book where the quotation came from.

If you go to the browser, now the source will be clearly visible and see that the quote comes from a book written by Quincy Larson. The title of this book is `How to Learn to Code and Get a Developer Job`.

You should use block quotes like these for long quotations from other sources. But sometimes you will only need to quote a few words within a larger paragraph.

That's exactly what the inline quotation element is for. It's for short inline quotations from other sources. Most modern browsers will add quotation marks around the inline quote automatically when you use this element. This is an [example](https://codesandbox.io/p/sandbox/rpv75n):

You can see a paragraph element that contains text. Part of the text is an inline quote, because it's within the inline quotation element. You can also add a `cite` attribute to attribute the source.

This works exactly the same as it did with the block quotation element. There won't be any visual changes, but it will give screen readers and search engines more information about the quote.

In the browser, you'll see that the quoted text is part of the paragraph and it's surrounded by quotation marks. Most modern browsers will add these quotation marks automatically.

What's the difference between block quotes and inline quotes? You should use block quotes for extended quotations from other sources and inline quotes for short quotations from other sources that should be part of existing paragraphs.

## How Do You Display Abbreviations in HTML?

An abbreviation is a shortened form of a word or phrase. For example, "Dr" followed by a period, is an abbreviation for the word "doctor".

There are two common forms of abbreviations: acronyms and initialisms.

An acronym is a word formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

GUI is an example of an acronym. It stands for Graphical User Interface. By taking the first letters of each word G, U, and I, you get the acronym GUI.

An initialism is formed from the initial letters of a phrase, with each letter representing the first letter of a word in that phrase.

For example, HTML is an initialism; it stands for HyperText Markup Language and is pronounced by spelling out each letter H, T, M, L.

Both acronyms and initialisms are types of abbreviations. The distinction is acronyms are pronounced as words and initialisms are pronounced as individual letters.

They are very helpful for writing more concise text, especially when they are well-known and easy to understand in a given context.

If you need to *display abbreviations such as acronyms or initialisms in HTML, the abbreviation element* is exactly what you're looking for. *You should always explain their full meaning when you use them for the first time. Then you can use the abbreviation element to highlight them and provide more details.*

Here's an [example](https://codesandbox.io/p/sandbox/5kjmjt) where you can see a paragraph with the sentence `HTML is the foundation of the web`:

The initialism HTML is within an abbreviation element. In the browser, you'll see that nothing has really changed. It still looks like normal text. The abbreviation element is providing helpful context behind the scenes, but users will still see the initialism as normal text.

*If you want to help users understand what this initialism means, you can show its full form with the `title` attribute.*

The `title` attribute is optional, but if you decide to include it, it must be a human readable description of the abbreviation, acronym, or initialism.

Let's take the same [example](https://codesandbox.io/p/sandbox/x86sgw) as before, but add the `title` attribute. It will be `HyperText Markup Language`, the expanded form of the initialism:

Usually, the style of the abbreviation element will change when you add this attribute. The specific style will depend on the browser. Some browsers may display a dotted underline, while others may convert the contents to small caps, or even assign certain default styles, such as a dotted underline. When the user hovers over the abbreviation with the mouse, the full form is displayed as a tooltip.

While you don't necessarily need to use the abbreviation element for every abbreviation on your web page, it's recommended for those that might be unclear and those that might need additional context.

You should use your best judgment to find the right balance between information and presentation to avoid cluttering the text while being clear and concise.
