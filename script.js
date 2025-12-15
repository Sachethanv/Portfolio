
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for Fade-In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .hero-image-container');
    // Add fade-in-up class to section titles mostly to keep it consistent manually if needed, 
    // but here we just observe the specific ones we added classes to.

    // Auto-add fade-in to some sections
    document.querySelectorAll('.section-title, .project-card, .stat-card, .skill-category').forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });

    animatedElements.forEach(el => observer.observe(el));

    // Navbar Glass Effect on Scroll
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 23, 42, 0.8)'; // Darker on scroll
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        } else {
            nav.style.background = 'rgba(30, 41, 59, 0.6)'; // Original glass
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }
    });
});
