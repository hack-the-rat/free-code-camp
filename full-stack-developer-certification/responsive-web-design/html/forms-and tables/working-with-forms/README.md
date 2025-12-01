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
