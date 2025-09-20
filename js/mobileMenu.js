console.log("Mobile menu JS file connected");

const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const closeMobileMenuBtn = document.querySelector("#closeMobileMenuBtn");

function toggleMobileMenu() {
    const mobileMenu = document.querySelector("#mobileMenu");

    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
    } else {
        mobileMenu.classList.add("open") 
    }
}

mobileMenuBtn.addEventListener("click",toggleMobileMenu);
closeMobileMenuBtn.addEventListener("click",toggleMobileMenu);
