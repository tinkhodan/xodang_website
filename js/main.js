document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        });

        // Close menu when clicking a link
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('open');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 2. Scroll Reveal Animations (Hiệu ứng xuất hiện khi cuộn)
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Chỉ chạy 1 lần
            }
        });
    }, {
        threshold: 0.1, // Chạy khi 10% phần tử xuất hiện
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Number Counter Animation (Hiệu ứng số nhảy)
    const counters = document.querySelectorAll('.trust-num');
    const speed = 200; // Tốc độ đếm

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                const suffix = counter.getAttribute('data-suffix') || '';
                
                const updateCount = () => {
                    const count = +counter.innerText.replace(suffix, '');
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc) + suffix;
                        setTimeout(updateCount, 10);
                    } else {
                        counter.innerText = target + suffix;
                    }
                };

                updateCount();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // 4. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    const slides = document.querySelectorAll(".story-slide");

if(slides.length){

    let current = 0;

    function showSlide(index){

        slides.forEach(slide=>{

            slide.classList.remove("active","fade-anim");

        });

        slides[index].classList.add("active");

        void slides[index].offsetWidth;

        slides[index].classList.add("fade-anim");

    }

    showSlide(current);

    setInterval(()=>{

        current++;

        if(current>=slides.length){

            current=0;

        }

        showSlide(current);

    },3500);

}
});