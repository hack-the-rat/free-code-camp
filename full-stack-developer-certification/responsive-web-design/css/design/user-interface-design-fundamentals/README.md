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

## How Does Scale Work in Design?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

The "scale" of something refers to its size.

When you're looking at scaling in your web design, you're looking at the size relationships between different elements, and how these elements might adapt to different screen sizes.

*Using the correct scale for your elements plays an important role in visual hierarchy. Larger elements will draw more attention, which can guide your users through the content in the way that you want*.

For example, the visual separation between a heading and a paragraph draws your reader’s attention, but the scale should be appropriate to get an eye-catching text that pulls your reader to that section.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fdfdfd;
    color: #333;
  }

  .section {
    margin-bottom: 40px;
  }

  .big-heading {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  .paragraph {
    font-size: 16px;
    max-width: 600px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <div class="big-heading">Discover the Power of Smart Design</div>
  <p class="paragraph">
    Great design isn’t just about colors or fonts — it’s also about scale. 
    A large heading like this one instantly grabs your attention, while the paragraph beneath it provides context and detail.
    Proper scaling creates a clear path for the reader’s eye to follow.
  </p>
</div>
```

Scale doesn't apply just to text, though. It's also important for images. And *while the scale of a banner image might make sense for a desktop layout, it might be too large on a mobile layout*.

By scaling an image down to a more appropriate ratio, you can keep the visual impact while ensuring the information on the site is visible.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
  }

  .banner {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
    border-radius: 8px;
  }

  .content {
    max-width: 600px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    .banner {
      max-width: 90%;
    }

    .content {
      font-size: 15px;
    }
  }
</style>

<img 
  src="https://placehold.co/1200x400/png?text=Large+Banner+Image"
  alt="Banner" 
  class="banner"
>

<div class="content">
  <p>
    This banner image looks great on a large screen, but on smaller devices, it scales down automatically.
    That way, it still delivers a strong visual impression without pushing the actual content off the screen.
    Scaling images properly helps maintain balance and accessibility across layouts.
  </p>
</div>
```

Scale is also important for interactivity, and the ability to actually use your website. *If the text in a navigation bar is not at an appropriate scale, mobile phone users will have a hard time tapping on the links*.

And *if you scale it appropriately, you end up with links that are not only easier to read, but easier to click on for your mobile users*.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    margin: 0;
    background-color: #fafafa;
  }

  .navbar {
    background-color: #004080;
    padding: 15px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 4px;
  }

  .nav-link:hover {
    background-color: #0059b3;
  }

  @media (max-width: 600px) {
    .nav-link {
      font-size: 20px;
      padding: 14px 18px;
    }
  }
</style>

<nav class="navbar">
  <a href="#" class="nav-link">Home</a>
  <a href="#" class="nav-link">About</a>
  <a href="#" class="nav-link">Services</a>
  <a href="#" class="nav-link">Contact</a>
</nav>
```

There are many ways that scale is important in your designs. We've covered the basics, so you should now have a fundamental understanding of its importance.

## How Does Alignment Work in Design?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

When you are designing web pages, it is important to create cohesive and visually appealing designs. One way to achieve this is through the use of alignment.

*Alignment is the process of arranging text and images in a way that creates a visual connection between elements*.

It helps to create a sense of order and organization on the page, making it easier for users to navigate and understand the content.

There are several types of alignment you can use, but the basic ones are:

* left alignment
* center alignment
* right alignment
* justified alignment
* vertical alignment

Left, right, and center alignments are all subtypes of horizontal alignment, while *vertical alignment is used to align elements along a vertical axis*.

Let's take a closer look at each type of alignment and how you can use them in your designs.

*Left alignment is commonly used with text where each element is aligned to the left margin*. Aligning all of the headings and paragraphs on a web page to the left margin makes it easier for the user to read and follow the content.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: left;
    margin: 10px 0;
  }

  p {
    line-height: 1.5;
  }
</style>

<h1>Why Left Alignment Matters</h1>
<p>Left alignment is one of the most common and effective ways to present text on web pages.</p>

<h2>Consistency</h2>
<p>Aligning all headings and paragraphs to the left margin creates a clean and consistent reading flow.</p>

<h3>Easy to Follow</h3>
<p>Users can easily scan and follow content without confusion or misalignment.</p>
```

The opposite of left alignment is right alignment, where each element is aligned to the right margin. This is often used on websites to display additional content like promotional banners or advertisements.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: right;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
</style>

<h1>Right Alignment in Web Design</h1>
<p>Right alignment is commonly used to display additional or promotional content on websites.</p>

<h2>Secondary Content</h2>
<p>Aligning text to the right margin can help separate it visually from the main content.</p>

<h3>Promotional Use</h3>
<p>This alignment is often chosen for banners, advertisements, or sidebar messages.</p>
```

For example, an ad that is aligned to the right margin makes it stand out from the rest of the content on the page but doesn't distract the user from the main content.

Center alignment is where elements are centered on the page. This is often used for headings, logos, and other important elements that you want to draw attention to.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1, h2, h3, p {
    text-align: center;
    margin: 10px 0;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
</style>

<h1>Center Alignment for Impact</h1>
<p>Center alignment is perfect for drawing attention to headings and important elements.</p>

<h2>Eye-Catching Layout</h2>
<p>By centering key content, you make it stand out and create a balanced visual appeal.</p>

<h3>Common Uses</h3>
<p>This technique is often used for logos, hero headings, and call-to-action messages.</p>
```

Justified alignment is when text is aligned to both the left and right margins. This is typically used for descriptive passages or articles, and creates a clean and professional look.

```html
<style>
  body {
    font-family: Georgia, serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 700px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: justify;
    line-height: 1.7;
    margin-bottom: 20px;
  }
</style>

<h1>Justified Alignment for Clean Text Blocks</h1>

<p>
  Justified alignment ensures that each line of text stretches evenly between the left and right margins. 
  This creates a smooth, block-like appearance that looks very polished and professional. 
  It’s commonly used in newspapers, magazines, and formal documents where a uniform look is desired.
</p>

<p>
  However, care should be taken with justified text to avoid uneven spacing or "rivers" of white space, 
  especially on narrow columns or screens. Proper hyphenation and responsive design can help maintain readability.
</p>
```

The last type of alignment is *vertical alignment, which is used to align elements along a vertical axis*.

Vertical alignment can be used, for example, for a contact form on a website. Aligning all of the form inputs like the name, email, and message fields along a vertical axis makes it easier for the user to fill out the form.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
    background-color: #fff;
    color: #222;
    max-width: 400px;
    margin: 0 auto;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input, textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
  }

  button {
    padding: 10px;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>

<form>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="e.g., Jane Doe">

  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="janedoe@example.com">

  <label for="message">Message</label>
  <textarea id="message" name="message" rows="4" placeholder="Write your message here"></textarea>

  <button type="submit">Submit</button>
</form>
```

By using different types of alignment, you can create a sense of order and organization on the page that makes it easier for users to navigate and understand the content.

## What Is the Importance of Whitespace in Design?

White space refers to any type of space around elements like images, text, and buttons. White space is important in design because it helps to create a balance between the elements on the page.

Let's take a look at some examples of how white space can be used effectively in design.

For example, let's consider a call-to-action (CTA) button. CTAs are used to encourage users to take a specific action like signing up for a newsletter or making a purchase.

On the freeCodeCamp homepage, the CTA button is visually separated from other elements. The image below shows this button, with a certain amount of space around it.

![Call-to-action button on the freeCodeCamp homepage with yellow background and black text reading: Get started (it's free). The button is centered on its own line with ample white space above and below.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-importance-of-whitespace-in-design-1.png)By using white space effectively, we can help to make a CTA button more prominent and encourage users to click on it.

Now let's take a closer look at the different types of white space.

This first example uses both macro and active white space. *Macro white space is the space between larger elements like images, text blocks, and buttons*.

*Active white space is the space that is intentionally created to help guide the user's eye and draw attention to certain elements on the page*.

In contrast to active white space, there is also passive white space. *Passive white space is the space that is left over after all the elements on a page have been placed*.

Another type of whitespace would be micro white space. This is the space between individual characters in a line of text.

The image below shows the Frequently Asked Questions section on the freeCodeCamp homepage, where this spacing allows you to read each question and answer easily.

![The Frequently Asked Questions section on the freeCodeCamp homepage, with text spaced sufficiently between each letter.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-importance-of-whitespace-in-design-2.png)Micro white space is important because it helps to improve readability and legibility, making it easier for users to scan and understand the content.

When designing your web pages, you always want to be mindful of the law of proximity. This law states that elements that are close together are perceived as being related, while elements that are far apart are perceived as being unrelated.

You can use white space to help group related elements together and help navigate users through the content on your page.

## What Are Best Practices for Working with Images in Your Designs?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

Adding images to your websites is a great way to engage your users and increase the visual appeal of your site. But there are a few things to consider when working with images in your designs.

The first thing to consider is creating responsive images. Responsive images are images that scale to fit the size of the screen they are being viewed on. This is important because it ensures that your images look good on all devices, from desktops to mobile phones.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 20px;
    background-color: #fefefe;
    color: #333;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    font-size: 16px;
    max-width: 600px;
    margin: 20px auto;
    line-height: 1.6;
  }
</style>

<h1>Responsive Cat Image</h1>

<img 
  src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
  alt="Two cats peacefully sleeping together."
/>

<p>
  This image automatically scales based on the screen size. Whether you're viewing on a desktop or a mobile phone,
  it adjusts its size without losing proportions, making the design clean and user-friendly on all devices.
</p>
```

Another thing to consider is the resolution for images. Higher quality images with better resolution have more pixels per inch. Pixels are small squares that make up an image.

*Pixels per inch, or PPI, is the number of pixels in one inch of an image*. The higher the PPI, the better the image quality.

You want to make sure that your images are high quality and look good on all devices. This means that you should use high resolution images that are optimized for the web.

Another thing to consider is the size of your images and how they fit within the spaces in the layout. You want to make sure that your images are the right size and are not too large or too small.

Using large images that are meant to fit in smaller spaces in the design can slow down your website and make it harder for users to load your site. You want to make sure that your images are the right size and are optimized for the web.

When it comes to image placement, you want to think about balance, hierarchy, and alignment to help ensure your images are optimized for the web.

Balance is the distribution of visual weight in a design. You want to make sure there is a good balance between text and images on the site so it creates a harmonious design.

```html
<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 40px 20px;
    background-color: #f9f9f9;
    color: #333;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .text {
    flex: 1 1 400px;
  }

  .text h2 {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .text p {
    font-size: 16px;
    line-height: 1.6;
  }

  .image {
    flex: 1 1 400px;
  }

  .image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
</style>

<div class="container">
  <div class="text">
    <h2>Balanced Layout</h2>
    <p>
      Balance is essential in web design. By evenly distributing visual weight—such as pairing this block of text
      with a complementary image—you create a layout that feels calm, structured, and easy to navigate.
    </p>
  </div>

  <div class="image">
    <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Two cats peacefully sleeping together.">
  </div>
</div>
```

Hierarchy is the order in which elements are viewed on a page. You want to make sure that images that align with important content are placed higher than images that are less important.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 30px 20px;
    background-color: #fff;
    color: #222;
    max-width: 800px;
    margin: 0 auto;
  }

  .section {
    margin-bottom: 40px;
  }

  .section img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 15px;
  }

  .section h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .section p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="section">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
  <h2>Our Feline Rescue Mission</h2>
  <p>
    This image supports one of our most important stories — the rescue of 12 stray cats from a storm drain. 
    Placing it at the top ensures visitors connect emotionally with our mission right away.
  </p>
</div>

<div class="section">
  <h2>Upcoming Fundraiser</h2>
  <p>
    Join us for a small fundraising event to support our shelter. It’ll be a fun, casual afternoon with 
    snacks, games, and of course — plenty of cats!
  </p>
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >
</div>
```

Alignment is the placement of elements in relation to each other. You want to make sure that your images are aligned with the text and other elements on your site so that it creates a cohesive design.

```html
<style>
  body {
    font-family: sans-serif;
    padding: 40px 20px;
    background-color: #ffffff;
    color: #222;
    max-width: 900px;
    margin: 0 auto;
  }

  .aligned-content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }

  .aligned-content img {
    width: 300px;
    height: auto;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .aligned-text {
    flex: 1;
    min-width: 250px;
  }

  .aligned-text h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .aligned-text p {
    font-size: 16px;
    line-height: 1.6;
  }
</style>

<div class="aligned-content">
  <img 
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" 
    alt="Two cats peacefully sleeping together."
  >

  <div class="aligned-text">
    <h2>Aligned Elements</h2>
    <p>
      In this example, the image is aligned horizontally next to the text block. This creates a visually cohesive layout, 
      where both elements feel like they belong together. Proper alignment like this improves readability and reinforces 
      structure in your design.
    </p>
  </div>
</div>
```

The last thing to consider is accessibility for images. You want to make sure that your images are accessible to all users, including those with visual impairments. This means that you should use alt text for your images so that screen readers can read the text to users who are visually impaired.

## What Is Progressive Enhancement?

*Progressive enhancement is a design approach that ensures all users, regardless of browser or device, can access the essential content and functionality of an application*.

It focuses on delivering a core experience that works for everyone, while offering extra features and improvements to users with more advanced browsers or better internet connections.

The progressive enhancement approach lives by these core principles:

* All core content and basic functionality should be accessible on all browsers
* All advanced layouts should be provided through external CSS stylesheets
* All advanced functionality should be provided through external JavaScript files
* A user's browser preferences should be respected

Using a progressive enhancement approach makes your applications more accessible because all core content and functionality should not be blocked in unsupported environments.

In terms of speed, a progressive enhancement approach can also help improve the performance of your applications.

Those users that are working with slower internet connection speeds will still be able to access the content because the browser will download the necessary resources first.

When it comes to SEO, progressive enhancement can also help improve the visibility of your applications.

Search engines will be able to crawl the content of your applications because the core content is available in the initial HTML response.

While *some have criticized this approach deeming that it is not always realistic for applications that rely heavily on JavaScript for their functionality*, it is still a good practice to follow when building applications.
