# Working with Tables

## What Are HTML Tables Used For, and What Should They Not Be Used For?

HTML tables aren't used as much these days as they used to be. But, as a frontend developer, you should still be familiar with them. Tables are one of the earliest ways devs had for displaying data in a browser way back in the 1990s.

Here's an [example](https://codesandbox.io/p/sandbox/d6gjdw) of code used to generate a table from the U.S. Bureau of Labor Statistics:

As you can see, there's a main `table` element with an `id` set to `quickfacts`. Inside it, *the table has a table head element, `thead`, table body element, `tbody`, and a table foot element, `tfoot`*.

The table head, body, and foot elements can each contain some number of table rows, `tr`. And *each table row can contain a table header `th` which labels the data in that row. It can also contain some number of individual data cells, called table data, `td`*.

Now, that's a lot of HTML elements. But don't be intimidated – these follow a simple hierarchy.

Here's the [simplest table](https://codesandbox.io/p/sandbox/qwlw2s) we can create that includes all of these elements:

So as you can see, the data itself is always within a `tr` – and within that `tr` element is a `th` element with a header, and a `td` element with data.

Some websites will choose to use `div`s to build their own tables instead of using the more appropriate `table` element.

While it is possible to display tabular data using generic `div` elements, it is still better to use the `table` element instead.

Many years ago, developers might have used a `table` to position non-data elements on a webpage. This was never considered a best practice. But you may encounter some codebases where tables are still used like this.

Nowadays, developers use CSS flexbox and grid to layout their designs. freeCodeCamp will cover these tools in depth later.

For now, just *use HTML tables for their original intended purpose: displaying tabular data*.
