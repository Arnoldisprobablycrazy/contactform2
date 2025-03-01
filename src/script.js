const btn = document.getElementById('submit');
const firstName = document.getElementById('firstname');
const secondName = document.getElementById('secondname');
const email = document.getElementById('email');
const message = document.getElementById('msg');
const check = document.getElementById('consent');
const disp = document.getElementById('disp-msg');

// Error elements
const fError = document.getElementById('name-err');
const sError = document.getElementById('s-err');
const radioErr = document.getElementById('radio-err');
const emailErr = document.getElementById('email-err');
const msgErr = document.getElementById('msg-err');
const consentErr = document.getElementById('checked-err')
// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form from submitting if errors exist

    let isValid = true; // To check if the form is valid

    // Validate First & Second Name
    if (firstName.value.trim() === "") {
        fError.textContent = "This field is required.";
        firstName.style.border = "border 1px solid Red"
        isValid = false;
    } else {
        fError.textContent = "";
        firstName.classList.remove('border-Red-500'); // Remove red border
    }

    if (secondName.value.trim() === "") {
        sError.textContent = "This field is required.";
        secondName.classList.add('border-Red-500'); // Add red border
        isValid = false;
    } else {
        sError.textContent = "";
        secondName.classList.remove('border-red-500'); // Remove red border
    }

    // Validate Email
    if (!emailRegex.test(email.value.trim())) {
        emailErr.textContent = "Enter a valid email address";
        email.classList.add('border-red-500'); // Add red border
        isValid = false;
    } else {
        emailErr.textContent = "";
        email.classList.remove('border-red-500'); // Remove red border
    }

    // Validate Radio Buttons
    let isRadioSelected = false;
    const radios = document.getElementsByName("queries");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isRadioSelected = true;
            break;
        }
    }
    if (!isRadioSelected) {
        radioErr.textContent = "Select a query";
        isValid = false;
    } else {
        radioErr.textContent = "";
    }

    // Validate Message Field
    if (message.value.trim() === "") {
        msgErr.textContent = "This field is required.";
        message.classList.add('border-red-500'); // Add red border
        isValid = false;
    } else {
        msgErr.textContent = "";
        message.classList.remove('border-red-500'); // Remove red border
    }
    if(!check.checked){
       consentErr.textContent = "To submit form, please consent to being contacted";
    }
    else {
        consentErr.textContent = "";
    }

    // If everything is valid, show the success message
    if (isValid) {
        disp.classList.remove('hidden'); // Show the success message
        disp.classList.add('flex'); // Ensure it's displayed as flex
    } else {
        disp.classList.add('hidden'); // Hide the success message if there are errors
        message.classList.add('border-red-500'); // Add red border

    }
});