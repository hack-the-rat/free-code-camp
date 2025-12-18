# Build a Finals Exams Table

## Step 1

In this workshop, you will practice working with HTML tables by building a final exam table for a group of students.

In previous lessons, you learned how to work with the `table` element to represent tabular data.

Inside your `body` element, nest a `table` element.

## Step 2

To add a caption to a `table`, you can use the table caption element.

Here is an example using the `caption` element:

**Example Code**
```<table> <caption>Football Scores</caption> </table>```

Inside your `table` element, nest a `caption` element with the text `Calculus Final Exam Grades`.

## Step 3

For the first section of the table, you will want to group the header content which represents the column labels for the student's first name, last name, and final exam grade.

The table head element, `thead`, is used to group the header content in a table.

Here is an example using the `thead` element:

**Example Code**
```<table> <thead> <!-- header content goes here --> </thead> </table>```

Below your `caption` element, add a table head element.

## Step 4

The table head element consists of a table row element, `tr`, which contains the table header cell elements, `th`.

Here is an example using the `tr` and `th` elements for a sports table:

**Example Code**
```<table> <caption>Football Scores</caption> <thead> <tr> <th>Team</th> <th>Wins</th> <th>Losses</th> </tr> </thead> </table>```

Inside your `thead` element, add a `tr` element.

Inside your `tr` element, add three `th` elements.

The first `th` element should contain the text `Last Name`. The second `th` element should contain the text `First Name`. The third `th` element should contain the text `Grade`.

## Step 5

Now that you have completed the head section, it is time to add the *table body*, `tbody`. The table body will represent all of the student names and their grades.

Add a table body element to your table.

## Step 6

To add student data to the table, you will need to use the table row and table data elements.

The *table data* element, `td`, is used to create a cell in the table.

Here is an example of using the `td` element for a sports players table:

**Example Code**
```<tr> <td>1</td> <td>John Doe</td> <td>USA</td> </tr>```

Inside your table body element, add a table row element, `tr`, with three table data elements, `td`.

The first table data element should contain the last name of `Davis`.

The second table data element should contain the first name of `Alex`.

The third table data element should contain the grade of `54`.

## Step 7

Now it is time to add two more students to the table.

Following the same pattern as the previous step, add a second student table row. Use the following data for the table data elements:

* Last Name: `Doe`
* First Name: `Samantha`
* Grade: `92`

For the third student table row, use the following data for the table data elements:

* Last Name: `Rodriguez`
* First Name: `Marcus`
* Grade: `88`
