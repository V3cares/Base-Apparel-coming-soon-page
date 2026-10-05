const emailValue = document.getElementById('email');
const submitBtn = document.getElementById('btn');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('email-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (emailValue.value === '') {
        emailValue.style.border = '2px solid red';
        errorMessage.textContent = 'Please enter a valid email address';
    }

    else if (!emailValue.value.includes('@') || !emailValue.value.includes('.')) {
        emailValue.style.border = '2px solid red';
        errorMessage.textContent = 'Please enter a valid email address';
    }

    else {
        emailValue.style.border = '2px solid green';
        errorMessage.textContent = '';

        // Submit the form
        form.submit();
    }
});

// Make error message disappear when clicking the page
document.body.addEventListener('click', function() {
    errorMessage.textContent = '';
    emailValue.style.border = '';
});