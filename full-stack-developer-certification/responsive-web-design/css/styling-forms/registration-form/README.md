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

## Step 22

You only want one radio input to be selectable at a time. However, the form does not know the radio inputs are related.

To relate the radio inputs, give them the same `name` attribute with a value of `account-type`. Now, it is not possible to select both radio inputs at the same time.

## Step 23

The radio buttons don't yet have a value assigned to them. Therefore, the POST request made through the form will not register which option is selected.

To make the request completely robust, add `value` attribute to both the radio buttons with the values `personal` and `business` respectively.

## Step 24

Currently users can submit the form without checking the radio inputs. Although you previously used the `required` attribute to indicate that an input is required, it won't work in this case because adding `required` to both inputs will convey the wrong information to users.

To solve this, you can provide context of what is needed by adding a `legend` element with text `Account type (required)` before the `label` elements within the second `fieldset`. Then add the `checked` attribute to the `Personal` input to ensure the form is submitted with the required data in it.

## Step 25

Follow accessibility best practices by linking the `input` elements and the `label` elements in the second `fieldset`.

Use `personal-account`, and `business-account` as values for the respective `id` attributes.

## Step 26

You need to confirm that the user has read the terms and conditions.

Add a `label` element. Inside the newly created `label` element add an `input` element and set the `type` attribute to `checkbox`. Make this `input` element `required` so users can not sign up without agreeing to the terms and conditions.

Add an `id` and `for` attribute with the value `terms-and-conditions` to the elements for accessibility.

## Step 27

Add an anchor element with the text `Read our terms and conditions` before the newly added `label`. Set the `href` to:

```md
https://www.freecodecamp.org/news/terms-of-service/
```

Then add the text `I accept the terms and conditions` immediately after the input element in the label.

## Step 28

Moving on to the final `fieldset`. What if you wanted to allow a user to upload a profile picture?

Well, the `input` type `file` allows just that. Add a `label` with the text `Upload a profile picture:`, and nest an `input` accepting a file upload.

## Step 29

Add another `label` after the first, with the text `Input your age (years):`. Then, nest an `input` with the `type` of `number`.

Next, add a `min` attribute to the `input` with a value of `13` because users under the age of 13 should not register. Also, users probably will not be over the age of 120; add a `max` attribute with a value of `120`.

Now, if someone tries to submit the form with values outside of the range, a warning will appear, and the form will not submit. Give it a try.

## Step 30

Adding a dropdown to the form is easy with the `select` element. The `select` element is a container for a group of `option` elements, and the `option` element acts as a label for each dropdown option. Both elements require closing tags.

Start by adding a `select` element below the last `label` element. Then nest 5 `option` elements within the `select` element.

## Step 31

Nest the `select` element (with its `option` elements) within a `label` element with the text `How did you hear about us?`. The text should come before the `select` element.

## Step 32

The dropdown options are currently empty. To give them content, add the following text to each subsequent `option` element:

```md
(select one)
freeCodeCamp News
freeCodeCamp YouTube Channel
freeCodeCamp Forum
Other
```

## Step 33

Submitting the form with an option selected would not send a useful value to the server. Because of that, each `option` element needs a `value` attribute. Without this attribute, the text content of the `option` will be submitted to the server.

Give the first `option` a `value` of `""`, and the subsequent `option` elements `value` attributes from `1` to `4`.

## Step 34

The `textarea` element acts like an `input` element of type `text`, but comes with the added benefit of being able to receive multi-line text, and an initial number of text rows and columns.

Users will be able to register with a bio. Add a `label` with the text `Provide a bio:` at the end of the `fieldset`. Add a `textarea` element inside the `label` element. Note that the `textarea` requires a closing tag.

## Step 35

Link the applicable form elements and their `label` elements together.

Use `profile-picture`, `age`, `referrer`, and `bio` as values for the respective `id` attributes.

## Step 36

The `textarea` appears too small. To give it an initial size, you can add the `rows` and `cols` attributes.

Add an initial size of `3` rows and `30` columns.

## Step 37

To give Campers an idea of what to put in their bio, the `placeholder` attribute is used. The `placeholder` accepts a text value, which is displayed until the user starts typing.

Give the `textarea` a `placeholder` of `I like coding on the beach...`.

## Step 38

With form submissions, it is useful, and good practice, to provide each submittable element with a `name` attribute. This attribute is used to identify the element in the form submission.

Except for the two `radio` inputs (which you have already named), give each submittable element a unique `name` attribute of your choosing.

## Step 39

The HTML for the registration form is finished. Now, you can spruce it up a bit.

Start by changing the font to `Tahoma`, and the font size to `16px` in the `body`.

## Step 40

Center the `h1` and `p` elements by giving them a `margin` of `1em auto`. Then, align their text in the `center` as well.

## Step 41

Center the `form` element, by giving it a `margin` of `0 auto`. Then, fix its size to a maximum width of `500px`, and a minimum width of `300px`. In between that range, allow it to have a `width` of `60vw`.
