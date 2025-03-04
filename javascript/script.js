document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-animation');
    const texts = ["Physique.", "Persona.", "Mind.", "Life."];
    let index = 0;
    let charIndex = 0;
    let isTyping = true;

    function type() {
        if (charIndex < texts[index].length) {
            typingText.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 200);
        } else {
            setTimeout(erase, 200);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = texts[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50); // Erasing speed (50ms per character)
        } else {
            isTyping = true;
            index = (index + 1) % texts.length; // Move to the next word
            setTimeout(type, 500); // Wait 0.5 seconds before typing the next word
        }
    }

    type(); // Start the typing animation
});



// type of training details
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tab-button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            cards.forEach(card => {
                if (card.id === target) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('center', 'left', 'right');

            if (index === currentIndex) {
                slide.classList.add('center');
            } else if (index === (currentIndex + 1) % slides.length) {
                slide.classList.add('right');
            } else if (index === (currentIndex - 1 + slides.length) % slides.length) {
                slide.classList.add('left');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    }

    // Automatically move to the next slide every 3 seconds
    setInterval(nextSlide, 4000);

    // Initialize the first slide
    updateSlides();
});