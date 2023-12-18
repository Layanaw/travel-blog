function subscribeAlert(){
    alert('thank you for subscribing!')
}

function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    var name = nameInput.value;
    var email = emailInput.value;

    if (!name || name === '') {
        alert('Please enter your name.');
        return false;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Additional validation

    alert('Thank you for submitting the form!');
    return true;
}

function isValidEmail(email) {
    
    return email.indexOf('@') !== -1 && email.indexOf('.') !== -1;
}


// Function to change the background color on button click
function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
}

// Function to change text color on button click
function changeTextColor() {
    document.body.style.color = 'darkblue';
}

// Event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var subscribeButton = document.querySelector('.subButton button');
    subscribeButton.addEventListener('click', handleSubscribe);

    // Example: Add event listener for changing background color
    var colorChangeButton = document.querySelector('.color-change-button');
    colorChangeButton.addEventListener('click', changeBackgroundColor);

    // Example: Add event listener for changing text color
    var textChangeButton = document.querySelector('.text-change-button');
    textChangeButton.addEventListener('click', changeTextColor);
});