// Language switching functionality
function toggleLanguage() {
    const html = document.documentElement;
    const isArabic = html.lang === 'ar';
    
    // Toggle language and direction
    html.lang = isArabic ? 'en' : 'ar';
    html.dir = isArabic ? 'ltr' : 'rtl';
    
    // Update content
    const translations = {
        ar: {
            features: 'الميزات',
            pricing: 'الأسعار',
            clients: 'عملاؤنا',
            contact: 'تواصل معنا',
            getStarted: 'ابدأ الآن',
            langSwitch: 'English',
            hero: {
                title: 'طور أعمالك مع حلول SaaS الذكية',
                subtitle: 'منصة متكاملة تجمع بين الابتكار والموثوقية لتحسين كفاءة عملك',
                trial: 'تجربة مجانية',
                watchVideo: 'شاهد الفيديو التعريفي'
            }
        },
        en: {
            features: 'Features',
            pricing: 'Pricing',
            clients: 'Clients',
            contact: 'Contact',
            getStarted: 'Get Started',
            langSwitch: 'عربي',
            hero: {
                title: 'Grow Your Business with Smart SaaS Solutions',
                subtitle: 'An integrated platform combining innovation and reliability to enhance your business efficiency',
                trial: 'Free Trial',
                watchVideo: 'Watch Demo'
            }
        }
    };

    const currentLang = isArabic ? 'en' : 'ar';
    
    // Update navigation
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const key = link.getAttribute('href').replace('#', '');
        link.textContent = translations[currentLang][key];
    });
    
    // Update buttons
    document.querySelector('.cta-button').textContent = translations[currentLang].getStarted;
    document.querySelector('.lang-switch').textContent = translations[currentLang].langSwitch;
    
    // Update hero section
    document.querySelector('.hero h1').textContent = translations[currentLang].hero.title;
    document.querySelector('.hero p').textContent = translations[currentLang].hero.subtitle;
    document.querySelector('.hero .cta-button').textContent = translations[currentLang].hero.trial;
    document.querySelector('.video-button').textContent = translations[currentLang].hero.watchVideo;
}

// Sticky header behavior
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollY = window.scrollY;
    
    if (scrollY > 100) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Pricing toggle
document.getElementById('billing-toggle').addEventListener('change', (e) => {
    const isYearly = e.target.checked;
    const prices = document.querySelectorAll('.price .amount');
    const multiplier = isYearly ? 10 : 1; // 2 months free on yearly
    
    const baseAmounts = [99, 199, 299]; // Monthly base prices
    
    prices.forEach((price, index) => {
        const yearlyPrice = Math.floor(baseAmounts[index] * multiplier * 0.833); // 16.7% discount for yearly
        price.textContent = isYearly ? yearlyPrice : baseAmounts[index];
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .pricing-card').forEach(el => {
        observer.observe(el);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    observeElements();
});