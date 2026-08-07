# Best Practices for Styling Forms

## What Are Some Best Practices for Styling Text Inputs?

As with all text elements, you need to ensure the styles you apply to the text input are accessible. This means the font needs to be adequately sized and the color needs to have sufficient contrast with the background.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="username">Username</label>
  <input type="text" id="username" name="username" placeholder="Enter your username">
  <button type="submit">Submit</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="text"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="text"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

The placeholder, however, is often forgotten. It's important to remember that this is also text and you will likely need to change the styling to ensure it's readable.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" placeholder="you@example.com">
  <button type="submit">Submit</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 320px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
}

input[type="email"]::placeholder {
  color: #555;
  opacity: 1;
  font-style: italic;
}

input[type="email"]:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Another thing to keep in mind is that you should allow the user to modify the input. For example, *if it's a textarea you should not remove the ability to resize it*. The input should also scale accordingly when the user zooms the page.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="message">Your message</label>
  <textarea id="message" name="message" placeholder="Type your message here..."></textarea>
  <button type="submit">Send</button>
</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  line-height: 1.5;
}

.accessible-form {
  max-width: 480px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.8rem;
  font-size: 1rem;
  border: 2px solid #555;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  resize: both;
  box-sizing: border-box;
}

textarea::placeholder {
  color: #555;
  opacity: 1;
}

textarea:focus {
  outline: 3px solid #1e90ff;
  border-color: #1e90ff;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Input elements are also focusable. When you are editing your styles, you should take care that you preserve a noticeable indicator when the element has focus such as a bold border.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Enter your full name">

  <label for="email">Email address</label>

  <button type="submit">Submit</button>

</form>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4);
  outline: none;
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

Additionally, there is the error state to consider. When the user's text does not pass the input validation, there is a visual indicator that shows there is something wrong.

To have the error message dynamically update, you would need to use JavaScript, which you will learn about in future lessons.

```html
<link rel="stylesheet" href="styles.css">

<form class="accessible-form">
  <label for="email">Email address</label>
  <input 
    type="email" 
    id="email" 
    name="email" 
    placeholder="you@example.com" 
    aria-describedby="email-error"
  >
  <p id="email-error" class="error-message">
    Please enter a valid email address.
  </p>

  <button type="submit">Submit</button>

</form>

<script src="index.js"></script>
```

```css
body {
  background-color: #f9fafb;
  color: #222;
  padding: 2rem;
  font-family: system-ui, sans-serif;
}

.accessible-form {
  max-width: 360px;
  margin: 0 auto;
}

label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  border: 2px solid #666;
  border-radius: 4px;
  background-color: #fff;
  color: #111;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input::placeholder {
  color: #555;
  opacity: 1;
}

input:focus {
  border-color: #1e90ff;
  box-shadow: 0 0 0 3px rgba(30, 144, 255, 0.4);
  outline: none;
}

input.error {
  border-color: #d93025;
  background-color: #fff5f5;
}

input.error:focus {
  border-color: #d93025;
  box-shadow: 0 0 0 3px rgba(217, 48, 37, 0.4);
}

.error-message {
  color: #d93025;
  font-size: 0.95rem;
  margin-top: 0.4rem;
}

button {
  margin-top: 1.5rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  background-color: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover,
button:focus {
  background-color: #187bcd;
}
```

As you give your element your personal flair, *you want to be sure that the error state is still noticeable and that it does not look similar to the focus indicator*. With all this in mind you can now create captivating user forms.

## When Should You Use `appearance: none` to Deal with Issues Styling Search Inputs and Checkboxes?

Let's learn when to use `appearance: none` to address styling issues for search input, checkboxes and radio buttons.

Browsers apply default styling to a lot of elements. In the case of input elements, your ability to style them with CSS can feel rather restricted. So, *you may want to use `appearance: none` to hide aspects of the default element and build your own instead*. For example, this would hide the default checkboxes for a checkbox input, allowing you to use custom indicators like a green tick and a red X to show the state. For a search input, WebKit based browsers will show a default search icon and a cancel button. Hiding these allows you to create your own indicators that would appear on all browsers.

Here is an example of a custom checkbox:

**NOTE**: Some of the CSS in this example uses properties that haven't been covered yet. This is just to give you an idea of how to create a custom checkbox. You will learn how all of this works in future lessons and workshops.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
    <input class="checkbox" type="checkbox" /> Agree
  </label>
</form>
```

```css
.checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: all 0.25s ease;
  vertical-align: middle; 
}

.checkbox:hover {
  border-color: #888;
}

.checkbox:checked {
  background-color: #4caf50;
  border-color: #4caf50;
}

.checkbox:checked::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 0px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.checkbox:focus {
  outline: 2px solid #90caf9;
  outline-offset: 2px;
}
```

WebKit is a software engine that helps web browsers display websites. Browsers like Safari use WebKit to make sure web pages look and work correctly. This `appearance: none` CSS property gives you complete control over the styling, but it does come with some things to look out for. *The default interactive components of input elements include features such as focus and error indicators which you will need to ensure aren't lost*.

Creating consistent cross-platform styling is a great reason to use this property. You can also use it to ensure that tap targets on a mobile device are large enough or that the colors of a checkbox have enough contrast.

## What Are Common Issues When Styling Special Input Elements?

Let's learn about some of the common issues when trying to style special input elements like the `datetime-local` and `color` inputs.

*These special types of inputs rely on complex pseudo-elements to create things like the date and color pickers*. This presents a significant challenge for styling these inputs. One challenge is that, *because the default styling depends entirely on the browser, CSS that makes the picker look right in one browser may produce a very different result in another*.

Here is an example of a color input:

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="favorite-color">Pick your favorite color:</label>
  <input type="color" id="favorite-color" name="favorite-color">
</form>
```

```css
input {
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input[type="color"] {
  width: 60px;
  height: 40px;
  padding: 0;
  border: 2px solid #555;
  border-radius: 4px;
  cursor: pointer;
}
```

Another may be the complexity of the pseudo-element. Consider the date selector; there are a lot of moving parts here and the complex structure of the pseudo-element might pose a significant challenge in applying styling to the right areas.

Here is an example of a date input:

```html
<link rel="stylesheet" href="styles.css">

<form>
  <label for="birthdate">Select your birthdate:</label>
  <input type="date" id="birthdate" name="birthdate">
</form>
```

```css
input {
  padding: 8px 12px;
  margin: 8px 0;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input[type="date"] {
  padding: 6px 10px;
  border: 2px solid #555;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background-color: #4CAF50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
```

Of course, with these complex elements, you also run the risk of accidentally losing important functionality when you manually style them. Not only could you lose important indicators like the focus state or selected item but you could potentially break the selector entirely.

For these reasons *many developers rely on JavaScript libraries or custom components entirely instead of using the browser's built-in components*.
