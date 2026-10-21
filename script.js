
"use strict";

// Reveal sections as visitors scroll
const sections = document.querySelectorAll(".section");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1
  }
);

sections.forEach((section) => {
  revealObserver.observe(section);
});

// Animated typing effect
const subtitle = document.querySelector(".hero h2");

if (subtitle) {
  const message = subtitle.textContent.trim();
  subtitle.textContent = "";

  let index = 0;

  function typeText() {
    if (index < message.length) {
      subtitle.textContent += message.charAt(index);
      index++;
      setTimeout(typeText, 45);
    }
  }

  typeText();
}

// Create a back-to-top button
const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.className = "back-to-top";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

function updateTopButton() {
  topButton.classList.toggle(
    "show",
    window.scrollY > 400
  );
}

window.addEventListener("scroll", updateTopButton);
updateTopButton();

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
