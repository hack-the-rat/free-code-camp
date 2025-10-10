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

## What Are IDs and Classes, and When Should You Use Them?

The `id` attribute adds a unique identifier to an HTML element. In this example, there is an `h1` element with an `id` of `title`:

**Example Code**
```<h1 id="title">Movie Review Page</h1>```

You can reference the `id` name of `title` within your JavaScript or CSS. Here's a CSS example referencing the `id` of `title` to change the text `color` to `red`:

**Example Code**
```#title { color: red; }```

The hash symbol (`#`) in front of `title`, tells the computer you want to target an `id` with that value. `id` names should not be used more than once, and they should always be unique. *Another thing to note about `id` values, is that they cannot have spaces in them.* Here is an example of applying the words `main` and `heading` to an `id` attribute value:

**Example Code**
```<h1 id="main heading">Main heading</h1>```

*Browsers will see this space as part of the `id` which will lead to unwanted issues when it comes to styling and scripting.* `id` attribute values should only contain letters, digits, underscores, and dashes.

In contrast to the `id` attribute, the `class` attribute value does not need to be unique and can contain spaces. Here is an example of applying a class called `box` to a `div` element:

**Example Code**
```<div class="box"></div>```

If you wanted to add multiple class names to an element, you can do so by separating the names by a space. Here is an updated example applying multiple classes to a `div` element:

**Example Code**
```<div class="box red-top"></div>```

To apply a set of styles to that `box` class, you can reference that class inside your CSS. Here is an example of setting `width`, `height`, and `border` properties to the element with the `class` name of `box`:

**Example Code**
```.box { width: 200px; height: 200px; border: 2px solid black; }```

The dot symbol (`.`) in front of `box`, tells the computer you want to target a `class` with that value. When the code runs, it will search through all of your HTML document to find all elements with that class name and apply those styles.

So, to recap, when should you use an `id` versus a `class`? *Classes are best used when you want to apply a set of styles to many elements. If you want to target a specific element, it is best to use `id` because those values need to be unique.*
