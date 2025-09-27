# Understanding the HTML Boilerplate

## What Is the Role of the Link Element in HTML, and How Can It Be Used to Link to External Stylesheets?

Let's learn about the `link` element, and how to use it to link to external stylesheets.

*The `link` element is used to link to external resources like stylesheets and site icons.* Here is the basic syntax for using the `link` element for an external CSS file:

**Example Code**
```<link rel="stylesheet" href="./styles.css" />```

*The `rel` attribute is used to specify the relationship between the linked resource and the HTML document.* In this situation, we need to specify that this linked resource is a `stylesheet`.

It is considered best practice to separate your HTML and CSS in different files. Developers will use the `link` element for their external CSS file instead of writing everything in the HTML document.

The `href` attribute is used to specify the location of the URL for the external resource.

The `dot` followed by a forward slash in the example tells the computer to look in the current folder, or directory, for the `styles.css` file.

The link element should be placed inside the `head` element as seen in the following example:

**Example Code**
```<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Examples of the link element</title><link rel="stylesheet" href="./styles.css" /></head>```

Often times you will see multiple link elements inside a professional codebase that link to different stylesheets, fonts, and icons. Here is an example of using the link element to link to an external Google Font called Playwright Cuba:

**Example Code**
```<link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /><link href="https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap" rel="stylesheet" />```

Google Fonts are a set of free and open source custom fonts that you can use inside any project. You can choose which fonts you would like to use and Google will provide you with the necessary HTML and CSS code. In this example, the preconnect value for the rel attribute tells the browser to create an early connection to the value specified in the href attribute. This is done to speed up loading times for these external resources.

Another common use case for the link element is to link to icons. Here is an example of linking to a favicon:

**Example Code**
```<link rel="icon" href="favicon.ico" />```

*A **favicon**, which is short for favorite icon, is a small icon typically displayed in the browser tab next the site title.* A lot of websites will use a favicon to display their brand icon.
