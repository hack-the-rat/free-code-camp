# What Is CSS?

## What Is CSS, and What Is Its Role on the Web?

CSS, which stands for Cascading Style Sheets, is a crucial component of modern web development. It's a markup language used to apply styles for HTML. In simpler terms, if HTML is the structure of a web page, CSS is what makes it look good.

Here is an example of styling a navbar.

 **NOTE** : Don't worry about trying to understand the CSS code just yet. You will learn how all of this works in future lessons and workshops. This is just to give you an idea of what you can do with a little bit of CSS.

```html
<link rel="stylesheet" href="styles.css" />

<nav class="navbar">
    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f4f4f4;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff9800;
}
```

*The primary role of CSS is to separate the content of a web page from its visual presentation*. This separation allows web developers to create more flexible and maintainable websites.

With CSS, you can control the layout, colors, fonts, and overall visual appearance of web pages without altering the HTML structure.

Let's consider a simple analogy. If you think of a website as a house, HTML would be the foundation and framework, while CSS would be the paint, wallpaper, and decorations that make the house visually appealing and unique.

CSS works by selecting HTML elements and applying styles to them.

Here is an example showing an unstyled `button` element and a styled one. To interact with this example, you will need to enable the [interactive editor](https://codesandbox.io/p/sandbox/9xcr66).

```html
<link rel="stylesheet" href="styles.css" />

<button class="regular-btn">Unstyled Button</button>
<button class="round-btn">Round Button</button>
```

```css

.round-btn {
  font-size: 1rem;
  font-family: 'Segoe UI', sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: #2ecc71;
  color: white;
  border-radius: 50px;
  padding: 0.6rem 1.6rem;
}

.round-btn:hover {
  background-color: #27ae60;
  transform: translateY(-2px);
}
```

These styles can include properties like color, font size, and many more. By changing these properties, you can dramatically alter how a web page looks without changing its content.

One of the most powerful aspects of CSS is its ability to create responsive designs.

This means that with CSS, you can make your website look great on any device, whether it's a desktop computer, a tablet, or a smartphone.

*CSS allows you to adjust layouts, font sizes, and other visual elements based on the screen size of the device viewing the website*.

Try enabling the [interactive editor](https://codesandbox.io/p/sandbox/8zj25t) and adjust the size of the preview window to see how the layout adapts to the screen size.

```html
<link rel="stylesheet" href="styles.css" />

<header class="header">
    <h1>Welcome to My Responsive Site</h1>
    <p>This layout adapts to your screen size!</p>
</header>

<main class="content">
    <section class="box">Box 1</section>
    <section class="box">Box 2</section>
    <section class="box">Box 3</section>
</main>
```

```css
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

.header {
  background-color: #4CAF50;
  color: white;
  padding: 2rem;
  text-align: center;
}

.content {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  justify-content: center;
}

.box {
  flex: 1;
  min-width: 200px;
  background-color: #ddd;
  padding: 2rem;
  text-align: center;
  font-size: 1.2rem;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.box:hover {
  background-color: #ccc;
}

/* Responsive: for tablets and below (≤ 768px) */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
    align-items: center;
  }

  .box {
    width: 90%;
    font-size: 1.1rem;
  }
}

/* Responsive: for phones (≤ 480px) */
@media (max-width: 480px) {
  .header {
    padding: 1.5rem 1rem;
  }

  .header h1 {
    font-size: 1.5rem;
  }

  .header p {
    font-size: 1rem;
  }

  .box {
    font-size: 1rem;
    padding: 1.5rem;
  }
}
```

Another *important feature of CSS is its cascading nature, which is where the "cascading" in its name comes from.*

*This means that styles can be inherited and overridden, allowing for a hierarchical structure of styling*. You will learn more about how this works in future lessons.

CSS also supports the use of external stylesheets.

This means you can keep all your styling rules in a separate file, which can then be linked to multiple HTML pages.

This feature greatly enhances the maintainability of websites, especially larger ones. Instead of having to change styles on each individual page, you can make changes in one CSS file that will affect all linked pages.

In the world of web development, CSS plays a vital role in creating visually appealing, responsive, and user-friendly websites.

It allows developers to transform simple HTML documents into engaging web experiences that capture users' attention and enhance their interaction with web content.
