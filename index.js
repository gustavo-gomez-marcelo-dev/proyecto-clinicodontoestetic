// --- 1. MENÚ HAMBURGUESA (MÓVILES) ---
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("nav-active");
});

// --- 2. ANIMACIONES AL HACER SCROLL (Efecto Reveal) ---
function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 120;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

// --- 3. CAMBIOS EN NAVBAR AL HACER SCROLL ---
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 50) {
    nav.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
    nav.style.padding = "15px 5%";
  } else {
    nav.style.boxShadow = "none";
    nav.style.padding = "20px 5%";
  }
});

// --- 4. CARRUSEL DE TESTIMONIOS ---
const track = document.getElementById("testimonialTrack");
const cards = document.querySelectorAll(".testimonial-card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

function updateCarousel() {
  // Calcula cuánto mover el track basado en el ancho de la tarjeta actual
  const cardWidth = cards[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  // Si llega a la última tarjeta, vuelve a la primera
  if (currentIndex >= cards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  // Si está en la primera tarjeta, va a la última
  if (currentIndex <= 0) {
    currentIndex = cards.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
});

// Ajustar el carrusel si el usuario cambia el tamaño de la ventana
window.addEventListener("resize", updateCarousel);

// --- 5. PREGUNTAS FRECUENTES (Acordeón) ---
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    faqQuestions.forEach((q) => {
      if (q !== question) {
        q.classList.remove("active");
        q.nextElementSibling.style.maxHeight = null;
      }
    });

    question.classList.toggle("active");
    const answer = question.nextElementSibling;

    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});
