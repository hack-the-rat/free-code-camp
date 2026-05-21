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

## What Are Best Practices for Designing Shopping Carts?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

There are thousands of e-commerce websites on the internet, and the shopping cart is a crucial part of the e-commerce experience. A good design can make the shopping cart experience more enjoyable and increase sales. A poor design can lead to abandoned carts and lost sales.

In this lesson, we will discuss some best practices for designing shopping carts. The first design consideration is making sure the shopping cart is visible to users at all times. Most shopping cart designs will have the cart displayed in the upper right hand corner of the page. Users should see the number of items in their cart displayed next to the cart icon, and be able to click on the [cart](https://codesandbox.io/p/sandbox/2nszdp) to see more details about the items they are purchasing.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">2</span>
  </button>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 24px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 13px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  background: white;
  border: 1px solid #ccc;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 10px;
  padding: 10px;
  position: relative;
  z-index: 1000;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}
```

Another consideration is providing a clear way for users to update the quantity of items in their cart. This can be done by providing a quantity input field next to each item in the cart. *Users can easily update the quantity of an item by changing the number in the input field*.

You should also provide a "[Remove](https://codesandbox.io/p/sandbox/kpp6c5)" button next to each item in the cart. This allows users to easily remove items from their cart. You don't want to make it difficult for users to remove items from their cart, as this can lead to frustration and abandoned carts.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <h2>Your Cart</h2>
  <ul class="cart-items">
    <li class="cart-item">
      <span class="item-name">T-Shirt</span>
      <input type="number" min="1" value="2" class="quantity-input" aria-label="Quantity for T-Shirt" />
      <button class="remove-btn">Remove</button>
    </li>
    <li class="cart-item">
      <span class="item-name">Hat</span>
      <input type="number" min="1" value="1" class="quantity-input" aria-label="Quantity for Hat" />
      <button class="remove-btn">Remove</button>
    </li>
  </ul>
</div>
```

```css
.shopping-cart {
  max-width: 400px;
  margin: 20px auto;
  font-family: sans-serif;
  border: 1px solid #ccc;
  padding: 15px;
  background: white;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

.shopping-cart h2 {
  margin-top: 0;
  font-weight: 600;
  font-size: 1.4rem;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
}

.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.item-name {
  flex: 1;
  font-size: 1rem;
}

.quantity-input {
  width: 50px;
  padding: 4px 6px;
  font-size: 1rem;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
}

.remove-btn {
  background: #e74c3c;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.remove-btn:hover,
.remove-btn:focus {
  background: #c0392b;
  outline: none;
}
```

Another consideration is the shopping cart icon itself. The icon should be something easily recognizable for all users. A common icon is a shopping cart with a handle and wheels. Other icons might be a shopping bag or a basket. But you don't want to choose an icon that is too abstract or difficult to understand.

When the user wants to review the total in their cart, they should be able to easily find the total cost of all items in the cart. This should be displayed prominently on the [page](https://codesandbox.io/p/sandbox/8j5t5m), so users don't have to search for it.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
  </div>
</div>
```

```css
.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
}
```

Finally, *you should provide a clear call-to-action button for users to proceed to checkout. This button should be prominently displayed on the page*, so users don't have to search for it.

You don't want to have too many buttons on the page, as this can lead to confusion. The [call-to-action](https://codesandbox.io/p/sandbox/j5t47s) button should be the most prominent button on the page, so users know exactly what to do next. You should use the brand's primary color for the button, so it stands out from the rest of the page.

```html
<link rel="stylesheet" href="styles.css" />

<div class="shopping-cart">
  <button id="cart-btn" aria-label="Shopping cart">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-shopping-cart"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
    <span id="item-count">3</span>
  </button>
  <div id="cart-details">
    <ul id="cart-items">
      <li>T-Shirt x2 - $40.00</li>
      <li>Hat x1 - $15.00</li>
    </ul>
    <div id="cart-total">
      Total: <strong>$55.00</strong>
    </div>
    <button id="checkout-btn">Proceed to Checkout</button>
  </div>
</div>
```

```css
:root {
  --primary-color: #007bff; 
}

.shopping-cart {
  position: fixed;
  top: 20px;
  right: 20px;
  font-family: sans-serif;
  width: 280px;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 6px;
}

#cart-btn {
  background: none;
  border: none;
  cursor: default;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px;
  color: #333;
  font-size: 28px;
}

#item-count {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 2px 7px;
  font-size: 14px;
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 18px;
  height: 18px;
  line-height: 14px;
  text-align: center;
  font-weight: 700;
  user-select: none;
  box-sizing: border-box;
}

#cart-details {
  margin-top: 10px;
}

#cart-items {
  list-style: none;
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 1rem;
}

#cart-items li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
}

#cart-total {
  font-size: 1.2rem;
  font-weight: 700;
  text-align: right;
  color: #111;
  margin-bottom: 15px;
}

#checkout-btn {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px 0;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#checkout-btn:hover,
#checkout-btn:focus {
  background-color: #0056b3;
  outline: none;
}
```

These are just a few best practices for designing shopping carts. By following these guidelines, you can create a shopping cart that is easy to use and will help increase sales for your e-commerce website.

## What Is Progressive Disclosure?

 **NOTE** : Some of the interactive examples might use CSS that you haven't learned yet. Don't worry about trying to understand all of the code. The goal of the examples is to show you previews for these design concepts so you better understand how things work. To see the previews, you will need to enable the interactive editor.

*A progressive disclosure is a design pattern used to only show users relevant content based on their current activity and hide the rest*. This is done to reduce cognitive load and make the [user experience](https://codesandbox.io/p/sandbox/l67xnw) more intuitive.

```html
<link rel="stylesheet" href="styles.css">

<div class="progressive-disclosure">
  <button id="show-details-btn" aria-expanded="false" aria-controls="extra-content">
    Show More Details
  </button>
  <div id="extra-content" class="hidden" tabindex="-1">
    <p>
      Here are additional details that are revealed only when you want to see them.
      This keeps the interface clean and reduces cognitive load.
    </p>
  </div>
</div>
<script src="index.js"></script>

```

```css
.progressive-disclosure {
  font-family: sans-serif;
  max-width: 400px;
  margin: 20px auto;
}

#show-details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

#show-details-btn:hover,
#show-details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#extra-content {
  margin-top: 15px;
  padding: 10px;
  background-color: #f7f9fcff;
  border: 1px solid #ddd;
  border-radius: 5px;
}

```

```js
const btn = document.getElementById('show-details-btn');
const content = document.getElementById('extra-content');

btn.addEventListener('click', () => {
  const isHidden = content.classList.toggle('hidden');
  btn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    content.focus();
  }
});

```

For example, when you use Google's search page, most of your searches will be simple. So having a simple user interface with very few options makes sense. But for the few times you will need a more advanced search, *Google provides an advanced search option that will reveal more options*.

You can find Google's advanced search option from the settings menu on the Google homepage. Or you can go to `google.com/advanced_search`.

Another example of progressive disclosure would be the "More details" button on products in an e-commerce website. When you visit a site like Amazon, you will see a list of product images in different categories. This allows users to shop with ease and not get overwhelmed by too much information.

If the user is interested in a particular product, they can click on the product image to reveal more details about the product. Displaying all of the information right away may be overwhelming for the user. So, by using progressive disclosure, the user can choose to see more [information](https://codesandbox.io/p/sandbox/h24nkk) when they are ready.

```html
<link rel="stylesheet" href="styles.css" />

<div class="product-list">
  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-1">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 1">More details</button>
    <div id="details-1" class="product-details hidden" tabindex="-1">
      <p><strong>Product 1:</strong> This is a great product with awesome features that you'll love.</p>
      <ul>
        <li>Feature A</li>
        <li>Feature B</li>
        <li>Feature C</li>
      </ul>
    </div>
  </div>

  <div class="product" tabindex="0" aria-expanded="false" aria-controls="details-2">
    <img src="https://placehold.co/150x150" alt="Example Product Image" />

    <button class="details-btn" aria-label="Show more details for Product 2">More details</button>
    <div id="details-2" class="product-details hidden" tabindex="-1">
      <p><strong>Product 2:</strong> Another fantastic item with lots of benefits for your daily use.</p>
      <ul>
        <li>Benefit X</li>
        <li>Benefit Y</li>
        <li>Benefit Z</li>
      </ul>
    </div>
  </div>
</div>
<script src="index.js"></script>
```

```css
.product-list {
  font-family: sans-serif;
  display: flex;
  gap: 20px;
  max-width: 800px;
  margin: 20px auto;
  flex-wrap: wrap;
}

.product {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  width: 180px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  position: relative;
}

.product img {
  width: 100%;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
}

.details-btn {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s ease;
}

.details-btn:hover,
.details-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.product-details {
  margin-top: 10px;
  background-color: #f7f9fc;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 8px;
  font-size: 0.9rem;
}

.hidden {
  display: none;
}

```

```js
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const details = product.querySelector('.product-details');
    const isHidden = details.classList.toggle('hidden');
    product.setAttribute('aria-expanded', !isHidden);
    if (!isHidden) {
      details.focus();
      button.textContent = 'Hide details';
    } else {
      button.textContent = 'More details';
    }
  });
});

```

So, what are some best practices for designing with the progressive disclosure technique? The first consideration is to keep all important [information](https://codesandbox.io/p/sandbox/s6dhjl) visible at all times. Users should not have to struggle to find key information because it is hidden by extra advanced features.

```html
<link rel="stylesheet" href="styles.css" />

<div class="info-section">
  <h2>Order Summary</h2>
  <p><strong>Items in Cart:</strong> 3</p>
  <p><strong>Total Price:</strong> $75.00</p>
  <div class="advanced-options">
    <button id="toggle-advanced-btn" aria-expanded="false" aria-controls="advanced-details">
      Show Advanced Options
    </button>
    <div id="advanced-details" class="hidden" tabindex="-1">
      <p>Apply coupon codes, gift wrapping, or select shipping preferences here.</p>
      <form>
        <label for="coupon">Coupon Code:</label><br />
        <input type="text" id="coupon" name="coupon" /><br /><br />
        <label>
          <input type="checkbox" name="gift-wrap" /> Gift wrap this order
        </label><br /><br />
        <label for="shipping">Shipping method:</label><br />
        <select id="shipping" name="shipping">
          <option value="standard">Standard (Free)</option>
          <option value="express">Express ($10.00)</option>
        </select>
      </form>
    </div>
  </div>
</div>

<script src="index.js"></script>
```

```css
.info-section {
  font-family: sans-serif;
  max-width: 400px;
  margin: 30px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
}

h2 {
  margin-top: 0;
}

.advanced-options {
  margin-top: 20px;
}

#toggle-advanced-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

#toggle-advanced-btn:hover,
#toggle-advanced-btn:focus {
  background-color: #0056b3;
  outline: none;
}

.hidden {
  display: none;
}

#advanced-details {
  margin-top: 15px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f7f9fc;
}
```

```js
const toggleBtn = document.getElementById('toggle-advanced-btn');
const advancedDetails = document.getElementById('advanced-details');

toggleBtn.addEventListener('click', () => {
  const isHidden = advancedDetails.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  if (!isHidden) {
    advancedDetails.focus();
  }
});
```

Another consideration is to provide a single access point for users to access additional features or information. This could be a [button or link](https://codesandbox.io/p/sandbox/9wld6m) that is always visible on the page. *Adding multiple access points can be confusing for users and can lead to a poor user experience*.

```html
<link rel="stylesheet" href="styles.css" />
<script src="index.js" defer></script>

<div class="product-preview">
  <img src="https://placehold.co/150x150" alt="Example Product Image" />

  <h3>Sample Product</h3>
  <p class="price">$49.99</p>
  <button class="info-toggle" aria-expanded="false" aria-controls="product-info">
    More Info
  </button>
  <div id="product-info" class="product-info hidden" tabindex="-1">
    <p>This product is made from high-quality materials and comes with a 2-year warranty. Perfect for everyday use.</p>
    <ul>
      <li>Durable and lightweight</li>
      <li>Available in multiple colors</li>
      <li>Free shipping included</li>
    </ul>
  </div>
</div>
```

```css
body {
  font-family: sans-serif;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.product-preview {
  max-width: 300px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  text-align: center;
}

.product-preview img {
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
}

.price {
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.info-toggle {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.info-toggle:hover,
.info-toggle:focus {
  background-color: #0056b3;
  outline: none;
}

.product-info {
  margin-top: 15px;
  text-align: left;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px;
  border-radius: 6px;
}

.hidden {
  display: none;
}
```

```js
const toggleBtn = document.querySelector('.info-toggle');
const infoPanel = document.getElementById('product-info');

toggleBtn.addEventListener('click', () => {
  const isHidden = infoPanel.classList.toggle('hidden');
  toggleBtn.setAttribute('aria-expanded', !isHidden);
  toggleBtn.textContent = isHidden ? 'More Info' : 'Hide Info';

  if (!isHidden) {
    infoPanel.focus();
  }
});
```

As you design your applications, think about the overall user experience and how you can use progressive disclosure to make it easier for users to find the information they need. When done correctly it can make a big difference to the overall user experience.

## What Is Deferred and Lazy Registration?

*Lazy registration is a UI design pattern that allows users to browse and interact with your application without having to register*. A good example of this would be an e-commerce site. Users should be able to browse through the products and add a few items to their cart. Then, if they are interested in purchasing, they will need to register.

The reason is that *users need to see the value your site offers before they are willing to provide their information and register*. When designing your applications, users should be able to see the value and feel like the application is safe to provide their information. Otherwise, they will not be willing to register and you will lose potential customers.

You will need to make sure to communicate that the user's sensitive data will be protected and secure. In later modules, we will discuss how to secure your application and protect your user's data.

Another good example of lazy registration would be YouTube. YouTube is a video sharing platform with millions of videos on everything from tech, pop culture, and gaming. If you visit YouTube, users can watch as many videos as they like without needing to sign in or register. However, if they want to like, comment, or subscribe to a channel, they will need to register.

If the user likes the content they are watching or wants to participate in the conversations, then they will be more willing to register. Lazy registration is a useful design pattern that allows users to see the value of your application before they are willing to provide their information.

The next time you are designing an application, consider using lazy registration to increase user engagement and retention.
