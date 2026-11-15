const title = document.querySelector("#hero-title");
const button = document.querySelector("#change-title");
const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

let isOriginal = true;

function changeTitle() {
    if (isOriginal) {
        title.textContent = "Turning ideas into reality.";
    } else {
        title.textContent = "Turning ideas into possibilities.";
    }

    isOriginal = !isOriginal;
   button.classList.toggle("highlight");
   
}
menuToggle.addEventListener("click", () => {
    console.log("Hamburger clicked!");
    navLinks.classList.toggle("open");
    console.log(navLinks.classList);
});

