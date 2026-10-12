document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("circleForm");
    const radiusInput = document.getElementById("radiusInput");

    if (form) {
        form.addEventListener("submit", (event) => {
            const value = radiusInput.value.trim();

            if (value === "") {
                alert("Please enter a valid radius value.");
                event.preventDefault(); 
                return;
            }

            const num = parseFloat(value);
            if (num < 0) {
                alert("Please enter a valid radius value.");
                event.preventDefault(); // Stop the form from submitting
                return;
            }
        });
    }
});