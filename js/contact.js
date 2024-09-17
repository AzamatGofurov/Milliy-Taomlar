const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});


// Telegram messege send
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formani jo'natishni to'xtatadi

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Iltimos, barcha maydonlarni to\'ldiring.');
        return;
    }

    var telegramToken = '7523236226:AAFI4UqFtdnf-xZrl8VHx0ZubZLLFoHshaA'; // Sizning bot tokeningizni kiriting
    var chatId = '5999528224'; // Sizning chat ID'nizni kiriting

    var text = `Ism: ${name}\nEmail: ${email}\nXabar: ${message}`;

    var telegramUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

    var request = new XMLHttpRequest();
    request.open("POST", telegramUrl, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(`chat_id=${chatId}&text=${encodeURIComponent(text)}`);

    request.onload = function() {
        if (request.status === 200) {
            showSuccessMessage(); // Muvaffaqiyatli yuborilgan xabarni ko'rsatish
        } else {
            alert("Xabar yuborishda xatolik yuz berdi.");
        }
    };
});

// Muvaffaqiyatli yuborilgan xabarni ko'rsatish funktsiyasi
function showSuccessMessage() {
    var messageElement = document.getElementById('success-message');
    messageElement.style.display = 'block';

    setTimeout(function() {
        messageElement.style.display = 'none'; // 4 soniyadan keyin xabarni yashirish
    }, 4000);
}
