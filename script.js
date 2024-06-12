document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
});
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('event-date').value;

    // Get selected meal preferences
    const mealPreferences = [];
    document.querySelectorAll('input[name="meal"]:checked').forEach(checkbox => {
        mealPreferences.push(checkbox.value);
    });
