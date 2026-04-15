# Working with File Systems

## How Can You Use File Management Applications on Your Computer?

A file management application is a way to easily store, organize, and edit your files on your computer. Whether you use a Mac or Windows computer, there are built-in applications you can use to organize your files.

*If you have a Windows computer, the default file manager is the File Explorer*. This is used to browse, search, and manage files and folders, as well as perform file operations like copying, moving, and deleting.

To find the File Explorer, you can go to the Start menu or press the Windows logo key on your keyboard.

*To pin a folder, you can right click with your mouse and select "Pin"*. To move a file or folder, you first need to select it, then select "Cut" and then navigate to the new location to paste it.

If you have a Mac computer, the default file manager is the Finder. This provides access to local and remote files, supports file previews, and offers a variety of organizational features like tags and Smart Folders.

*To access the Finder on your Mac, go to the Dock at the bottom and click on the Finder icon*.

You will notice a sidebar on the left-hand side where your favorite folders are located.

One way to organize your files, is to use tags. To tag a file or folder, you can select the item in the Finder and then right click with your mouse. You will see the "Tags..." option in the dropdown and you can apply a custom colored tag.

To search for tagged items, you can scroll to the bottom of the sidebar and click on the corresponding colored tag, or you can search for the tag by color name in the search field.

Another way to organize your files is to use smart folders. Smart folders are collections of files that are automatically organized based on criteria you set, such as file type, date, or keywords.

Whether you're using File Explorer on Windows or Finder on Mac, these applications provide flexibility to manage your files with features like tags, search, and Smart Folders.

## What Are Best Practices for Naming Files for Web Applications?

As you start to build out your own web applications, you will need to be mindful of what you name your files.

You will want to name your files in a way that is easy to understand and maintain.

Let's take a look at some examples of good and bad file names for HTML files. Note that the `.html` extension in these examples tells us that this is an HTML file.

Here is an example of a bad file name:

```md
index1234.html
```

By the name alone, it is not clear what the file is about. This file could be for a products page, blog page, or any other type of page but we don't know that from the file name.

Here is an example of a better file name for an HTML file:

```md
about-us.html
```

By using a more descriptive name like `about-us.html`, it is clear what the file is about.

You will also notice in this file name that there are no spaces. Instead, you use a hyphen, `-`, to separate the words.

Sometimes you might see a file name called `index.html`. This is *a special file name that is used to represent the main page of a website*. When you visit a website, the `index.html` file is the first file that is loaded.

Another important consideration when naming files is the use of special characters.

*Using a mixture of special characters, numbers, and letters can make it difficult to understand what the file is about*.

Here is an example of a bad file name:

```md
file-1!@.html
```

This name looks unnecessarily complicated and does not give us any information about what the file is about.

So it is best to stick with only using letters and dashes in your file names.

As you start to learn more languages, you will see that there are common conventions for naming files in those languages as well.

In these situations, it is always best to consult with official documentation or other resources to understand the best practices for naming files in that language.

Also you will be in situations where you are working on a team and you will need to follow the conventions that the team has established for naming files.

Always consult with the team's style guide to make sure your file names are consistent with the rest of the team.

## What Are Best Practices for File/Folder Organization in Web Applications?

When building out web applications, it is important to think about the organization of your files and folders. This will help keep your code organized and easier to maintain.

Let's take a look at an example folder structure for an HTML and CSS project:

```bash
.
├── /assets
│   ├── /images
│   │   ├── logo.png
│   │   ├── banner.jpg
│   │   └── icons.svg
│   ├── /fonts
│   │   ├── custom-font.woff
│   │   └── custom-font.woff2
├── /css
│   ├── main.css
│   ├── about.css
│   └── contact.css
├── index.html
├── about.html
├── contact.html
└── README.md
```

At the top of the example, there is a single dot, which represents the root directory.

The *root directory is the top-level directory in a file system, serving as the starting point for all file paths and containing all other directories and files*. A directory is another name for a folder.

Inside the root directory, the first directory shown is the `assets` directory. *The term `assets` refers to any files that are used in the project, such as images, fonts, or other resources*.

In this example, there are two directories inside the `assets` directory called `images` and `fonts`.

The next directory would be the `css` directory. Sometimes this is also referred to as a stylesheets directory. This is where you would store all of your CSS files.

Below the `css` directory are the HTML files. The `index.html` file represents the homepage, while `about.html` and `contact.html` represent the About and Contact pages, respectively.

Lastly, there is a `README.md` file. *`README` files are commonly used to provide useful information about the project*, such as what it does, how to use it, and any other relevant details.

The `.md` extension stands for Markdown, which is a lightweight markup language that is often used to write documentation.

By organizing your project into assets, CSS, and HTML files, it makes it easy to find what you are looking for. This also makes it easy for other developers to contribute to your project.

It is important to note that this is just one example of how you can organize your files and folders. There are many different ways to structure a project.
