// Main JavaScript for Portfolio

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            
            if (elTop < triggerBottom) {
                el.classList.add('revealed');
                // We'll define the .revealed class in style.css next
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // 2. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.95)';
            navbar.style.borderBottom = '1px solid var(--primary-accent)';
            navbar.style.height = '70px';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.8)';
            navbar.style.borderBottom = '1px solid var(--border-color)';
            navbar.style.height = '80px';
        }
    });

    // 3. Contact Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            if (name && email && subject && message) {
                // Show success message (using alert for simplicity, could be a toast)
                alert('Thank you for your message, ' + name + '! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // 4. Scroll to Top Button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.id = 'scroll-to-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Dark/Light Mode Toggle
    // Note: Portfolio is dark-themed by default. 
    // This toggle will switch to a clean light mode.
    const modeToggle = document.createElement('button');
    modeToggle.className = 'mode-toggle';
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    modeToggle.style.cssText = 'position: fixed; bottom: 2rem; left: 2rem; width: 50px; height: 50px; background: var(--surface-color); border: 1px solid var(--border-color); border-radius: 50%; color: var(--text-primary); cursor: pointer; z-index: 1001; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transition: var(--transition-base);';
    document.body.appendChild(modeToggle);

    let isLightMode = false;
    modeToggle.addEventListener('click', () => {
        isLightMode = !isLightMode;
        if (isLightMode) {
            document.documentElement.style.setProperty('--bg-color', '#F8FAFC');
            document.documentElement.style.setProperty('--surface-color', '#FFFFFF');
            document.documentElement.style.setProperty('--text-primary', '#0F172A');
            document.documentElement.style.setProperty('--text-secondary', '#475569');
            document.documentElement.style.setProperty('--border-color', '#E2E8F0');
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.style.setProperty('--bg-color', '#000000');
            document.documentElement.style.setProperty('--surface-color', '#111111');
            document.documentElement.style.setProperty('--text-primary', '#FFFFFF');
            document.documentElement.style.setProperty('--text-secondary', '#A1A1AA');
            document.documentElement.style.setProperty('--border-color', '#1F2937');
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });

    // 6. Loading Animation
    const loader = document.createElement('div');
    loader.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #000; z-index: 9999; display: flex; align-items: center; justify-content: center; transition: opacity 0.5s ease;';
    loader.innerHTML = '<div style="width: 50px; height: 50px; border: 3px solid var(--primary-accent); border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>';
    document.body.appendChild(loader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 800);
    });

    // 7. Smooth Scrolling for internal links (if any)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 5. Active Nav Highlighting (based on current page)
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentPath.includes(linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
