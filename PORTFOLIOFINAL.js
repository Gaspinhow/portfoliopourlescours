document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remove the fullscreen class from all sections
            document.querySelectorAll('section').forEach(section => {
                section.classList.remove('fullscreen');
            });

            // Add the fullscreen class to the corresponding section
            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            targetSection.classList.add('fullscreen');

            // Scroll smoothly to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
