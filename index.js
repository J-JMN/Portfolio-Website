// Wait for the document to load completely before executing
document.addEventListener("DOMContentLoaded", function() {
    // Get all navigation links
    const links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default navigation

            // Add the page-exit class to start the fade-out transition
            document.querySelector('.page').classList.add('page-exit');

            // After the fade-out transition, navigate to the clicked link
            setTimeout(() => {
                window.location.href = link.getAttribute('href'); // Navigate to the link's href
            }, 200);
        });
    });
});



