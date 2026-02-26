document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 6px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -6px)' : 'none';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handler (UI Only)
    const form = document.getElementById('tradie-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            status.innerHTML = '<p style="color: #28a745; margin-top: 15px; font-weight: bold;">Thanks Mike will contact you shortly!</p>';
            form.reset();
            
            setTimeout(() => {
                status.innerHTML = '';
            }, 5000);
        });
    }

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });
});