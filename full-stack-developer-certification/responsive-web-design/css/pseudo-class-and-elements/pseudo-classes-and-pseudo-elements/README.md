# Working with Pseudo-Classes and Pseudo-Elements in CSS

## What Are Pseudo-classes, and How Do They Work?

*Pseudo-classes are special CSS keywords that allow you to select an element based on its specific state or position*. The element's state or position could include:

* When it's active.
* When it's being hovered over by a mouse.
* When it's the first child of a parent.
* When it's the last child of a parent.
* When a link has been visited.
* When it's disabled.

To use a pseudo-class, you add it to the selector by using a colon (`:`) followed by the name of the pseudo-class:

```css
selector:pseudo-class {
  /* CSS properties */
}
```

Let's see how you can use a pseudo-class to represent each of the states and positions we already mentioned.

The `:active` pseudo-class lets you select the active state of an element, like clicking on a button:

```html
<link rel="stylesheet" href="styles.css" />
<button>Example Button</button>
```

```css
button:active {
  background: greenyellow;
}
```

The `:hover` pseudo-class defines the hover state of an element. An example would be hovering over a button or link:

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Hover over me!</a>  
```

```css
a:hover {
  text-decoration: none;
  color: white;
  background: crimson;
}
```

The `:first-child` pseudo-class selects an element that is the first child of its parent element. Here's an example of targeting the first paragraph element in a `div` container:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:first-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

The first paragraph element in that `div` will receive the `lightcoral` background color and `padding` of `0.4rem` on all four sides.

The `:last-child` pseudo-class targets the last element that is the child of its parent. Here is an example of targeting the last paragraph element in the container `div` element:

```html
<link rel="stylesheet" href="styles.css" />
<div class="container">
  <p>first child</p>
  <p>second child</p>
  <p>third child</p>
  <p>last child</p>
</div>
```

```css
.container p:last-child {
  background: lightcoral;
  padding: 0.4rem;
}
```

The `:visited` pseudo-class lets you style a link the user has already visited:

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: purple;
}
```

The `:disabled` pseudo-class lets you style an interactive element in disabled mode:

```html
<link rel="stylesheet" href="styles.css" />
<button disabled>Disabled Button</button>
```

```css
button:disabled {
  background-color: lightgray;  
}
```

As you can see, pseudo-classes let you style elements based on user interactions, like hovering or visiting a link. This makes your website feel more interactive.

Apart from the pseudo-classes already mentioned, there are others like:

* `:focus`
* `:first-of-type`
* `:last-of-type`
* `:nth-of-type`
* `:modal`
* `:enabled`
* `:checked`
* `:required`, and more.

## What Are Examples of Element User Action Pseudo-classes?

User feedback is a crucial element of web design. For instance, it's important for users to receive visual cues when they interact with elements on a website, such as hovering over a button or clicking a link. This feedback helps users understand the state of interactive elements, like indicating whether a link has been visited or not.

*User action pseudo-classes in CSS are special keywords that allow you to provide this kind of feedback without needing JavaScript or other programming languages*.

These pseudo-classes include `:hover`, `:active`, `:focus`, and `:visited`, among others. They enable you to change the appearance of elements based on user interactions, improving the overall user experience.

Let's dive into some of the user action pseudo-classes we have and see how they work.

The `:active` pseudo-class applies styles when an element is activated by the user. For example, when the user clicks a button or a link, it provides immediate visual feedback, showing users that their actions are being recognized.

```html
<link rel="stylesheet" href="styles.css" />
<a href="#">Example link</a>
```

```css
a:active {
  color: crimson;
}
```

The `:hover` pseudo-class is triggered when a user hovers over an element with their mouse or other pointing device. Developers often use it to create visual feedback for buttons, links, or any element that should respond to user attention. Here's a button a user would hover over before clicking:

```html
<link rel="stylesheet" href="styles.css" />
<button class="btn">Hover Over Me</button>
```

```css
.btn:hover {
  background-color: darkgreen;
  color: white;
  cursor: pointer;
}
```

*The `:focus` pseudo-class applies styles when an element gains focus, typically through keyboard navigation or when a user clicks into a form input*. This is not just for feedback but also crucial for accessibility. It ensures that users who rely heavily on keyboards can easily identify which element they are interacting with.

Here's an example of an input field that gains focus when clicked or navigated to via the keyboard:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  outline: 2px solid darkgreen;
  border-radius: 4px;
}
```

The `:visited` pseudo-class targets a link the user has visited. This can be useful for helping users distinguish between pages they have already visited and the ones they are yet to visit. Here is an example of changing the anchor text color to cyan when the link is visited:

```html
<link rel="stylesheet" href="styles.css" />
<a href="https://www.example.com" target="_blank">Visit Example.com</a>
```

```css
a:visited {
  color: cyan;
}
```

*The `:checked` pseudo-class in CSS allows you to style form elements such as checkboxes and radio buttons when they are selected (checked)*. This pseudo-class is useful for customizing the appearance of these elements to enhance user experience, even though browsers provide default styles for them.

Here is an example with a checkbox to agree to terms on a website.

 **NOTE** : Some of the CSS in this example uses properties that haven't been covered yet. This is just to give you an idea of how to create a custom checkbox. You will learn how all of this works in future lessons and workshops.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
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

In this example, we are using the `appearance` property set to `none` to remove the default styling applied by the browser to checkbox inputs. When the user checks the box, it will have a background color of `green`.

Other examples of action pseudo-classes are:

* `:focus-within`: for applying styles to an element when it or any of its descendants have focus.
* `:enabled`: for targeting form buttons or other elements that are currently enabled.
* `:disabled`: for targeting form buttons or other elements that are disabled.
* `:target`: for applying styles to an element that is the target of a URL fragment (the part of a URL after the `#` symbol).

## What Are Examples of Input Pseudo-classes?

The appearance and behavior of input elements matter when building web forms. A form with inputs that respond to user actions goes a long way in improving user experience, and it should not cause confusion or frustration.

CSS provides several input pseudo-classes that can make your forms more intuitive and user-friendly. Let's look at these pseudo-classes in detail.

*The `:focus` pseudo-class allows you to target an input element when a user selects or clicks on it, drawing attention to the active input field*. This helps users easily identify where they're currently typing:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:focus {
  border: 2px solid crimson;
  outline: none;
}
```

As the name implies, the `:hover` pseudo-class is triggered when the user places the cursor over an element. It provides visual feedback before the user interacts with the input, effectively alerting them that the input is ready for action.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <input type="text" />
</form>
```

```css
input:hover {
  background-color: orange;
}
```

In the example above, the input element background changes to an orange color when the user hovers over it, letting them know that the field is ready for interaction.

The `:checked` pseudo-class lets you style a radio button or checkbox differently when a user selects it. This way, the user can easily see which option they've chosen.

Here is an example with a checkbox to agree to terms on a website.

 **NOTE** : Some of the CSS in this example uses properties that haven't been covered yet. This is just to give you an idea of how to create a custom checkbox. You will learn how all of this works in future lessons and workshops.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label>
  Agree <input class="checkbox" type="checkbox" />
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

`:required` *targets input elements that have the `required` attribute. It signals to the user that they must fill out the field to submit the form*.

Here is an example with a form that has some required input fields:

```html
<link rel="stylesheet" href="styles.css" />
<form action="#">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" />

  <button type="submit">Submit</button>
</form>
```

```css
input:required {
  border: 2px solid orange;
}
```

When validating forms, *you can use the `:valid` pseudo-class to style the input fields that meet the validation criteria, and `:invalid` to style the input fields that do not meet the criteria*. Typically, you will use green for a valid input and red for an invalid input.

Here is an example using the `:valid` pseudo-class:

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form> 
```

```css
input:valid {
  border-color: green;
}
```

Here is an example of using the `:invalid` pseudo-class:

```html
<link rel="stylesheet" href="styles.css" />
<form>  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
</form>
```

```css
input:invalid {
  border-color: crimson;
}
```

The `:disabled` pseudo-class allows you to select and style input elements that are disabled. These elements have the `disabled` attribute, which prevents users from interacting with them. When an input is disabled, it cannot be clicked, focused, or edited.

Here is an example of a label and a disabled input element.

In the CSS, we are targeting that disabled input and giving it a background color of `lightgray` and changing the cursor pointer to `not-allowed`.

```html
<link rel="stylesheet" href="styles.css" />
<form>
  <label for="name">Name:</label>
  <input class="text-input" type="text" id="name" name="name" disabled />
</form>
```

```css
.text-input:disabled {
  background-color: lightgray;
  cursor: not-allowed;
}
```

The `cursor: not-allowed;` CSS property value changes the appearance of the cursor to indicate that an action is not permitted.

When applied to an element, it shows a cursor with a circle-slash symbol (usually a circle with a diagonal line through it) to signal to users that the element is not interactive or cannot be clicked or interacted with.

Here are some other examples of input pseudo-classes and what they do:

* `:autofill`: applies styles to input fields that the browser automatically fills with saved data.
* `:optional`: styles input elements that are not required and can be left empty.
* `:in-range` and `:out-of-range`: style elements based on whether their values are within or outside specified range constraints.
