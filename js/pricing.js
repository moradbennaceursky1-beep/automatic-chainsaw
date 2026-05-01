// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Formulario de Contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        console.log('Formulario enviado:', {
            nombre: contactForm.elements[0].value,
            email: contactForm.elements[1].value,
            telefono: contactForm.elements[2].value,
            mensaje: contactForm.elements[3].value
        });
        
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
        contactForm.reset();
    });
}

// Botón CTA - Scroll suave
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const servicios = document.getElementById('servicios') || document.querySelector('.pricing-section');
        if (servicios) {
            servicios.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Scroll suave para enlaces internos
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

// Animación al scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.servicio-card, .proyecto-card, .stat, .pricing-card, .faq-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
};

window.addEventListener('load', animateOnScroll);

// Navbar background cambio al scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Contador de estadísticas
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
};

// Iniciar contadores cuando se scrollea a la sección
const statsSection = document.querySelector('.nosotros');
if (statsSection) {
    let hasAnimated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                document.querySelectorAll('.stat h3').forEach(stat => {
                    const number = parseInt(stat.textContent);
                    if (!isNaN(number)) {
                        animateCounter(stat, number);
                    }
                });
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

console.log('Ecoinvest UAE - Sitio web cargado correctamente');
