/*For Modal */

/* Element */

let openModal = document.querySelector("#mobile-nav-open");

let closeModal = document.querySelector(".close-mobile-nav");

let mobileNav = document.querySelector(".mobile-nav-container");

/* Event */

openModal.addEventListener("click", openMobileNav);

closeModal.addEventListener("click", closeMobileNav);

/* Execution */

function openMobileNav() {
  mobileNav.style.visibility = "visible";
}

function closeMobileNav() {
  mobileNav.style.visibility = "hidden";
}

// For Flickity Carousel

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "center",
  autoPlay: true,
  pageDots: false,
  prevNextButtons: false,
  wrapAround: true,
});

//For Accordion

const accordion = document.querySelector(".accordion");
accordion.querySelectorAll(".accordion-panel").forEach((panel) => {
  panel.querySelector(".accordion-header").addEventListener("click", () => {
    panel.classList.toggle("accordion-expanded");
  });
});

// Further Info

let openFurther = document.querySelector(".further");
let furtherText = document.querySelector(".furtherText");

openFurther.addEventListener("click", showPrivacy);

function showPrivacy() {
  furtherText.classList.toggle("forOurSafety");
}
