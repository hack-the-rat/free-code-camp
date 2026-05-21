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
