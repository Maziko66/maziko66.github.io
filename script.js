document.addEventListener('DOMContentLoaded', function () {

    const videoBackground = document.getElementById('video-background');
    if (videoBackground) {
        videoBackground.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    }


    const expandableLinks = document.querySelectorAll('.sidebar .expandable .expand-link');
    expandableLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const parent = this.parentElement;
            parent.classList.toggle('open'); 
        });
    });


    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const portfolioBoxes = document.querySelectorAll('.portfolio-box');
    const closeButtons = document.querySelectorAll('.portfolio-box .close-button');

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href').substring(1); 
            portfolioBoxes.forEach(box => {
                if (box.id === targetId) {
                    box.classList.add('active'); 
                } else {
                    box.classList.remove('active'); 
                }
            });
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const portfolioBox = this.closest('.portfolio-box');
            portfolioBox.classList.remove('active'); 
        });
    });

    document.addEventListener('contextmenu', function (e) {
        e.preventDefault(); 
    });
});