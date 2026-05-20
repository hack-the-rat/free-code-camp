# User Interface Design Fundamentals

## What Are Common Design Terms to Help You Communicate with Designers?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

As a developer, you may need to work closely with designers. If you understand basic design terminology, you'll have a shared vocabulary and you'll be able to participate in the design process more actively. This can make your workflow more efficient and result in a better user experience.

So let's dive in. We'll start with the term layout. Layout is how the visual elements are arranged on a page or screen to communicate a message. These elements may include text, images, and white space. The layout is like the blueprint of a design. Designers must consider the placement, size, and hierarchy of each element.

```html
<link rel="stylesheet" href="styles.css" />

<header>
  <div class="container">
    <h1>ShopMate</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Cart (2)</a></li>
      </ul>
    </nav>
  </div>
</header>

<main>
  <section class="hero">
    <h2>Fall Collection 2025</h2>
    <p>Discover the latest trends</p>
    <a href="#" class="btn">Shop Now</a>
  </section>

  <section class="products container">
    <h3>Featured Products</h3>
    <div class="product-grid">
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 1" />
        <h4>Product 1</h4>
        <p>$49.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 2" />
        <h4>Product 2</h4>
        <p>$59.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 3" />
        <h4>Product 3</h4>
        <p>$39.99</p>
        <button>Add to Cart</button>
      </div>
      <div class="product-card">
        <img src="https://placehold.co/300x200" alt="Product 4" />
        <h4>Product 4</h4>
        <p>$29.99</p>
        <button>Add to Cart</button>
      </div>
    </div>
  </section>
</main>

<footer>
  <div class="container">
    <p>© 2025 ShopMate. All rights reserved.</p>
  </div>
</footer>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}

.container{
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  background: #fff;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
}

header h1 {
  color: #2c3e50;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-end;
}

nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
}

.hero {
  background-color: lightgrey;
  text-align: center;
  padding: 4rem 1rem;
  margin-bottom: 2rem;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.products h3 {
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: #2c3e50;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}

.product-card img {
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.product-card h4 {
  margin: 0.5rem 0;
}

.product-card button {
  background: #27ae60;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
}

.product-card button:hover {
  background: #219150;
}

footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem 0;
  margin-top: 2rem;
}
```

The term that is closely related to layout is alignment. Alignment is how the elements are placed in relation to one another. Using alignment correctly is helpful for making the design look clean and organized. Designers create visual order by aligning elements along imaginary lines, edges, or a central point.

```html
<link rel="stylesheet" href="styles.css" />

<div class="container">
  <section class="alignment left">
    <h2>Left-Aligned</h2>
    <p>This content is aligned to the left. Left alignment is most common for body text because it follows natural reading flow in left-to-right languages.</p>
  </section>

  <section class="alignment center">
    <h2>Center-Aligned</h2>
    <p>This content is centered. Center alignment is useful for titles, headings, and content that needs to be the focal point.</p>
  </section>

  <section class="alignment right">
    <h2>Right-Aligned</h2>
    <p>This content is aligned to the right. Right alignment can be used for stylistic emphasis or when aligning content against the right edge of a container.</p>
  </section>
</div>
```

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  background: #f4f4f4;
  color: #333;
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.alignment {
  background: #fff;
  border-left: 4px solid #3498db;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.alignment:hover {
  transform: scale(1.02);
}

.alignment h2 {
  margin-bottom: 0.5rem;
  color: #3498db;
}

.left {
  text-align: left;
}

.center {
  text-align: center;
}

.right {
  text-align: right;
}
```

Great. Now let's talk about composition. Composition is the art of arranging elements to create a harmonious design. It determines how elements like images, text, and shapes relate to each other and contribute to the design in an artistic way. While layout mostly focuses on the placement of the elements, composition also considers the artistic impact that this placement will have in the overall design.

Composition is closely related to concepts of balance. *Balance is how the visual weight is distributed within a composition*. Designers aim to create an equilibrium through symmetrical or asymmetrical arrangements. A balanced design feels harmonious.

```html
<link rel="stylesheet" href="styles.css">

<h1>Composition & Balance</h1>

<div class="section symmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">B</div>
    <div class="box">A</div>
  </div>
  <div class="description">Symmetrical Balance – Equal weight on both sides.</div>
</div>

<div class="section asymmetrical">
  <div class="box-container">
    <div class="box">A</div>
    <div class="box">C</div>
    <div class="box">B</div>
  </div>
  <div class="description">Asymmetrical Balance – Unequal but still harmonious.</div>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 40px;
  background: #f4f4f4;
}

h1 {
  text-align: center;
  margin-bottom: 40px;
}

.section {
  margin-bottom: 60px;
}

.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.box {
  width: 100px;
  height: 100px;
  background: #3498db;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  border-radius: 8px;
}

.asymmetrical .box:nth-child(2) {
  transform: scale(1.5);
  background: #e74c3c;
}

.description {
  text-align: center;
  margin-top: 50px;
  font-style: italic;
  color: #333;
}
```

Hierarchy is another important concept that you should know. *Hierarchy establishes the order of importance of the elements in a design*. It's about making sure the most important information is noticed first. You can implement a visual hierarchy with size, color, contrast, alignment, white space, and even typography.

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <div class="headline">Upgrade to Pro</div>
  <div class="subheadline">Get more features and storage</div>
  <div class="body-text">
    The Pro plan offers advanced tools, priority support, and 10x more storage. Perfect for professionals and teams looking to scale their productivity.
  </div>
  <a href="#" class="call-to-action">Start Free Trial</a>
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fefefe;
  margin: 40px;
  line-height: 1.6;
  color: #333;
}

.card {
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.headline {
  font-size: 32px;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 10px;
}

.subheadline {
  font-size: 20px;
  color: #555;
  margin-bottom: 20px;
}

.body-text {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.call-to-action {
  display: inline-block;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease;
}

.call-to-action:hover {
  background-color: #2980b9;
}
```

To create clear distinctions between the elements, you can use contrast. Contrast is helpful for guiding user attention to what you want to emphasize. You can do this through variations in color, size, shape, texture, or any other visual characteristic. Strong contrast is also helpful for improving readability.

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>Contrast in Design</h1>
  <p>
    Contrast helps draw attention to important elements. It also makes content easier to read and visually engaging.
  </p>

  <div class="highlight-box">
    This box stands out because of strong color contrast.
  </div>

  <button class="high-contrast-button">Example button</button>

  <p class="low-contrast-text">
    This text is harder to read due to low contrast with the background.
  </p>
</div>
```

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f6f6f6;
  margin: 40px;
  color: #333;
}

.container {
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
  color: #111;
}

p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 25px;
}

.highlight-box {
  background-color: #222;
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.low-contrast-text {
  color: #999999;
  font-size: 16px;
  margin-top: 30px;
}

.high-contrast-button {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease;
}

.high-contrast-button:hover {
  background-color: #c0392b;
}
```

Another helpful term is white space. *White Space, also known as "negative space", is the empty space in a design*. It's the area surrounding the elements. You might be surprised to know that white space is not necessarily white. Actually, it can be space in any color or texture. Its purpose is to improve the readability and enhance the visual hierarchy of a design.

```html
<link rel="stylesheet" href="styles.css">

<div class="container">
  <h1>The Power of White Space</h1>
  <p>
    White space (or negative space) is the empty space around elements. It’s not just “blank”—it gives your content room to breathe, improves focus, and adds elegance to the design.
  </p>
  <a href="#" class="button">Learn More</a>
</div>

<div class="no-whitespace">
  <strong>Without white space:</strong> This block has minimal padding, making the content feel cramped, harder to read, and less appealing.
</div>
```

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.container {
  max-width: 800px;
  margin: 60px auto;
  background-color: #ffffff;
  padding: 60px;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #2c3e50;
}

p {
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
}

.button {
  display: inline-block;
  padding: 14px 28px;
  background-color: #27ae60;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease;
}

.button:hover {
  background-color: #219150;
}

.no-whitespace {
  background-color: #ffffff;
  padding: 10px;
  margin: 60px auto;
  width: 800px;
  box-shadow: 0 0 0 1px #ccc;
  font-size: 16px;
  color: #222;
}
```

These are general design concepts that you will find very often, but you may also find design terms that are more closely related to software development.

The user interface, also known as UI, is how humans interact with computers. A user interface includes the visual and interactive elements that users can see on their screens, like icons, images, text, menus, links, and buttons.

The user experience, also known as UX, is about how users feel when using a product or service. An application with a well-designed user experience is intuitive, easy to use, efficient, accessible, and enjoyable. The user interface plays a key role in making the user experience as easy and enjoyable as possible, so they are very closely related.

These are some of the common terms that you should know to communicate with designers. With this knowledge, now you can take a more active role in the design process.

## How Do You Create Good Background and Foreground Contrast in Your Designs?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

First, you may need to familiarize yourself with contrast. *Contrast is the difference between two colors - or how easy it is to tell them apart*.

Colors with a higher contrast will be more visually distinct, whereas colors with a lower contrast will be more visually similar. For example, black and white have a very high contrast ratio. Whereas light blue and light purple have less of a contrast.

```html
<style>
  .example {
    padding: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .high-contrast {
    background-color: black;
    color: white;
  }

  .low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>

<div class="example high-contrast">
  <div class="label">High Contrast</div>
  This text has high contrast (black background and white text).
</div>

<div class="example low-contrast">
  <div class="label">Low Contrast</div>
  This text has low contrast (light blue background and light purple text).
</div>
```

Of course, in these examples the distinction might be made clearer because of the layout. But what about applying these colors to text? You can have the high contrast black text on a white background. And the low contrast purple text on a blue background.

```html
<style>
  .text-example {
    padding: 10px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .text-high-contrast {
    background-color: white;
    color: black;
  }

  .text-low-contrast {
    background-color: #add8e6; 
    color: #dda0dd; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }
</style>

<div class="text-example text-high-contrast">
  <span class="label">High Contrast Text</span>
  This is high contrast text: black text on a white background.
</div>

<div class="text-example text-low-contrast">
  <span class="label">Low Contrast Text</span>
  This is low contrast text: purple text on a light blue background.
</div>
```

But how do you determine what is a "good enough" contrast? You can't base it solely on how the text looks to you, as every user will have a different experience. Thankfully, the Web Content Accessibility Guidelines, or WCAG, provide a standard for this.

*Text with a contrast ratio of 4.5:1 is considered the AA standard*, which is the bare minimum you should follow to be accessible to most users. Text with a contrast ratio of 7:1 is considered the AAA standard, and ensures the best level of accessibility.

```html
<style>
  .contrast-example {
    padding: 15px;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: sans-serif;
  }

  .aa-contrast {
    background-color: #ffffff; 
    color: #4b4b4b; 
  }

  .aaa-contrast {
    background-color: #ffffff; 
    color: #1a1a1a; 
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-example aa-contrast">
  <span class="label">AA Standard (Contrast Ratio ~4.5:1)</span>
  This text meets the minimum accessibility standard for contrast.
</div>

<div class="contrast-example aaa-contrast">
  <span class="label">AAA Standard (Contrast Ratio ~7:1)</span>
  This text meets the highest accessibility standard for contrast.
</div>
```

There are a number of websites that can check the contrast ratio between two colors, but most browsers will allow you to do this directly in the developer tools on your website.

Let's take a look at a few more examples of contrast ratio to better understand the concept.

Here is an example of black text on a white background which has a contrast ratio of 21:1.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This is black text on a white background, which has the highest contrast ratio of 21:1.
</div>
```

This example more than meets the AAA standard. Now, let's take a look at purple text on a blue background.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .purple-on-blue {
    background-color: #0000cc;
    color: #800080; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="purple-on-blue">
  <span class="label">Purple on Blue (Lower Contrast)</span>
  This doesn't meet the AA standard.
</div>
```

This example has a contrast ratio of 1.48:1 which does not even meet the AA standard.

How can you fix this? Well, there are three aspects that impact the contrast ratio.

The first is the hue, which represents the general color type, like red, blue, orange. Let's shift to a hue that is further away from blue. In this case, let's use red.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .red-on-blue {
    background-color: #0000cc; 
    color: #ff0000; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="red-on-blue">
  <span class="label">Red on Blue (Higher Contrast Hue Shift)</span>
  This doesn't meet accessibility standards.
</div>
```

Unfortunately, this change only brought the contrast ratio to 1.49:1, which means you need to change the saturation, or the "amount" of color present. Let's increase the amount of red in the text. That brings us much closer to the goal, with a 3.54:1 contrast ratio.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue">
  <span class="label">Low Saturation Red on Blue (Contrast ~1.49:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue">
  <span class="label">Higher Saturation Red on Blue (Contrast ~3.54:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>
```

However, you can potentially get even closer by changing the last value, which is lightness. Lightness represents how much white is present in the color.

Let's decrease the lightness of the red. Now there is a much darker red against the light blue background, which brings the contrast ratio to 10.34:1.

```html
<style>
  .contrast-21 {
    background-color: white;
    color: black;
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .label {
    font-weight: bold;
    margin-bottom: 8px;
    display: block;
  }

  .blue-bg {
    background-color: #add8e6; 
    padding: 15px;
    font-family: sans-serif;
    font-size: 18px;
    margin-bottom: 20px;
  }

  .low-sat-red-on-blue {
    background-color: #0000cc; 
    color: #b23333;
    margin-bottom: 20px;
  }

  .high-sat-red-on-blue {
    background-color: #0000cc; 
    color: #ff4d4d; 
    margin-bottom: 20px;
  }
  
  .dark-red-on-light-blue {
    background-color: #add8e6; 
    color: #8b0000;
  }
</style>

<div class="contrast-21">
  <span class="label">Contrast Ratio 21:1</span>
  This example more than meets the AAA standard with black text on white background.
</div>

<div class="low-sat-red-on-blue blue-bg">
  <span class="label">Low Saturation Red on Medium Blue (Contrast ~1.49:1)</span>
  This red has low saturation, resulting in a poor contrast ratio.
</div>

<div class="high-sat-red-on-blue blue-bg">
  <span class="label">Higher Saturation Red on Medium Blue (Contrast ~3.54:1)</span>
  Increasing the saturation of red improves contrast but it’s still below AA standard.
</div>

<div class="dark-red-on-light-blue">
  <span class="label">Darker Red on Light Blue (Contrast ~10.34:1)</span>
  Decreasing the lightness of the red increases the contrast ratio significantly.
</div>
```

You could continue to adjust the colors to find the balance between the visual effect you want and an accessible contrast ratio. But it is important to remember that accessibility should always take precedence.

## What Is the Importance of Good Visual Hierarchy in Design?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

*Visual hierarchy refers to the way you layout and display the content of your page to guide the viewer's attention*.

A strong hierarchy can provide a clear path for the eye to follow, ensuring that the information you convey is consumed in the order that you intended.

Let's consider a basic page layout in which the HTML for the page is semantically correct, but the styling applied does not create a strong visual hierarchy.

```html
<style>
  body {
    font-family: sans-serif;
    color: #333;
    background-color: #fff;
  }

  header, nav, main, section, footer {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
  }

  h1, h2, h3 {
    font-weight: normal;
    font-size: 16px;
    margin: 5px 0;
  }

  nav a {
    text-decoration: none;
    color: #333;
    margin-right: 10px;
    font-size: 14px;
  }

  p {
    font-size: 14px;
    margin: 5px 0;
  }
</style>

<header>
  <h1>My Website</h1>
</header>

<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Contact</a>
</nav>

<main>
  <section>
    <h2>Welcome</h2>
    <p>This is the welcome section of the homepage.</p>
  </section>

  <section>
    <h2>Our Services</h2>
    <p>Here we describe what we offer.</p>
  </section>

  <section>
    <h2>Get in Touch</h2>
    <p>Contact us for more information.</p>
  </section>
</main>

<footer>
  <p>© 2025 My Website</p>
</footer>
```

If the font size isn't distinct, there is no visible indication of the document flow, although things are separated by headings.

To create a visual hierarchy, you should apply different font sizes to the heading tiers. You could also use something like a "callout box" to highlight a specific section.

```html
<style>
  body {
    font-family: sans-serif;
    line-height: 1.6;
    padding: 20px;
    background: #f9f9f9;
    color: #333;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 18px;
    margin-top: 15px;
    margin-bottom: 6px;
  }

  p {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .callout {
    background-color: #fff3cd;
    border-left: 5px solid #ffc107;
    padding: 15px;
    margin: 20px 0;
  }
</style>

<h1>Understanding Visual Hierarchy</h1>
<p>Visual hierarchy helps users navigate and understand content by guiding their attention.</p>

<h2>Heading Tiers</h2>
<p>Using different font sizes for headings creates structure and makes content scannable.</p>

<h3>Level 3 Heading</h3>
<p>This smaller heading further breaks down the section without overpowering it.</p>

<div class="callout">
  <strong>Tip:</strong> Use a callout box like this to highlight important notes or key takeaways.
</div>
```

Visual hierarchy can also help increase your user conversion. For example, *you can take advantage of the callout box to further draw attention to a Call to Action (CTA) button*.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #f4f4f4;
    color: #333;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 15px;
  }

  .callout {
    background-color: #e0f7fa;
    border-left: 5px solid #00acc1;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
  }

  .cta-button {
    display: inline-block;
    background-color: #00acc1;
    color: white;
    padding: 12px 20px;
    font-size: 16px;
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
  }

  .cta-button:hover {
    background-color: #008b9a;
  }
</style>

<h2>Ready to Boost Your Productivity?</h2>
<p>Join thousands of users who are getting more done with our simple and effective tools.</p>

<div class="callout">
  <strong>Don’t wait!</strong> Start your free trial today and see the difference.
  <br>
  <a href="#" class="cta-button">Start Free Trial</a>
</div>
```

Finally, your visual hierarchy can be important for conveying other components, like a navigation bar or a footer.

This makes it easier for your users to find the essential information that they may be looking for.
