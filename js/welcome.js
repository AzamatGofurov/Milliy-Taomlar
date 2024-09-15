const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const body = document.body;
const dots = document.querySelectorAll('.dot');
const heading = document.querySelector('.welcome-text h1');
const paragraph = document.querySelector('.welcome-text p');

const slides = [
    {
        image: 'image/osh1.png',
        heading: 'Osh',
        text: 'An\'anaviy Oʻzbek taomi, shirin bo\'lmagan guruch, sabzavotlar va go\'sht bilan tayyorlanadi'
    },
    {
        image: 'image/manti.png',
        heading: 'Manti',
        text: 'Oʻzbekistonning milliy taomi'
    },
    {
        image: 'image/shashlik.png',
        heading: 'Shashlik',
        text: 'Mazali va ayni damda mashhur taom'
    }
];

let currentIndex = 0;

function changeSlide() {
    const currentSlide = slides[currentIndex];

    // Change background image
    body.style.backgroundImage = `url(${currentSlide.image})`;

    // Update heading and paragraph with fade effect
    heading.style.opacity = 0;
    paragraph.style.opacity = 0;

    setTimeout(() => {
        heading.textContent = currentSlide.heading;
        paragraph.textContent = currentSlide.text;

        heading.style.opacity = 1;
        paragraph.style.opacity = 1;
    }, 500); // Delay to synchronize with fade out

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    currentIndex = (currentIndex + 1) % slides.length;
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Adding smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
