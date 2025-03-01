# Contact Form Project

## Overview
This is a simple yet functional contact form built using HTML, CSS (Tailwind), and JavaScript. The form includes validation for user inputs and displays a success message upon successful submission.

## Features
- Input fields for First Name, Last Name, Email Address, and Message
- Query type selection via radio buttons
- Consent checkbox for user agreement
- Client-side validation with error handling
- Success message display on valid submission

## Technologies Used
- HTML
- CSS (Tailwind)
- JavaScript (Vanilla JS)

## Project Structure
```
📁 Contact Form Project
│── 📄 index.html          # Main HTML file
│── 📄 style.css           # CSS file for styling
│── 📄 script.js           # JavaScript file for form validation
│── 📁 assets
│   ├── 📁 images          # Contains favicon and success icon
│── 📄 README.md           # Documentation
```

## Setup Instructions
1. Clone the repository or download the files.
2. Open the `index.html` file in a browser.
3. Ensure the `style.css` and `script.js` files are properly linked.

## Usage
1. Fill in the required fields:
   - First Name
   - Last Name
   - Email Address
   - Message
   - Select a Query Type
   - Check the consent box
2. Click the "Submit" button.
3. If all fields are correctly filled, a success message will be displayed.
4. If there are errors, relevant messages will guide the user to fix them.

## Validation Rules
- First Name and Last Name: Cannot be empty
- Email: Must follow a valid email format
- Query Type: One option must be selected
- Message: Cannot be empty
- Consent: Must be checked before submitting

## Troubleshooting
- If the form does not submit, check if any error messages are displayed.
- Ensure that JavaScript is enabled in the browser.
- Open the browser console (`F12` > Console) to check for errors.

## Future Enhancements
- Add backend support to process form submissions.
- Implement email notifications.
- Improve UI with more animations and effects.

## License
This project is open-source and can be modified as needed.

