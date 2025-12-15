const skills = [
  "LARAVEL",
  "JAVASCRIPT",
  "C#",
  "VB.NET",
  "PHP",
  "REACT",
  "DOCKER",
  "LINUX",
  "NESTJS",
  "API",
  "NOSQL",
  "MYSQL",
  "POSTGRES",
  "SQL SERVER",
  "HTML",
  "CSS",
  "DECK.GL",
  "GOOGLE MAPS INTEGRATION",
  "FILAMENT",
  "PYTHON",
  "WINDOWS",
  "MACOS",
  "RUBY ON RAILS",
  "VISUAL STUDIO"
];

const carouselTrack = document.getElementById("skills-carousel");

/**
 * Creates a span element with carousel styling
 */
function createItem(text) {
  const span = document.createElement("span");
  span.className = "carousel__item";
  span.textContent = text;
  return span;
}

/**
 * Populate carousel
 * Duplicate the list to allow seamless infinite scrolling
 */
function populateCarousel(items) {
  items.forEach((skill, index) => {
    carouselTrack.appendChild(createItem(skill));

    // Add separator
    if (index < items.length) {
      carouselTrack.appendChild(createItem("•"));
    }
  });
}

// Populate twice for smooth looping animation
populateCarousel(skills);
populateCarousel(skills);