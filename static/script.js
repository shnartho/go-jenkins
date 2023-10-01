// static/script.js

// Function to handle form submission
function handleSubmit(event) {
    //event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    /* Basic validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    */
   
    // Simulate a submission (replace this with your actual form submission logic)
    alert(`Form submitted:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// Add an event listener to the form
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', handleSubmit);
}

// Function to handle button click
function sayHello() {
    alert('Hello from JavaScript!');
}

// Function to change the background color of the header
function changeHeaderColor() {
    const header = document.querySelector('header');
    if (header) {
        header.style.backgroundColor = getRandomColor();
    }
}

// Generate a random color for background
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
