# Working with Forms

## How Do Forms, Labels, and Inputs Work in HTML?

The `form` element in HTML is used to gather user information, such as names and email addresses. Here is an example of a `form` element:

```html
<form action="url-goes-here">
  <!-- input elements go here -->
</form>
```

The `action` attribute specifies where the form data will be sent upon submission. To collect specific information, like names and email addresses, you would use the `input` element. Here is an example of using an `input` element.

Click on [this link](https://codesandbox.io/p/sandbox/w67rkp) and interact with the `input` element in the preview window by typing in your name in the field.

`input` elements are void elements and do not have closing tags. T*he `type` attribute defines the data type expected from the user.* In this case, the data would be plaintext. To add a label for the input, you would use a `label` element. Here is an example of using a `label` element with the text of `Full Name:`.

Click on the text `Full Name:` in the [preview window](https://codesandbox.io/p/sandbox/lfvhzz) and you will see the input go into focus. To interact with the example, you will need to enable the interactive editor.

By nesting an `input` inside a `label` element, you create an implicit association between the `label` and the `input` field. The term "implicit" refers to something that is understood or inferred without needing to be explicitly stated or defined with additional attributes or elements. *To explicitly associate a `label` with an `input`, you can use the `for` attribute.* Here is an example of using the `for` attribute for an email address label.

Interact with the `input` element in the [preview window](https://codesandbox.io/p/sandbox/8fw4yl) by typing in a fake email address like `jane@example.com`. To interact with the example, you will need to enable the interactive editor.

When using an explicit association, the values for the `for` attribute and `id` need to be the same. In this case, the values are both set to `email`. The `email` type in the input provides basic validation for correctly formatted email addresses. If you want to show additional hints to the users about the expected input, you can use the `placeholder` attribute. Here is an example using the `placeholder` attribute inside the email input.

Click on [this link](https://codesandbox.io/p/sandbox/6gffk8), click on the email input and start typing in an email and you will see the placeholder text go away.

*For the placeholder text, you want to provide helpful short text to show the format and type of data you expect from your users*. In this case, the placeholder text, `example@email.com`, shows the user that they must enter a correctly formatted email address.

## What Are the Different Types of Buttons, and When Should You Use Them?

The `button` element is used to perform a particular action when it is activated. Here is an example of a `button` element with the button text of `Start Game`.

```html
<button>Start Game</button>
```

Other examples of using the `button` element include submitting a form, showing a modal, or toggling a side menu open and closed. The `button` element has a `type` attribute which controls the behavior of the button when it is activated. The first possible value for the `type` attribute would be the `button` type. Here is an example of using the `button` element with the `button` type and a text of `Show Alert`:

```html
<button type="button">Show Alert</button>
```

By default, the button will not do anything when activated. However, you can add some JavaScript code to make the button interactive, such as showing an alert in this case.

Click on the `Show Alert` button to see an alert pop up on the screen. To interact with the example, you will need to click on [this link](https://codesandbox.io/p/sandbox/vw7q86).

Another possible value for the `type` attribute is the `submit` value. Here is an [example](https://codesandbox.io/p/sandbox/vqdr54) of using a `button` element with the `submit` type.

Inside this `form` element, there is a `label` and `input` element for the user's email address. When the user clicks on the submit button, their data will be sent to the server and will be processed. The third possible value for the `type` attribute is the `reset` value. Here is an example of a `form` element with reset and submit buttons.

Go to [this link](https://codesandbox.io/p/sandbox/5d4g5c) and interact with the email input in the preview window by providing a fake email address. Then click on the reset button to see your email disappear from the field.

In this modified example, a `label` and `input` element are used to collect the user's email address. *When the user clicks on the reset button, then it will clear out all of their input data.* It is important to note that reset buttons are usually not the best idea because they could lead to users accidentally resetting their data. Also, multiple buttons in your form could clutter up the user interface.

*Another way to create buttons in HTML is to use the `input` element.* *The `input` element also has a `type` attribute with the possible values of `submit`, `reset`, and `button`.* Here is an [example](https://codesandbox.io/p/sandbox/xrhfjq) of using the `input` element with the `type` set to `button`:

The `value` attribute is used to show the button text. So, what is the difference between using the `input` and `button` elements? `input` elements are void elements, which means they cannot have child nodes, such as text, and can only have a start tag. On the other hand, the `button` element offers more flexibility because you can nest text, images, and icons inside it.
