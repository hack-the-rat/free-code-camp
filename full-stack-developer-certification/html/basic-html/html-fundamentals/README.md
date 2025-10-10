# HTML Fundamentals

In these lessons, you will learn about HTML fundamentals like the `div` element, the `id` and `class` attributes, the HTML boilerplate, HTML entities, and more.

## What are Div Elements and When Should You Use Them?

Now that we understand what HTML is, let's move onto the fun stuff! I am going to look at the Content Division Element - or in other words, the *div*:

**Example Code**
```<div></div>```

I like to think of the `div` as a beautiful being that can be anything you want it to be. We can give a `div` a `height`, we can give it a `width`, and we can give it a background color using CSS - or in other words styling, which we will cover in lessons coming up.

We can also use it in a very basic form without styling, to hold other elements together. So for example, we can create a `div` and put a heading in it, and put a paragraph in it, and now these two elements will be grouped together:

**Example Code**
```<div><h1>I am a heading</h1><p>I am a paragraph</p></div>```

Just be aware that there might be better elements to use when grouping these together. You might choose a `section` element, for example:

**Example Code**
```<section><h1>I am a heading</h1><p>I am a paragraph</p></section>```

This is because the `section` element has semantic meaning. Semantics are the meaning of words or phrases in a language. In HTML, which is a language, elements have their own semantic meaning too. So, this means *if you use a `section` element, the browser will pick up its semantic meaning and understand to treat this as a section* - on desktops, mobiles, you name it.

We will dive into this topic further later on. For now, just know that the `div`, does not have this. It's like a mysterious ghost. Let's see what else we can do to a `div`, in the next lesson.
