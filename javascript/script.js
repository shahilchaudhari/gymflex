
// Wait until the DOM content is loaded

document.addEventListener("DOMContentLoaded", function () {
    const menubtn = document.getElementById('menubtn');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.getElementById('closeMenu');

    // Function to toggle the sidebar
    // Toggle the "active" class on the sidebar
    function toggleSidebar() {
        sidebar.classList.toggle("active");
    }

    // Function to hide the sidebar
    function hideSidebar() {
        sidebar.classList.remove("active");
    }
    // Add click event listener to the menu button
    menubtn.addEventListener('click', toggleSidebar);

    // Add click event listener to the close button
    closeBtn.addEventListener('click', hideSidebar);
});

document.addEventListener("DOMContentLoaded", function () {
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


// contact form

document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.querySelector(".contactBtn");
    const popup = document.getElementById("contactPopup");
    const closeBtn = popup.querySelector(".close");

    // When the contact button is clicked, show the popup
    contactBtn.addEventListener("click", () => {
        popup.style.display = "flex";  // Using flex since your popup is centered with flexbox
    });

    // When the close button (×) is clicked, hide the popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Optional: hide popup if the user clicks outside the popup-content area
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});

// type of training details
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const cards = document.querySelectorAll('.card');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
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


// testimonial section
let currentIndex = 0;

function slide(direction) {
    const cards = document.querySelector('.feedback-cards');
    const cardCount = cards.children.length;
    // Use 1 card on screens smaller than 786px, otherwise use 3 cards
    const cardsToShow = window.innerWidth < 786 ? 1 : 3;
    const cardWidth = cards.children[0].offsetWidth;
    const maxIndex = Math.ceil(cardCount / cardsToShow) - 1;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const offset = -currentIndex * cardWidth * cardsToShow;
    cards.style.transform = `translateX(${offset}px)`;
}


// find us
document.addEventListener("DOMContentLoaded", function () {
    const findusSection = document.querySelector('.findus');
    const findusLoc = document.querySelector('.findus-loc');
    const findusAddress = document.querySelector('.findus-address');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                findusLoc.classList.add('slide-right');
                findusAddress.classList.add('slide-left');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(findusSection);
});