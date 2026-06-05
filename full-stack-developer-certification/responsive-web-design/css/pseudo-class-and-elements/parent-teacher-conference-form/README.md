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
