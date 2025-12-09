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
