document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const studyingOffsetTop = document.getElementById('studying').offsetTop;

    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-scroll-target');
            const target = document.querySelector(targetId);
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    window.addEventListener('scroll', function() {
        const showNavbar = window.scrollY >= studyingOffsetTop;
        navbar.style.display = showNavbar ? 'flex' : 'none';
    });
});
