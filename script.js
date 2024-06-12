//U61753810
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('event-date').value;

    // Get selected meal preferences
    const mealPreferences = [];
    document.querySelectorAll('input[name="meal"]:checked').forEach(checkbox => {
        mealPreferences.push(checkbox.value);
    });

    // Validate form fields
    if (!name || !email || !eventDate || mealPreferences.length === 0) {
        alert('Please fill out all fields and select at least one meal preference.');
        return;
    }

    // Display registration details
    const registrationDetails = document.getElementById('registration-details');
    registrationDetails.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Meal Preferences:</strong> ${mealPreferences.join(', ')}</p>
    `;
});

