# Design a Parent Teacher Conference Form

## Step 1

In this workshop, you will practice how to add custom styles to radio buttons by building a parent teacher conference form. The HTML boilerplate has been provided for you.

Start by adding a `main` element with a class called `container`.

## Step 2

Next, inside your `main` element, add an `h1` element with the text `Parent Teacher Conference Form` and the classes `title` and `center`.

## Step 3

Next, add a paragraph element with the text `Please fill out the form below to help schedule your parent-teacher conference.`. Your paragraph element should also have the classes `description` and `center`.

## Step 4

Now it is time to add the `form` and `input` elements, which will represent the parent and student information.

Start by adding a `form` element below the `p` element.

## Step 5

The first section of the form will focus on the student's information, like their name and grade.

Inside the `form` element, add a `fieldset` element. Inside that `fieldset` element, add a `legend` element with the text `Student Information`.

Below the `legend` element, add a `label` element with the text `Full Name:` and a `for` attribute with the value of `student-name`.

## Step 6

The next step is to add the associated `input` element for the student's information.

Start by adding an `input` element with a `type` attribute set to `"text"`. Then add a `name` and `id` attribute, both set to `student-name`.

Next, add a `placeholder` attribute set to `E.g., Jane Doe`. And finally, add a `required` attribute.

## Step 7

Now it is time to add the form elements to collect the student's grade information.

Start by adding another `label` element with the text `Student Grade:` and `for` attribute set to `"grade"`.

Then, below your `label` element, add an `input` element with the `type` attribute set to `"number"`. The `name` and `id` attributes should be set to `"grade"`. The `placeholder` attribute should be set to `"E.g., 4"`. Lastly, your number `input` should be required.

## Step 8

The next step is the section in the form for the parent information.

Start by adding another `fieldset` element. Inside that `fieldset` element, add a `legend` element with the text `Parent/Guardian Information`.

## Step 9

Now it is time to add the form elements to collect the parent's information.

Start by adding a `label` element with the text `Parent/Guardian Name:` and `for` attribute set to `"parent-name"`.

Then, below your `label` element, add an `input` element with the `type` attribute set to `"text"`. The `name` and `id` attributes should be set to `"parent-name"`. The `placeholder` attribute should be set to `"E.g., Nancy Doe"`. Lastly, your `input` should be required.

## Step 10

In the next few steps, you will add the form elements responsible for collecting the user's preferred contact method.

Start by adding another `fieldset` element with a `legend` element nested inside. Your `legend` element should have the text `Preferred Contact Method`.

## Step 11

The next step is to add the `label` and `input` elements for the email contact method.

Start by adding a label with a class of `"contact-method"` and a `for` attribute set to `"email"`. The label text should be `Email:`.

Below your `label` element, add a radio button with `id` and `value` attributes set to `"email"`. The `name` attribute should be set to `"contact-method"` and the class should be set to `"contact-method-radio-btn"`.

Lastly, make sure this radio button is checked by default.

## Step 12

Next, add another label with a class of `"contact-method"` and a `for` attribute set to `"phone"`. The label text should be `Phone:`.

Below your `label` element, add a radio button with `id` and `value` attributes set to `"phone"`. The `name` attribute should be set to `"contact-method"` and the class should be set to `"contact-method-radio-btn"`.

## Step 13

It's a good practice to allow users to add additional notes or concerns.

Below your third `fieldset` element, add a new `fieldset` element. Inside, add a `legend` element with the text `Additional Notes`.

## Step 14

Now, add a `label` element with the text `Any specific concerns or topics you'd like to discuss?` and a `for` attribute set to `notes`.

Below this `label`, add a `textarea` element. Set its `id` to `notes`, `name` to `notes`, `rows` to `4`, and `cols` to `50`.

## Step 15

Finally, you should add the submit button for the form.

Below the last `fieldset` element, add a `button` element with the class `submit-btn` and `type` attribute set to `"submit"`. The text content of the button should be `Submit Form`.

With this, your HTML structure is complete!

## Step 16

Now that the HTML structure is complete, you should move on to the CSS styling.

Open your `styles.css` file. First, set a dark background color for the `body` and a light color for the text.

Select the `body` element and set its `background-color` to `midnightblue` and `color` to `whitesmoke`.

## Step 17

Next, you should style the main container. Select the element with the class `container` and set its `background-color` to the hex-code `#ffffff1a`.

A hex code is a six-digit combination of numbers and letters used in HTML and CSS to represent colors. It starts with a `#` followed by three pairs:

* The first two digits represent red
* The next two represent green
* The last two represent blue

For example, `#ffffff` is pure white because it has the maximum value for red, green, and blue.

You can also add two extra digits at the end to control opacity (called the alpha channel). In `#ffffff1a`, the `1a` makes the white color semi-transparent. The lower the alpha value, the more transparent the color appears. You'll learn more about hex codes later!

## Step 18

Continuing with the main container, give the `container` class a `width` of `80%` and a `max-width` of `600px`. Also, add a `border-radius` of `10px` and set `margin` to `20px auto` to center it horizontally.

## Step 19

Now, you should add some padding to the container. Set `padding` to `10px 20px`. This way, you set a padding of `10px` on the top and bottom, and `20px` on the left and right.

## Step 20

To make the container stand out, you should add a `box-shadow` set to `0 5px 15px black`.

This adds a shadow effect around the container. The values control the horizontal offset, vertical offset, blur radius, and color respectively.

## Step 21

You added a `center` class to some elements in the HTML. Now, you should define that class to center those elements.

Target the `center` class and center the elements having it with a `text-align` property set to `center`.

## Step 22

The description text needs to be a bit larger. Select the element with the class `description` and set its `font-size` to `1.2rem`.

## Step 23

Time to style the `fieldset` elements to give them a distinct border.

Select the `fieldset` element. Set its `border` to `1px solid gray`, `border-radius` to `5px`, `margin` to `20px 0`, and `padding` to `20px`.
