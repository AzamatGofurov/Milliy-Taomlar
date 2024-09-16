const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// restoran gallery
// Typewriting effekt uchun JavaScript kodi
const typewriterText = "Restoran Galereyasi";
const typingSpeed = 150; // Harflarni yozish tezligi (millisekundlarda)
const deletingSpeed = 100; // Harflarni o'chirish tezligi (millisekundlarda)
const pauseTime = 2000; // Matn yozilgandan keyin kutish vaqti (millisekundlarda)
const resetDelay = 1000; // Qaytadan yozishdan oldin kutish vaqti (millisekundlarda)
let typewriterIndex = 0;
let isDeleting = false;

function typeWriter() {
    const typewriterElement = document.getElementById("typewriter");
    let currentText = typewriterText.slice(0, typewriterIndex);

    typewriterElement.innerHTML = currentText;

    if (!isDeleting) {
        if (typewriterIndex < typewriterText.length) {
            typewriterIndex++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            isDeleting = true;
            setTimeout(typeWriter, pauseTime);
        }
    } else {
        if (typewriterIndex > 0) {
            typewriterIndex--;
            setTimeout(typeWriter, deletingSpeed);
        } else {
            isDeleting = false;
            setTimeout(typeWriter, resetDelay);
        }
    }
}

// Reviews funksiyasi uchun JavaScript kodi
const reviews = [
    {
        text: "Biznesingizni rivojlantirish uchun ideal sayt! Zamonaviy dizayn, qulay interfeys va SEO optimizatsiyasi bilan mijozlarni jalb qiling. Agar bu sayt sizga kerak bo'lsa, men bilan bog'laning.",
        author: "Azamat Gofurov"
    },
    {
        text: "Oshxonaning sifati va mazasi juda yuqori. Yaxshi xizmat va qulay muhit ham menga yoqdi. Mening do'stlarim ham bu joyni sevishadi!",
        author: "Bahodir Karimov"
    },
    {
        text: "Har safar kelganimda yangi va mazali taomlar topaman. Sizlarning xizmat darajangiz ajoyib, albatta qaytib kelaman!",
        author: "Laylo Omonova"
    },
    {
        text: "Men bu restoran haqida faqat yaxshi so'zlar aytishim mumkin. Taomlar mazali, muhit yoqimli va xizmat eng yuqori darajada.",
        author: "Jamshid Ubaydullayev"
    },
    {
        text: "Sizning restoraningiz meni hayratga soldi! Oshxonangizning sifatiga va jamoangizning mehmondo'stligiga qoyilman.",
        author: "Nigora Akramova"
    }
];

let currentReviewIndex = 0;

function showReview(index) {
    const reviewText = document.getElementById("review-text");
    const reviewAuthor = document.getElementById("review-author");

    reviewText.innerHTML = reviews[index].text;
    reviewAuthor.innerHTML = "- " + reviews[index].author;

    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.remove("active");
        if (i === index) {
            dot.classList.add("active");
        }
    });
}

function nextReview() {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}

function currentReview(index) {
    currentReviewIndex = index;
    showReview(currentReviewIndex);
}

// Ikkala funksiyani bir vaqtda ishga tushirish uchun yagona window.onload hodisasi
window.onload = function() {
    typeWriter(); // Typewriting effektni boshlash
    showReview(currentReviewIndex); // Birinchi sharhni ko'rsatish
    setInterval(nextReview, 4000); // Har 4 soniyada sharhlarni o'zgartirish
};




