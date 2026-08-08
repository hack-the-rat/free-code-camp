# Design a Registration Form

## Step 1

In this workshop, you will learn how to style forms by designing a registration form.

All of the HTML boilerplate (`DOCTYPE`, `html`, `head`, and `body`) has been provided for you.

Within the `body`, add a heading to give context to the form by using an `h1` element with the text `Registration Form`.

## Step 2

Below the heading, use the following text within a paragraph element to encourage users to register:

```md
Please fill out this form with the required information
```

## Step 3

In previous lessons, you learned how to work with viewport units.

Remember that the `vh` unit stands for viewport height, and is equal to 1% of the `height` of the viewport. This makes it relative to the viewport height.

It is time to spruce the project up with some CSS. Begin by giving the `body` a `width` of `100%`, and a `height` of `100vh`.

## Step 4

Now, get rid of the horizontal scroll-bar, by setting the `body` default `margin` added by some browsers to `0`.

## Step 5

That is better. Now, make the background easy on the eyes, by changing the `background-color` of `body` to `#1b1b32`. Then, to see the text, change the `color` to `#f5f6f7`.

## Step 6

As suggested by the title, you are creating a form. So, after the `p` element, insert a `form` with an `action` attribute targeting `https://register-demo.freecodecamp.org`.

## Step 7

The `method` attribute specifies how to send form-data to the URL specified in the `action` attribute. The form-data can be sent via a `GET` request as URL parameters (with `method="get"`) or via a `POST` request as data in the request body (with `method="post"`).

Set the `method` attribute to send your form data via a `POST` request.

 **NOTE** : You will learn more about the `GET` and `POST` methods in the upcoming lessons and workshops.

## Step 8

As the form will have three distinct sections, add three `fieldset` elements within the `form` element.

## Step 9

The first `fieldset` will hold name, email, and password fields. Start by adding four `label` elements to the first `fieldset`.
