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
