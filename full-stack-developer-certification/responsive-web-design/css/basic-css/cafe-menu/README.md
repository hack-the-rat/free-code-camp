# Design a Cafe Menu

## Step 1

In this workshop, you will practice the basics of CSS (Cascading Style Sheets) by building a cafe menu.

Let's start by adding some menu content. Add a `main` element within the existing `body` element. It will eventually contain pricing information about coffee and desserts offered by the cafe.

## Step 2

The name of the cafe is `CAMPER CAFE`. So, add an `h1` element within your `main` element. Give it the name of the cafe in capitalized letters to make it stand out.

## Step 3

To let visitors know the cafe was founded in `2020`, add a `p` element below the `h1` element with the text `Est. 2020`.

## Step 4

There will be two sections on the menu, one for coffees and one for desserts. Add a `section` element within the `main` element so you have a place to put all the coffees available.

## Step 5

Create an `h2` element in the `section` element and give it the text `Coffee`.

## Step 6

Until now, you've had limited control over the presentation and appearance of your content. To change that, add a `style` element within the `head` element.

## Step 7

In previous lessons, you learned how to add `CSS` properties and values like this:

```css
element {
 property: value;
}
```

Center the content of the `h1` element by setting its `text-align` property to the value `center`.

## Step 8

In the previous step, you used a type selector to style the `h1` element. Center the content of the `h2` and the `p` elements by adding a new type selector for each one to the existing `style` element.

## Step 9

You now have three type selectors with the same styling. You can add the same group of styles to many elements by creating a list of selectors. Each selector is separated with commas like this:

```css
selector1, selector2 {
  property: value;
}
```

Delete the three existing type selectors and replace them with one selector list that centers the text for the `h1`, `h2`, and `p` elements.

## Step 10

You have styled three elements by writing CSS inside the `style` tags. This works, but since there will be many more styles, it's best to put all the styles in a separate file and link to it.

A separate `styles.css` file has been created for you. You can switch between files with the tabs at the top of the editor.

Start by rewriting the styles you have created into the `styles.css` file. Make sure you exclude the opening and closing `style` tags.

## Step 11

Now that you have the CSS in the `styles.css` file, go ahead and remove the `style` element and all its content. Once it is removed, the text that was centered will shift back to the left.

## Step 12

Now you need to link the `styles.css` file, so the styles will be applied again. Inside the `head` element, add a `link` element. Give it a `rel` attribute with the value of `"stylesheet"` and an `href` attribute with the value of `"styles.css"`.

**Note:** The `link` element is a void element, which means it doesn't have a closing tag. Void elements should be written as `<link>` rather than `<link></link>`.

## Step 13

For the styling of the page to look similar on mobile as it does on a desktop or laptop, you need to add a `meta` element with a special `content` attribute.

You learned about the viewport `meta` element in previous lessons.

Here is an example:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## Step 14

The text is centered again so the link to the CSS file is working. Add another style to the file that changes the `background-color` property to `brown` for the `body` element.

## Step 15

That brown background makes it hard to read the text. Change the `body` element's background color to `burlywood` so it has some color, but you are still able to read the text.
