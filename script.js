document.addEventListener('DOMContentLoaded', function () {
    // Toggle subitems in the sidebar
    const expandableLinks = document.querySelectorAll('.sidebar .expandable .expand-link');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const parent = this.parentElement;
            parent.classList.toggle('open'); // Toggle the 'open' class
        });
    });

    // Handle portfolio box display
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const closeButtons = document.querySelectorAll('.portfolio-box .close-button');

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substring(1); // Get the target ID
            portfolioBoxes.forEach(box => {
                if (box.id === targetId) {
                    box.classList.add('active'); // Show the target portfolio box
                } else {
                    box.classList.remove('active'); // Hide other portfolio boxes
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const portfolioBox = this.closest('.portfolio-box');
            portfolioBox.classList.remove('active'); // Hide the portfolio box
        });
    });
});