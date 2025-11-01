# Working with Links

In these lessons, you will learn about links, the `target` attribute, different link states, absolute, and relative paths, and more.

## What Are the Different Target Attribute Types, and How Do They Work?

You may have seen the `target` attribute on anchor elements, or links. This important attribute tells the browser where to open the URL for the anchor element.

Click on the [link here](https://codesandbox.io/p/sandbox/qm722j) and you will be directed to the freeCodeCamp homepage in a new browser tab.

*There are four important possible values for this attribute.* Note that each value is preceded by an underscore.

The first value is `_self`, which is the default value. This opens the link in the current browsing context. *In most cases, this will be the current tab or window.*

The second value is `_blank`, which opens the link in a new browsing context. *Typically, this will open in a new tab. But some users might configure their browsers to open a new window instead.*

The third value is `_parent`, which opens the link in the parent of the current context. For example, if your website has an `iframe`, a `_parent` value in that `iframe` would open in your website's tab/window, not in the embedded frame.

The fourth value is `_top`, which opens the link in the top-most browsing context - think "the parent of the parent". This is similar to `_parent`, but the link will always open in the full browser tab/window, even for nested embedded frames.

There is a fifth value, called `_unfencedTop`, which is currently used for the experimental FencedFrame API. At the time of this lesson, you probably won't have a reason to use this one yet.

Selecting the right `target` value to control where your users end up is an important consideration when creating a website.
