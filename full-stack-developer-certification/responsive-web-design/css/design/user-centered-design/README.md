# User-Centered Design

## What Is User-Centered Design?

User-centered design is a web development approach that prioritizes the end user, from their needs to their preferences and limitations. *The goal of user-centered design is to craft a web page that is intuitive, efficient to use, and pleasing for your users to interact with*.

One of the first aspects of user-centered design is *considering your target demographics*. For example, if your intended user-base is younger, you might leverage more flashy eye-catching designs that grab their attention immediately. For an older audience, you might focus more on clear and streamlined designs without distractions.

Another aspect to consider is the goal of your end users. For example, if you're building an e-commerce page for your products, you probably don't want to advertise someone else's products on your page. But if you're building a personal blog, you might include advertisement elements to generate revenue from passive readers.

User behavior is an important factor as well. *You'll want to leverage an analytics tool, like Google Analytics, to measure how your users engage with your pages*. This can reveal areas where users might be getting "stuck" and leaving your page, or opportunities to improve the overall interaction flow.

A key to user-centered design is to actually involve your users. Providing a feedback channel where they can share their experiences and pain points with your site allows you to capture vital information and iterate further to improve. Ultimately, user-centered design means you need to put the user at the forefront of your decision making, whether that's through research or direct feedback.

## What Are User Requirements, User Research, and Testing?

*User research is the systematic study of the people who use your product. The goal is to measure user needs, behaviors, and pain points*.

User research comes in many forms. Perhaps one of the most common is the Net Promoter Score, or NPS. The NPS measures how likely your users are to recommend your product to a friend. NPS is measured through a survey offered at key milestones along the user's journey, such as after 7 days, 30 days, and 90 days. NPS is measured on a scale of 0 to 10, with 9 and 10 indicating an active promoter of your site.

Another research vector is an exit interview. This is a survey you show to your users when they cancel a subscription or delete an account. Data from this survey can give you insight into the factors causing user churn, so you can address them.

User testing, on the other hand, refers to the practice of capturing data from users as they interface with your application. For example, a video game going through beta testing is a form of user testing. One you might run into as a web developer is A/B testing. A/B testing involves shipping a new feature to a randomly selected subset of your user base. You can then leverage analytics data to determine if the feature is beneficial.

Finally, user requirements refer to the stories or rubric that your application needs to follow. This can inform the development process. User requirements might be defined by user research, or industry standards. They can even be defined by stakeholder input.

*These requirements may be functional, meaning they dictate how your application should work, or non-functional, meaning they define how your application should behave*. User requirements are not static, either. The information from both user testing and user research can impact the requirements, and they will change as your user base changes.

Understanding the difference is essential for collecting the most accurate data so you can deliver the best experience for your end users.

## What Are Best Practices for Designing a Dark Mode Feature?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work.

*Dark mode is a special feature on web applications where you can change the default light color scheme to a dark color scheme*. This helps reduce eye strain and improve readability in low-light conditions. When designing your dark mode features, it is important to understand best practices to ensure that your dark mode feature is effective and user-friendly.

Enable the [interactive editor](https://codesandbox.io/p/sandbox/xxkmzg) and click on the `Toggle Dark Mode` button in the example below to see how dark mode works.

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <p>This is a simple dark mode example.</p>
</div>

<script src="index.js"></script>
```

```css
body {
  background: #f5f5f5;
  color: #222;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
}

button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

body.dark {
  background: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

The first consideration is the avoidance of saturated colors in dark mode. Saturated colors are colors that are bright and intense. For example, a bright magenta button against a dark gray background can be too intense and cause eye strain. Instead, *you should use desaturated colors in dark mode*. Desaturated colors are colors that are less intense, have a lower saturation level, and more comfortable to look at in dark mode. To see the previews, you will need to enable the [interactive editor](https://codesandbox.io/p/sandbox/ymhhn5).

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Color Saturation in Dark Mode</h1>
  <p>Compare the two buttons below. The first uses a saturated color, the second is desaturated for better accessibility in dark mode.</p>

  <div class="buttons">
    <button class="saturated">Saturated Button</button>
    <button class="desaturated">Desaturated Button</button>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  transition: background 0.3s, color 0.3s;
  padding: 1rem;
}

button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 1rem;
  transition: background 0.3s, color 0.3s;
}

.buttons button {
  border: none;
}

.saturated {
  background-color: #ff00ff; 
  color: white;
}

.desaturated {
  background-color: #c472b5; 
  color: white;
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark .saturated {
  background-color: #ff00ff; 
  color: black;
}

body.dark .desaturated {
  background-color: #925f88; 
  color: white;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

Another consideration with dark mode is the use of pure black backgrounds with white text. *While this high contrast can be effective, it can also be too harsh on the eyes*. Instead, consider using a dark gray background with light gray text for a softer contrast. Text will be easier on the eyes and more comfortable to read in dark mode. To see the previews, you will need to enable the [interactive editor](https://codesandbox.io/p/sandbox/pv655m).

```html
<link rel="stylesheet" href="styles.css">

<button id="theme-toggle">Toggle Dark Mode</button>

<div class="content">
  <h1>Dark Mode Contrast Comparison</h1>
  <p>Compare the two sections below. One uses pure black and white, the other uses dark gray and light gray for better readability.</p>

  <div class="dark-mode-examples">
    <div class="box harsh-dark">
      <h2>High Contrast</h2>
      <p>Pure black background with white text. While readable, it can be harsh on the eyes.</p>
    </div>

    <div class="box soft-dark">
      <h2>Soft Contrast</h2>
      <p>Dark gray background with light gray text. Easier to read and more comfortable for long periods.</p>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
body {
  background-color: #f0f0f0;
  color: #111;
  font-family: sans-serif;
  padding: 1rem;
  transition: background 0.3s, color 0.3s;
}

button {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.dark-mode-examples {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
}

.box {
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  transition: background 0.3s, color 0.3s;
}

.box {
  background-color: #ffffff;
  color: #111;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

body.dark .box.harsh-dark {
  background-color: #000000; 
  color: #ffffff;   
}

body.dark .box.soft-dark {
  background-color: #1e1e1e; 
  color: #cccccc;   
}

body.dark {
  background-color: #121212;
  color: #e0e0e0;
}
```

```js
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
```

Another consideration is the use of dark mode with the site's brand identity. A brand identity is a set of visual elements that represent a brand, such as the logo, colors, and typography. When implementing dark mode, you should consider how the dark mode feature is consistent with your brand's colors and style. It is fine to have the brand icon and buttons at full saturation, while the surrounding elements are desaturated.

In general, when it comes to design, you always want to be mindful of the user experience and contrast levels. Dark mode is no exception, and by following these best practices, you can create a dark mode feature that is effective and user-friendly.

## What Are Best Practices for Designing Breadcrumbs?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

When it comes to web design, there are many types of navigational aids you can use. Examples include top navigation bars, sidebars, and footers. But *if your site is on the more complex side with deeper levels of navigation, you might want to consider using breadcrumbs*.

*Breadcrumbs are a navigation aid that shows the user where they are in the site's hierarchy*. Here is an example of what breadcrumbs look like for a mock-up electronics website:

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home / Electronics / Phones / Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

In most websites, breadcrumbs are displayed at the top of the page, showing the user the path they took to get to the current page. Starting from the `Homepage`, the user navigated to the `Electronics` category, then to the `Phones` category, and finally to the `Smartphone XYZ` product. You have probably interacted with breadcrumbs on a website as you were searching for a product or specific piece of information.

The use of breadcrumbs is helpful because it can help users understand where they are in the site's hierarchy and how to navigate back to the previous pages. This is especially useful when a user has come from a search result or an external link and needs to understand the context of the page they are on.

When it comes to designing breadcrumbs, there are a few considerations to keep in mind. The first is to decide on what the separator will be. The separator is the character that separates the different levels of the hierarchy. Common separators include the greater than sign (`>`), right angle quotation marks (`»`) ,and the forward slash (`/`).

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home > Electronics > Phones > Smartphone XYZ
</div>
```

```css
.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

The second consideration is the placement of the breadcrumbs. Breadcrumbs are typically placed at the top of the page, either above or below the main navigation bar. Users shouldn't have to struggle to find the breadcrumbs, so make sure they are visible and easy to locate.

```html
<link rel="stylesheet" href="styles.css">
<nav class="main-nav">
  <a href="#">Home</a>
  <a href="#">Electronics</a>
  <a href="#">Phones</a>
</nav>
<div class="breadcrumbs">
  Home > Electronics > Phones > Smartphone XYZ
</div>
```

```css
.main-nav {
  background-color: #333;
  padding: 1rem;
}

.main-nav a {
  color: white;
  margin-right: 1rem;
  text-decoration: none;
}

.breadcrumbs {
  font-size: 0.9rem;
  color: #555;
  margin: 1rem 0;
}
```

Another consideration is the size of the breadcrumbs. You want to make sure the breadcrumbs are large enough to be easily read, but not so large that they take up too much space on the page. Remember, the breadcrumbs aren't meant to serve as a primary navigation tool, but rather as a secondary navigational aid. In websites where there is a lot of information on a page, users can easily see where they are in the hierarchy and navigate back to previous pages using breadcrumbs.

```html
<link rel="stylesheet" href="styles.css">
<div class="breadcrumbs">
  Home > Electronics > Phones > Smartphone XYZ
</div>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
```

```css
.breadcrumbs {
  font-size: 1rem;
  color: #555;
  margin: 1rem 0;
}   

p {
  font-size: 1.2rem;
  line-height: 1.6;
}
```

So when should you use breadcrumbs on your site? If your site is simple and has a shallow hierarchy, breadcrumbs might not be necessary. A shallow hierarchy means that the site has only a few levels of navigation, so breadcrumbs might not add much value. Typically, you will see breadcrumbs on e-commerce sites, news sites, and other sites with a deep hierarchy like technical documentation sites.

## What Are Best Practices for Designing Cards?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

Card components are a very common occurrence in e-commerce, social media, and news sites. They are used to help display information in a structured way. When you are designing your cards, *it is important to understand best practices so your users can easily understand the information you are trying to convey*.

The first consideration for card design should be simplicity. You don't want your cards to be visually cluttered or display too much information. For example, if a card design is visually cluttered, there will be too much information for the user to process all at once.

Here is an example of a cluttered card design:

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2><strong><em>Product Name: Ultimate Edition</em></strong></h2>
  <p>
    This is a great product that you will love! It has many features and benefits that will make your life easier and more enjoyable. Whether you're at home or on the go, this product is perfect for all situations. Don’t miss out on this incredible offer, buy now and experience the difference!
  </p>
  <button>Buy Now</button>
  <button>Learn More</button>
  <button>Add to Wishlist</button>
  <p><strong>Only 3 left in stock!</strong></p>
  <p><em>Rated 4.8 stars by 2,391 customers</em></p>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}
.card p {
  font-size: 1em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Having less information and good spacing between items on the card makes it easier for the user to process the information, and allows for multiple cards on the page.

Here is an example of a simple card design:

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 200px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Another thing to consider is where the user can click on the card. Some card designs will have a single button, making it obvious where the user can click. Other card designs will have the entire card clickable. When the user hovers over any part of the card, the card will change color or have a shadow effect to indicate that the card is clickable. Whatever design you choose, it needs to be consistent throughout your site and easy for the user to understand.

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <a href="#">
    <img src="https://placehold.co/150x150" alt="Example Product Image">
    <h2>Product Name</h2>
    <button>Buy Now</button>
  </a>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card a {
  text-decoration: none;
  color: inherit;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

Another consideration is the use of media on your cards. *Choosing high-quality media can significantly enhance the user experience*. If you are using images or videos for say a product card, *the higher the quality the more the user will be interested in that product*. But if you use poor media quality, then the user might not trust the quality of your products and services.

One of the last things to consider is the use of color hierarchy. *You want to make sure that the most important information on the card is the most prominent*. You can use bright colors for important elements like a call-to-action button, and light colors for less important items on a card.

```html
<link rel="stylesheet" href="styles.css">

<div class="card">
  <img src="https://placehold.co/150x150" alt="Example Product Image">
  <h2>Product Name</h2>
  <button>Buy Now</button>
</div>
```

```css
.card {
  border: 1px solid #ccc;
  padding: 16px;
  width: 300px;
  text-align: center;
}

.card img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.5em;
  margin: 8px 0;
}

.card button {
  background-color: #28a745; 
  color: white;
  padding: 10px 16px;
  border: none;
  cursor: pointer;
}
```

As you continue to work on web applications, keep in mind the different best practices for card design. This will help you create better user experiences for your users.

## What Are Best Practices for Designing Infinite Scrolls?

 **NOTE** : Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

*Infinite scrolling is a design pattern that loads more content as the user scrolls down the page*. Oftentimes, this is used on social media sites like Twitter. For example, if you are logged in and want to see more tweets, you can scroll down and more tweets will load. This is an example of infinite scrolling.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
```

```js
// Simulate loading more content as the user scrolls
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

function loadMorePosts() {
  const container = document.querySelector('.infinite-scroll');
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

Infinite scrolling is also used as a substitute for pagination. Pagination is a design pattern that breaks up content into pages. This is often used when there is a lot of content to display. An example of pagination is when you search for something on Google and you see the search results on multiple pages. With pagination, you have to click on a button to go to the next page. With infinite scrolling, you just keep scrolling down and more content will load.

```html
<link rel="stylesheet" href="styles.css">

<div class="pagination">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will be on the next pages -->
</div>
<div class="pagination-controls">
  <button class="prev" disabled>Previous</button>
  <button class="next">Next</button>
</div>
<script src="index.js"></script>
```

```css
.pagination {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.pagination-controls {
  margin-top: 12px;
}

.pagination-controls button {
  padding: 8px 16px;
  margin-right: 8px;
}
```

```js
let currentPage = 1;
const postsPerPage = 3;
const totalPosts = 9; 
const totalPages = Math.ceil(totalPosts / postsPerPage);
const container = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next'); 

function renderPosts() {
  container.innerHTML = '';
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  for (let i = start; i < end && i < totalPosts; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${i + 1}`;
    container.appendChild(post);
  }
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPosts();
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPosts();
  }
});

renderPosts();
```

As you incorporate infinite scrolling into your design, there are a few best practices to keep in mind. The first consideration is to provide a "Load More" button that loads the next set of results when the user clicks on it. This is a good way to *give the user control over when they want to see more content*.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <!-- More posts will load when the user clicks "Load More" -->
</div>
<button class="load-more">Load More</button>
<script src="index.js"></script>
```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.load-more {
  margin-top: 12px;
  padding: 8px 16px;
}
```

```js
const loadMoreButton = document.querySelector('.load-more');
const container = document.querySelector('.infinite-scroll');   
loadMoreButton.addEventListener('click', () => {
  loadMorePosts();
});

function loadMorePosts() {
  for (let i = 0; i < 3; i++) {
    const post = document.createElement('div');
    post.className = 'post';
    post.textContent = `Post ${container.children.length + 1}`;
    container.appendChild(post);
  }
}
```

Another consideration would be to add a "Back" button. This gives users the ability to go back to the previous page without having to scroll all the way back up. This creates a better user experience and gives them more control over their browsing experience.

Sometimes you will see designs with a "Back to the top" button which leads users back to the top of the page of results. Another consideration is to provide a loading indicator. Users should have a clear indication that more content is being loaded; otherwise, they might think that the page is broken.

```html
<link rel="stylesheet" href="styles.css">

<div class="infinite-scroll">
  <div class="post">Post 1</div>
  <div class="post">Post 2</div>
  <div class="post">Post 3</div>
  <div class="post">Post 4</div>
  <div class="post">Post 5</div>
  <div class="post">Post 6</div>
  <div class="post">Post 7</div>
  <div class="post">Post 8</div>
  <div class="post">Post 9</div>
  <div class="post">Post 10</div>
  <!-- More posts will load here as the user scrolls down -->
</div>

<div class="loading-indicator" style="display: none;">Loading...</div>

<button id="back-to-top" class="back-to-top">↑ Back to Top</button>

<script src="index.js"></script>

```

```css
.infinite-scroll {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.post {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.loading-indicator {
  margin-top: 12px;
  font-weight: bold;
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: none;
  padding: 10px 15px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.back-to-top:hover {
  background-color: #0056b3;
}
```

```js
const container = document.querySelector('.infinite-scroll');
const loadingIndicator = document.querySelector('.loading-indicator');
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePosts();
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function loadMorePosts() {
  loadingIndicator.style.display = 'block';
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      const post = document.createElement('div');
      post.className = 'post';
      post.textContent = `Post ${container.children.length + 1}`;
      container.appendChild(post);
    }
    loadingIndicator.style.display = 'none';
  }, 1000);
}
```

One of the last considerations would be to keep the footer accessible to the user. *If the footer contains important information, then it should be accessible to the user at all times*.

In conclusion, infinite scrolling is a great way to display content on your website. However, you should keep in mind the best practices when designing your infinite scroll so that you can provide the best user experience possible.

## What Are Best Practices for Designing Modal Dialogs?

 **NOTE** : Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

What is a modal? It's the type of pop-up that a website might show you on top of their content. HTML has a `dialog` element that you can use to create modals.

The content behind a modal is usually dimmed. *This helps the user visually focus on the area you want them to interact with* – in this case, the modal.

It's always a good idea to allow the user to click outside of the modal to close it.

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button>Subscribe</button>
  <button>Close</button>
</dialog>

<script src="index.js"></script>
```

```css
dialog {
  border: none;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

dialog::backdrop {
  background: rgba(0, 0, 0, 0.5);
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('button:last-of-type');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
}); 

```

You'll often see very prominent buttons on modals. These are called CTAs, or *call-to-action*. You want these to be easily identifiable since the purpose of interrupting the user's flow with a modal is to prompt them to take a specific action.

Modals should also have a close button. While you may really want the user to click on your CTAs, *it's important to give them an option to back out of the modal and resume whatever they were previously doing*.

```html
<link rel="stylesheet" href="styles.css">
<button id="open-modal">Open Modal</button>
<dialog>
  <h2>Subscribe to our Newsletter!</h2>
  <p>Get the latest updates and offers.</p>
  <button class="cta">Subscribe</button>
  <button class="close">Close</button>
</dialog>
<script src="index.js"></script>
```

```css
.cta {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.close {
  background-color: transparent;
  color: #007BFF;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
```

```js
const dialog = document.querySelector('dialog');
const closeButton = dialog.querySelector('.close');
const openModalButton = document.getElementById('open-modal');

closeButton.addEventListener('click', () => {
  dialog.close();
});

openModalButton.addEventListener('click', () => {
  dialog.showModal();
});

// Close the modal when clicking outside of it
dialog.addEventListener('click', (event) => {
  const rect = dialog.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );
  if (!isInDialog) {
    dialog.close();
  }
});

```

There are, of course, accessibility concerns with modals, such as correctly managing focus on elements. However, if you use these general practices as your starting point, you'll have a solid foundation to build on.

## What Are Best Practices for Progress Indication on Forms, Registration, and Setup?

 **NOTE** : Some of the interactive examples might use CSS and JavaScript that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

*Progress indication is a way to show users how far they are in a process*. It can be used in forms, registration, and setup processes. The goal is to help users understand where they are in the process and how much more they need to do.

For example, you can use a [progress indication bar](https://codesandbox.io/p/sandbox/wk5m92) to show users what is left to do when filling forms. You don't want to create a situation where the user needs to fill out a lengthy form and they don't know how many more steps they need to complete. Transparency is key so the user knows whether they have enough time to sit down and complete the form or if they need to come back later.

```html
<link rel="stylesheet" href="styles.css">

<form id="multiStepForm">
  <div class="form-progress">
    <label class="progress-label">Form progress</label>
    <div class="progress-container">
      <div class="progress-bar"></div>
      <div class="progress-text">Step 1 of 3</div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Personal Information</legend>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <label for="address">Street Address:</label>
    <input type="text" id="address" name="address" required>

    <label for="city">City:</label>
    <input type="text" id="city" name="city" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Review & Submit</legend>
    <p>Please review your information before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>

```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555; 
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0; 
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('multiStepForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const progressText = form.querySelector('.progress-text');
const totalSteps = steps.length;

let currentStep = 0;

function updateProgress() {
  const percent = ((currentStep + 1) / totalSteps) * 100;
  progressBar.style.width = percent + '%';
  progressText.textContent = `Step ${currentStep + 1} of ${totalSteps}`;
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

showStep(currentStep);

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted!');
});

```

When designing a progress indication section, there are a few best practices to keep in mind. The first consideration is to keep it simple. You don't want to overwhelm the user with too much information where they get frustrated and leave the site.

The second consideration is to *make it possible to go back to previous steps. This is important because users may want to go back and check their previous answers or make changes*.

Another consideration is to *make the progress indication section easy to find*. If the user can't find it, they won't know how far they are in the process.

The last [consideration](https://codesandbox.io/p/sandbox/qk9x7j) is to *have clear section titles, percentages, or steps*. If you just have a progress bar with no context, the user won't know what it means.

```html
<link rel="stylesheet" href="styles.css">

<form id="progressForm">
  <div class="form-progress" aria-label="Form progress">
    <label class="progress-label">Step <span id="currentStep">1</span> of <span id="totalSteps">4</span> (<span id="percentage">25%</span>)</label>
    <div class="progress-container" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="25">
      <div class="progress-bar"></div>
    </div>
  </div>

  <!-- Step 1 -->
  <fieldset class="form-step active">
    <legend>Basic Information</legend>
    <p>Please enter your basic information.</p>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 2 -->
  <fieldset class="form-step">
    <legend>Contact Details</legend>
    <p>How can we reach you?</p>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 3 -->
  <fieldset class="form-step">
    <legend>Address</legend>
    <p>Where do you live?</p>
    <label for="address">Street:</label>
    <input type="text" id="address" name="address" required>

    <button type="button" class="prev-btn">Previous</button>
    <button type="button" class="next-btn">Next</button>
  </fieldset>

  <!-- Step 4 -->
  <fieldset class="form-step">
    <legend>Review</legend>
    <p>Review your answers before submitting.</p>

    <button type="button" class="prev-btn">Previous</button>
    <button type="submit">Submit</button>
  </fieldset>
</form>
<script src="index.js"></script>
```

```css
.form-progress {
  max-width: 500px;
  margin: 20px auto 30px;
  font-family: Arial, sans-serif;
}

.progress-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.progress-container {
  position: relative;
  background-color: #555;
  border-radius: 8px;
  height: 30px;
  overflow: hidden;
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
}

.progress-bar {
  background-color: #4caf50;
  height: 100%;
  width: 0;
  border-radius: 8px 0 0 8px;
  transition: width 0.3s ease;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  color: #fff;
  pointer-events: none;
  user-select: none;
}

form {
  max-width: 500px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0 0 20px;
}

legend {
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
  color: #222;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #333;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input[type="text"]:focus,
input[type="email"]:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

.form-step {
  display: none;
}

.form-step.active {
  display: block;
}

button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 18px;
  font-size: 1em;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.2s ease;
}

button:hover:not(:disabled) {
  background-color: #45a049;
}

button:disabled {
  background-color: #9e9e9e;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .form-progress, form {
    max-width: 90%;
    margin: 20px auto;
  }
}
```

```js
const form = document.getElementById('progressForm');
const steps = form.querySelectorAll('.form-step');
const progressBar = form.querySelector('.progress-bar');
const currentStepSpan = document.getElementById('currentStep');
const totalStepsSpan = document.getElementById('totalSteps');
const percentageSpan = document.getElementById('percentage');

const totalSteps = steps.length;
let currentStep = 0;

totalStepsSpan.textContent = totalSteps;

function updateProgress() {
  const percent = Math.round(((currentStep + 1) / totalSteps) * 100);
  progressBar.style.width = percent + '%';
  currentStepSpan.textContent = currentStep + 1;
  percentageSpan.textContent = percent + '%';

  // Update ARIA attribute
  form.querySelector('.progress-container').setAttribute('aria-valuenow', percent);
}

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
  });
  updateProgress();
}

form.querySelectorAll('.next-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep < totalSteps - 1) {
      currentStep++;
      showStep(currentStep);
    }
  });
});

form.querySelectorAll('.prev-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Form submitted! Thanks!');
});

showStep(currentStep);

```

These are just a few best practices to keep in mind when designing progress indication on forms, registration, and setup processes. Study a few examples on big websites and see how they implement progress indication. Then test your design with real users to see how well it works.
