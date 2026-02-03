export function backToTop() {

    const backToTopBtn = document.querySelector("#backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 200){
            backToTopBtn.classList.add("show");
        }else{
            backToTopBtn.classList.remove("show");
        }
    }) 
}