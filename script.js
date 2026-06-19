// Εντοπισμός της ενότητας info-section όταν εμφανίζεται στην οθόνη
const infoSection = document.querySelector('.info-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      infoSection.classList.add('visible');
    }
  });
}, { threshold: 0.2 }); // 20% της ενότητας πρέπει να φαίνεται

observer.observe(infoSection);

// DOMContentLoaded για όλες τις υπόλοιπες λειτουργίες
document.addEventListener("DOMContentLoaded", () => {

  // --- Circle cards ---
  const cards = document.querySelectorAll(".circle-card");

  cards.forEach(card => {
    const target = parseInt(card.getAttribute("data-target")) || 0;
    const suffix = card.getAttribute("data-suffix") || "";
    const labelText = card.getAttribute("data-label") || "";

    // Προσθέτουμε δυναμικά SVG και labels
    card.innerHTML = `
      <svg viewBox="0 0 160 160">
        <circle class="bg" cx="80" cy="80" r="70"></circle>
        <circle class="fg" cx="80" cy="80" r="70"></circle>
      </svg>
      <div class="number">0</div>
      <div class="label">${labelText}</div>
    `;

    const numberEl = card.querySelector(".number");
    const fg = card.querySelector(".fg");
    const circleLength = 2 * Math.PI * 70;
    fg.style.strokeDasharray = circleLength;
    fg.style.strokeDashoffset = circleLength;

    function animateCounter() {
      let start = null;
      const duration = 1500;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);

        numberEl.textContent = value + suffix;
        fg.style.strokeDashoffset = circleLength * (1 - eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          numberEl.textContent = target + suffix;
          fg.style.strokeDashoffset = 0;
        }
      }

      requestAnimationFrame(step);
    }

    // Trigger animation on click
    card.addEventListener("click", animateCounter);

    // Προαιρετικά: να ξεκινάει και όταν εμφανίζεται στην οθόνη
    const cardObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter();
          cardObserver.unobserve(card);
        }
      });
    }, { threshold: 0.5 });
    cardObserver.observe(card);
  });

  // --- Fade-in items ---
  const faders = document.querySelectorAll(".fade-in-item");

  const appearOptions = {
    threshold: 0.2
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // --- Back to top button ---
  const backToTopBtn = document.getElementById("backToTopBtn");

  const handleScroll = () => {
    if (window.scrollY > 300 || document.documentElement.scrollTop > 300) {
      if (backToTopBtn) backToTopBtn.classList.add("show");
    } else {
      if (backToTopBtn) backToTopBtn.classList.remove("show");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);
  if (backToTopBtn) backToTopBtn.addEventListener("click", scrollToTop);

});
