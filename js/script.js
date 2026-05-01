// Menú Hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Formulario de Contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    // Simulación de envío (en producción, usar fetch o AJAX)
    console.log('Formulario enviado:', {
        nombre: contactForm.elements[0].value,
        email: contactForm.elements[1].value,
        telefono: contactForm.elements[2].value,
        mensaje: contactForm.elements[3].value
    });
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
    contactForm.reset();
});

// Botón CTA - Scroll suave
document.querySelector('.cta-button').addEventListener('click', () => {
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
});

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
    const elements = document.querySelectorAll('.servicio-card, .proyecto-card, .stat');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                entry.target.addEventListener('animationend', () => {
                    entry.target.style.animation = '';
                });
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => observer.observe(element));
};

// Inicializar animaciones al cargar
window.addEventListener('load', animateOnScroll);

// Navbar background cambio al scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
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
                    animateCounter(stat, number);
                });
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Dark mode toggle (opcional)
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Verificar preferencia de dark mode guardada
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

console.log('Ecoinvest UAE - Sitio web cargado correctamente');
