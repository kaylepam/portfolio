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


// 새코드

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector(".scrollable-section");
    let isDown = false;
    let startX;
    let scrollLeft;
    let velocity = 0;
    let animationFrame;

    function animateScrolling() {
        if (Math.abs(velocity) < 0.5) {
            cancelAnimationFrame(animationFrame);
            return;
        }
        
        slider.scrollLeft += velocity;
        velocity *= 0.95;
        animationFrame = requestAnimationFrame(animateScrolling);
    }

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        animateScrolling();
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = x - startX;
        velocity = -walk * 0.2  ;
        slider.scrollLeft = scrollLeft - walk;
    });

});