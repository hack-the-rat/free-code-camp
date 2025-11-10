# Understanding Nuanced Semantic Elements

## When Should You Use the Emphasis Element Over the Idiomatic Text Element?

These elements are very closely related to the concepts of presentational and semantic HTML. The idiomatic text element, `i`, was originally used for presentational purposes to display the text in italics. But now, it is frequently used for highlighting alternative voice or mood, idiomatic terms from another language, technical terms, and thoughts.

Here is an [example](https://codesandbox.io/p/sandbox/kvdf65) from the official HTML spec, using the `i` element to show an idiomatic phrase in French.

The `lang` attribute inside the open `<i>` tag is used to specify the language of the content. In this case, the language would be French. *The `i` element does not indicate if the text is important or not, it only shows that it's somehow different from the surrounding text.*

If you do need to emphasize the importance of the text, you can use a similar semantic element called the emphasis element, `em`. This is usually recommended if you need to provide more context. You should use this element for parts of the text that require a special emphasis compared to surrounding text. It's usually limited to only a few words, because it can alter the meaning of the sentence.

This is an [example](https://codesandbox.io/p/sandbox/mdr49t) of the emphasis element within a paragraph.

You can see the sentence `Never give up on your dreams`. Notice that the word `your` will be emphasized, because it's inside this element. In the browser you would see the word `your` is italicized to tell readers that this is an important word in the sentence.

*Even if it looks the same when the text was inside the idiomatic text element, the semantic emphasis element conveys its meaning and importance behind the scenes.*

It's important to know that these elements should not be used for presentational purposes only. *If you need to display the text in italics, but the text doesn't have a special purpose, style, or meaning in the paragraph, you should use CSS instead*.

## When Should You Use the Strong Element Over the Bring Attention To Element?

The "bring attention to" element, `b`, is commonly used to highlight keywords in summaries, or product names in reviews. Usually, browsers display this text in boldface. Here's an [example](https://codesandbox.io/p/sandbox/ggh4x7) using the `b` element to highlight product names in this review:

The browser renders these parts of the text as bold text. This visual emphasis will draw readers attention to the product names.

If you need to emphasize the importance of the text, you should use the `strong` element instead of the `b` element.

`strong` is a semantic HTML element that emphasizes text that is crucial, or urgent. Here is an [example](https://codesandbox.io/p/sandbox/kflqjg) where the `strong` element is used to label a very important warning about the potential allergic reactions that customers may have to a product:

The `strong` element communicates that sense of urgency.

Visually both are very similar, because they are both rendered as bold by default. But their meanings are quite different. While the *"bring attention to" element only draws attention to the text, without indicating the higher level of importance*, *the `strong` element does more than that. It conveys a sense of importance, or urgency. This is their main difference*.

To choose between them, consider the purpose of the text and its importance within the surrounding content.
