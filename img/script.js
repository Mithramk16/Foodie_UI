document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.waitlist-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You have joined the waitlist!');
        });
    });
});
