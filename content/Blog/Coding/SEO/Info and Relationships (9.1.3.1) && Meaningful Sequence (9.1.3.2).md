This requirement states that "Where ICT is a web page, it shall satisfy WCAG 2.1 Success Criterion 1.3.1 Info and Relationships".

**What it means:** This principle mandates that the information, structure, and relationships conveyed through visual or auditory presentation on a website must also be **programmatically determinable** or **available in text**. In simpler terms, what a sighted user visually perceives as structure (e.g., a heading, a list, a table, or a form field's purpose) must be explicitly communicated to assistive technologies (like screen readers or braille displays). It's not enough for content to *look* like a heading; it needs to be *marked up* as a heading.

**Why it's important:** Users who rely on assistive technologies do not experience a website in the same way a sighted user does. They often navigate by headings, lists, or form fields. If these structural elements are only conveyed visually and not programmatically, assistive technologies cannot correctly interpret and present them, making navigation and understanding extremely difficult or impossible.

**Real-life examples in an e-commerce website:**

* **Product Listings:**
    * **Headings:** The product name (e.g., "Organic Coffee Beans") should be marked up as a proper heading (e.g., `<h2>` or `<h3>`), not just bolded text. This allows screen reader users to quickly navigate between different products on a category page.
    * **Product Features:** If a product description lists features in bullet points (e.g., "Fair Trade certified", "Dark Roast", "1kg bag"), these should be coded as an actual unordered list (`<ul>`) so a screen reader announces "list with 3 items" instead of just reading a long string of text.
* **Checkout Forms:**
    * **Labels for Input Fields:** Every input field (e.g., "First Name", "Email Address", "Credit Card Number") must have a programmatically associated label (e.g., `<label for="firstName">First Name</label><input type="text" id="firstName">`). This ensures that when a screen reader user lands on an input field, they know what information is expected, even if the label is visually distant or hidden.
    * **Required Fields:** If a field is mandatory (e.g., "Shipping Address"), it should be programmatically indicated as required (e.g., using `aria-required="true"` or HTML5's `required` attribute) in addition to any visual asterisks. This informs assistive technology users before they attempt to submit the form.
* **Product Comparison Tables:**
    * If you have a table comparing features of different product models, the table headers (e.g., "Feature", "Model A", "Model B") should be marked up correctly with `<th>` tags. This allows screen readers to announce the row and column headers for each data cell, helping users understand the data relationships.
* **Interactive Elements:**
    * **Buttons and Links:** An "Add to Basket" button or a "View Details" link should be coded as a button (`<button>`) or a link (`<a>`) respectively, with meaningful text or `aria-label`. This ensures assistive technologies identify them as interactive elements and communicate their purpose.

---

## Meaningful Sequence (9.1.3.2)

This requirement states that "Where ICT is a web page, it shall satisfy WCAG 2.1 Success Criterion 1.3.2 Meaningful Sequence".

**What it means:** This principle dictates that when the sequence in which content is presented affects its meaning, that sequence must be **programmatically determinable**. This means the underlying code structure of the page should reflect the logical reading and interaction order of the content, even if the visual layout is complex or uses CSS to reorder elements.

**Why it's important:** Users who navigate a website linearly (e.g., using a keyboard to tab through interactive elements, or a screen reader that reads content from top to bottom based on the source code) rely on a logical sequence. If the programmatic sequence doesn't match the visual/logical sequence, it can lead to confusion, misinterpretation, and an inability to complete tasks. Imagine a form where tabbing jumps randomly between fields, or a conversation transcript where turns are read out of order.

**Real-life examples in an e-commerce website:**

* **Product Pages:**
    * **Content Order:** On a product detail page, the logical flow is usually: Product Name, then Main Image, then Price, then Short Description, then "Add to Basket" button, then Detailed Specifications, and finally Customer Reviews. The underlying HTML code should reflect this order. If the "Add to Basket" button is visually placed high on the page but is deep in the code, a keyboard user might have to tab through many unrelated elements before reaching it.
    * **Product Images with Descriptions:** If you have multiple images for a product, each with a small descriptive caption, the image and its caption should be adjacent in the code. A screen reader user expects the caption to be read immediately after the image it describes.
* **Checkout Process:**
    * **Form Field Order:** In a multi-step checkout form, the tab order for input fields should follow the logical progression a user would expect (e.g., "First Name", "Last Name", "Address Line 1", "Address Line 2", "Postcode", "City", "Country"). If the tab order is arbitrary, filling out the form becomes a frustrating puzzle for keyboard users.
    * **Multi-Step Navigation:** If a checkout process involves distinct steps (e.g., "1. Shipping Information", "2. Payment Details", "3. Review Order"), the navigation indicators for these steps should be presented in a meaningful, sequential order in the code, reflecting the user's progress through the purchasing journey.
* **News/Blog Articles on a Retail Site:**
    * If your e-commerce site includes articles (e.g., "How to Choose the Best Coffee Maker"), the structure should logically flow from heading to introduction, then body paragraphs, interspersed with relevant images and their descriptions, and finally conclusion and related articles. The HTML structure should reflect this reading order.

By adhering to these principles, e-commerce websites ensure that all users, including those relying on assistive technologies, can effectively understand and interact with the content and complete their purchasing tasks, thereby providing a truly accessible experience.