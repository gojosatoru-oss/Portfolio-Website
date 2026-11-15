const floatingBackToTop = document.querySelector("#back-to-top");

if (floatingBackToTop) {
    function updateBackToTop() {
        if (window.scrollY > 300) {
            floatingBackToTop.classList.add("visible");
        } else {
            floatingBackToTop.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", updateBackToTop);
    updateBackToTop();

    floatingBackToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
