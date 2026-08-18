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

## Step 10

Add the following text to the `label` elements:

* `Enter Your First Name:`
* `Enter Your Last Name:`
* `Enter Your Email:`
* `Create a New Password:`

## Step 11

In previous lessons, you learned how to work with `rem` units. Remember that `rem` unit stands for root `em`, and is relative to the font size of the `html` element.

As `label` elements are inline by default, they are all displayed side by side on the same line, making their text hard to read.

To make them appear on separate lines, add `display: block` to the `label` element, and add a `margin` of `0.5rem 0`, to separate them from each other.

## Step 12

Nest an `input` element within each `label`. Be sure to add each `input` after the `label` text, and include a space after the colon.

## Step 13

Following accessibility best practices, link the `input` elements and the `label` elements together using the `for` attribute.

Use `first-name`, `last-name`, `email`, and `new-password` as values for the respective `id` attributes.

## Step 14

Specifying the `type` attribute of an `input` element is important for the browser to know what kind of data it should expect. If the `type` is not specified, the browser will default to `text`.

Give the first two `input` elements a `type` attribute of `text`, the third a `type` attribute of `email`, and the fourth a `type` attribute of `password`.

The `email` type only allows emails with a `@` and a `.` in the domain. The `password` type obscures the input, and warns if the site does not use HTTPS.

## Step 15

The first `input` element with a `type` of `submit` is automatically set to submit its nearest parent `form` element.

To handle the form submission, after the last `fieldset` element add an `input` element with the `type` attribute set to `submit` and the `value` attribute set to `Submit`.

## Step 16

At this point, you should be able to submit the form. However, you might notice not much happens.

To make the form more interactive, add the `required` attribute to the `input` elements in the first `fieldset`.

Now, if you try to submit the form without filling in the required fields, you will see an error message.

## Step 17

Certain `type` attribute values come with built-in form validation. For example, `type="email"` requires that the value be a valid email address.

Add custom validation to the password `input` element, by adding a `minlength` attribute with a value of `8`. Doing so prevents inputs of less than 8 characters being submitted.

## Step 18

With `type="password"` you can use the `pattern` attribute to define a regular expression that the password must match to be considered valid.

Add a `pattern` attribute to the password `input` element to require the input match: `[a-z0-5]{8,}`

The above is a regular expression which matches eight or more lowercase letters or the digits `0` to `5`. Then, remove the `minlength` attribute, and try it out.

## Step 19

Let us go to the next part of the registration form. This section will ask for the type of account the user is opening.

Start by adding two `label` elements to the second `fieldset`.

## Step 20

Users will be able to choose whether their account is for `Personal` or `Business` purposes.

To do this, within each of the first two `label` elements, add one `input` element with `type="radio"`.

## Step 21

Within each corresponding `label` element, and immediately after the `input` element, add a space and add the following text:

```md
Personal
Business
```
