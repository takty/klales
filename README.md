# Klales

Klales is a minimal, class-less CSS framework designed to provide sensible default styling for HTML elements, allowing you to focus on semantic structure.

## What does "Class-Less" mean?

It means you don't need to add custom CSS classes (like `<p class="my-paragraph-style">`) to your HTML elements to style them. Klales applies default styles directly to standard HTML tags (`<p>`, `<h1>`, `<table>`, `<button>`, etc.).

This allows you to focus on writing clean, semantic HTML, and Klales provides a consistent base appearance automatically.

## Features

* **Minimal:** Lightweight and includes only essential styles, focusing on typography, spacing, and basic element styling.
* **Semantic:** Encourages writing well-structured HTML by providing sensible defaults for standard HTML elements.
* **Simple:** Easy to get started – just link the CSS file.
* **Good Defaults:** Provides aesthetically pleasing styles for common elements out-of-the-box, including:
  * **Typography:** Sets a clean, readable font family (system-ui sans-serif), line height, and heading styles. Includes adjustments for Japanese language support.
  * **Spacing:** Establishes consistent margins and padding for various elements using CSS variables for easy adjustments.
  * **Lists:** Styles unordered and ordered lists with clear markers and indentation.
  * **Links:** Styles links with underlines and visual cues for different link types (internal, external, file downloads).
  * **Forms:** Provides basic styling for form elements like inputs, buttons, and selects.
  * **Tables:** Styles tables for readability with borders and padding.
  * **Details/Summary:** Styles the details and summary elements for interactive content.
* **Responsive:** Adjusts font sizes based on screen width using media queries.
* **Modern CSS:** Utilizes modern CSS features like `box-sizing`, `text-size-adjust`, `overflow-wrap`, and CSS layers (`@layer klales`).

## Usage

To use Klales in your project, include the `klales.css` file in the `<head>` of your HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page Styled with Klales</title>
    <!-- Link to the Klales CSS file -->
    <link rel="stylesheet" href="path/to/klales.css">
</head>
<body>
    <h1>Page Title</h1>
    <p>This paragraph will be styled by Klales without needing any class.</p>
    <button>A Styled Button</button>
    <!-- Add more semantic HTML elements -->
</body>
</html>
```

## Customization

Klales uses CSS variables for some key values like spacing. You can override these variables to customize the appearance:

```css
:root {
    --margin-block-large : 2.5rem;
    --margin-block-medium: 1.25rem;
    --margin-block-small : 0.875rem;
}
```

## License

MIT
