const reviews = [
    {
        text: "Biz sizning restoraningizda tushlik qildik va atmosferani yoqtirdik. Maftunkor Emilie xizmati har doim ajoyib va sizning tushliklaringiz haqida nima deyishimiz mumkin! Mazali: jamoangizga uzoq umr!",
        author: "Teres Manzerolle"
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

window.onload = function() {
    showReview(currentReviewIndex);
    setInterval(nextReview, 4000); // Har 4 soniyada sharhlarni o'zgartiradi
};
