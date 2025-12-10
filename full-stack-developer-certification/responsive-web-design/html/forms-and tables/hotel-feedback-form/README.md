# Build a Hotel Feedback Form

## Step 1

In this workshop, you will practice working with HTML forms by building a Hotel Feedback Form.

For the introductory text, you will want to display the main title followed by a short note about leaving feedback.

Inside your `body` element, add a `header` element.

Inside the `header` element, add an `h1` element. The `h1` element's text should be `Hotel Feedback Form`.

Below your `h1` element, add a `p` element. The `p` element's text should be `Thank you for staying with us. Please provide feedback on your recent stay.`

## Step 2

Now, it is time to add the `main` element which represents the main content of the page.

## Step 3

In previous lessons, you learned how to work with the `form` element like this:

**Example Code**
```<form method="value-goes-here" action="url-goes-here"> <!-- inputs go inside here --> </form>```

The `action` attribute is used to specify where the form data should be sent when the form is submitted.

The `method` attribute is used to specify the HTTP method to use when sending the form data. The most common methods are `GET` and `POST`.

 **NOTE** : You will learn about how HTTP methods work in later modules.

Inside your `main` element, add a `form` element with an `action` attribute set to `"https://hotel-feedback.freecodecamp.org"` and a `method` attribute set to `"POST"`.

## Step 4

Forms consist of `inputs` where users can input their data. You can group related inputs together using the `fieldset` element.

Here is an example of using a `fieldset` element:

**Example Code**
```<form action="/example-url"> <fieldset> <!-- inputs go inside here--> </fieldset> </form>```

Inside your `form` element, add a `fieldset` element.

## Step 5

When working with `fieldset` elements, it is common to use a caption to describe the group of inputs. You can use the `legend` element for this.

Here is an example of using a `legend` element:

**Example Code**
```<form action="/example-url"> <fieldset> <legend>Personal Information</legend> <!-- inputs go inside here--> </fieldset> </form>```

Inside your `fieldset` element, add a `legend` element with the text `Personal Information`.

## Step 6

In previous lessons, you learned how to associate a `label` element with an `input` like this:

**Example Code**
```<label for="name">Name:</label> <input type="text" id="name" name="name">```

The `for` attribute on the `label` element should match the `id` attribute on the `input` element. This is known as an explicit association.

Below your `legend` element, add a `label` element with the text of `Name (required):`. Set its `for` attribute to the value of `"full-name"`.

Then below your `label` element, add an `input` element with no attributes. In the next steps, you will add the necessary attributes.

## Step 7

When a user provides their full name, the `input` will accept plaintext.

In previous lessons, you learned how to work with the `type` attribute like this:

**Example Code**
```<input type="text">```

For your existing `input` element, add a `type` attribute set to `"text"`.

Also give the `input` element an `id` attribute with the value of `"full-name"`.

## Step 8

The `name` attribute is used to identify form data after it has been submitted to the server.

Here is an example of how to use the `name` attribute:

**Example Code**
```<input type="email" name="email">```

Add a `name` attribute to the `input` element with the value of `"name"`.

## Step 9

In previous lessons, you learned how to work with the `placeholder` and `required` attributes like this:

**Example Code**
```<input type="text" placeholder="e.g., John Doe" required>```

For your existing `input` element, add a `placeholder` attribute with the value of `"e.g., John Doe"`.

Also, add the `required` attribute to the `input` element.

## Step 10

Your hotel feedback form should also collect an email address from the user.

Start by adding a new `label` element with the text `Email address (required):` to the form. Your `label` element should have a `for` attribute set to the value of `"email"`.

## Step 11

Next, add an `input` with the type of `"email"` below your email label. This `input` should have an `id` attribute set to the value of `"email"`. Also, set the `name` attribute to the value of `"email"`.

This `input` is also required, so make sure to add the `required` attribute.

Finally, add a `placeholder` attribute set to `"example@email.com"`.

## Step 12

`input` elements can have a `size` attribute. This attribute defines the number of characters that should be visible as the user types into the input. The value of `size` should be a non-negative integer greater than zero. If `size` is not specified, or is specified with an invalid value, the input will have the default width set by the browser.

**Example Code**
```<label for="lastName">Last Name:</label> <input id="lastName" name="lastName" type="text" size="10" />```

Give the name and email inputs a `size` attribute with a value of `"20"`.

## Step 13

Your hotel feedback form should have an option for users to add their age.

Start by adding a `label` element with the text `Age (optional):` to the form.

The `for` attribute should be set to `"age"`.

## Step 14

The number `input` is used to create a numeric input field.

Here is an example of a number input field:

**Example Code**
```<input type="number" id="age" name="age" min="18" max="100">```

The `min` and `max` attributes are used to set the minimum and maximum values that can be entered in the input field.

Below your `label` element, add an input with the `type` attribute set to `"number"` and an `id` of `"age"`.

The `name` attribute should be set to `"age"`, the `min` attribute should be set to `"3"` and the `max` attribute should be set to `"100"`.

## Step 15

The next section in the form will be responsible for asking users if they have stayed at the hotel before.

Start by adding a `fieldset` element.

Inside the `fieldset` element, add a `legend` element with the text of `Was this your first time at our hotel?`.

## Step 16

If you want users to select one option from a list of options, you can use a set of radio buttons.

Here is an example of two radio buttons:

**Example Code**
```<input type="radio" id="yes" name="first-time"> <label for="yes">Yes</label> <input type="radio" id="no" name="first-time"> <label for="no">No</label>```

In this example, the radio buttons are grouped together by using the same `name` attribute value. This means that only one radio button can be selected at a time.

Below your `legend` element, add a `radio` button with the `id` set to `"yes-option"`, and the `name` attribute set to `"hotel-stay"`.

Below your `radio` button, add a `label` element with the text `Yes` and a `for` attribute set to `"yes-option"`.

## Step 17

Below your `label` element, add a `radio` button with the `id` set to `"no-option"`, and the `name` attribute set to `"hotel-stay"`.

Below your new `radio` button, add another `label` element with the `for` attribute set to `"no-option"`. The text for the `label` should be `No`.

When you are finished, you can now try out the radio buttons by selecting one option at a time.

## Step 18

The next section of the form will ask users why they chose that particular hotel. Users will have the opportunity to select multiple options.

Start by adding another `fieldset` element.

Inside the `fieldset` element, add a `legend` element with the text `Why did you choose to stay at our hotel? (Check all that apply)`.

## Step 19

When you want a user to select multiple options from a list, you can use checkboxes.

Here is an example of how to work with checkboxes dealing with food options:

**Example Code**
```<fieldset> <legend>Food Options</legend> <input type="checkbox" id="pizza" name="food" value="pizza"> <label for="pizza">Pizza</label> <input type="checkbox" id="burger" name="food" value="burger"> <label for="burger">Burger</label> </fieldset>```

The `value` attribute is used to specify the value that will be sent to the server when the form is submitted.

Below your `legend` element, add a checkbox `input` with the `id`, `name` and `value` attributes set to `"ads"`.

Below your checkbox `input`, add a `label` element with the text `Social Media Ads`. The `for` attribute should be set to `"ads"`.

## Step 20

Add another checkbox `input` with the `id`, `name` and `value` attributes set to `"recommendation"`.

Below the checkbox `input`, add another `label` with the text `Personal Recommendation`. The `for` attribute should be set to `"recommendation"`.

## Step 21

Next, add another checkbox `input` with the `id`, `name` and `value` attributes set to `"location"`.

For the `label` element, the text of `Location` and the for attribute should be set to `"location"`.

Below that `label` element, add another checkbox `input` with the `id`, `name` and `value` attributes set to `"reputation"`.

For the `label` element, the text of `Reputation` and the for attribute should be set to `"reputation"`.

## Step 22

To make a checkbox input checked by default, you can add the `checked` attribute.

Here is an example of using the `checked` attribute:

**Example Code**
```<input checked type="checkbox" id="checked" name="checked">```

Add the `checked` attribute to the checkbox input with the `id` of `"reputation"` to make it checked by default.

## Step 23

For the final `input` and `label` inside this fieldset, you will add a checkbox `input` with the `id`, `name` and `value` attributes set to `"price"`.

Then, a `label` element with the text `Price` and the for attribute set to `"price"`.

Now you can test out your `form` by selecting the various checkboxes.
