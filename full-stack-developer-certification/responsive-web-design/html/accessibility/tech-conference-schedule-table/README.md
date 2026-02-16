# Build a Tech Conference Schedule Table

## Step 1

In this workshop, you will learn how to make accessible table elements by building out a schedule for a tech conference.

Start by adding an `h1` element with the text `Tech Conference 2025 Schedule`.

## Step 2

Now it is time to start building out the table.

Start by adding a `table` element below your `h1` element. Inside of the `table` element, add a `caption` element with the text `Schedule by Track and Time`.

## Step 3

The next step is to add the table head.

Start by adding a `thead` element below the `caption` element. Inside the `thead`, add a `tr` element.

## Step 4

Inside of your `tr` element, add four `th` elements. The first `th` element should have the text of `Time`, the second should have the text of `Track A`, the third should have the text of `Track B`, and the fourth should have the text of `Track C`.

## Step 5

The `scope` attribute is used to specify whether a header cell is a header for a row, column, or group of rows or columns. Here is an example:

**Example Code**
```<th scope="col">Example Header</th>```

This helps screen readers understand the relationship between header and data cells.

For all `th` elements, add a `scope` attribute with a value of `col`.

## Step 6

For the next few steps, you will build out the body of the table.

Start by adding a `tbody` element below the `thead` element. Then inside the `tbody`, add a `tr` element.

## Step 7

Inside your `tr` element, add a `th` element with the text of `9:00 AM`. Then below that `th` element, add three `td` elements with the text of `Keynote: Tech Future`, `Intro to Web Dev`, and `UX for All`.

## Step 8

Another value for the `scope` attribute is `row`, which indicates that a header cell is a header for its entire row.

Inside of your `th` element, add a `scope` attribute with a value of `row`.

## Step 9

Now it is time to add another row to the table.

Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `10:00 AM`.

Then, add three `td` elements with the following text content:

* `Accessibility Deep Dive`
* `CSS for Beginners`
* `Inclusive Design Principles`

## Step 10

Next, add a third row to the table. Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `11:00 AM`. Then below that `th` element, add a `td` element with the text content of `Break`.

## Step 11

Right now, the `td` element with the text content of `Break` only spans one column. But it would be nice if it spanned all three columns.

As you recall from earlier workshops and lessons, you can use the `colspan` attribute to make a table cell span multiple columns.

**Example Code**
```<tr> <td colspan="3">Total Points</td> </tr>```

Add a `colspan` attribute to the `td` element and set its value to `3`.

## Step 12

Now it is time to add another row to the table.

Start by adding another `tr` element. Inside that `tr` element, add a `th` element with a `scope` attribute set to `"row"` and the text content of `11:30 AM`.

Then, add three `td` elements with the following text content:

* `AR/VR in Education`
* `JavaScript Fundamentals`
* `Design Systems at Scale`
