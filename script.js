const floatingBackToTop = document.querySelector("#back-to-top");
const menuToggle = document.querySelector("#menu-toggle") 
const navi = document.querySelector(".nav-links" )

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


if (menuToggle && navi ){
menuToggle.addEventListener("click", () => 
{
const isOpen = 
navi.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", isOpen );

});






navi.querySelectorAll("a" ).forEach((links)=>{
      links.addEventListener("click", ()=>{

      navi.classList.remove("open");

menuToggle.setAttribute("aria-expanded", "false"  );







} );
});

}
