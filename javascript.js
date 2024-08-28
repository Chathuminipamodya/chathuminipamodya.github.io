document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.Contact form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form inputs
        const fullName = form.querySelector('input[type="text"][placeholder="Full Name"]');
        const email = form.querySelector('input[type="email"][placeholder="Email Address"]');
        const mobileNumber = form.querySelector('input[type="number"][placeholder="Mobile number"]');
        const emailSubject = form.querySelector('input[type="text"][placeholder="Email Subject"]');
        const message = form.querySelector('textarea[placeholder="Your Message"]');

        // Validate all fields are filled
        if (fullName.value === '' || email.value === '' || mobileNumber.value === '' || emailSubject.value === '' || message.value === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all validations pass, clear the form
        form.reset();
        alert('Form submitted successfully!');
    });
});
