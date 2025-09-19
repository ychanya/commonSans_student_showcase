console.log("Mobile menu JS file connected");

const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const closeMobileMenuBtn = document.querySelector("#closeMobileMenuBtn");

function toggleMobileMenu() {

    const mobileMenu = document.querySelector("#mobileMenu");

    if(mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.remove("hidden");
    } else {
        mobileMenu.classList.add("hidden");
    }
}

mobileMenuBtn.addEventListener("click",toggleMobileMenu);
closeMobileMenuBtn.addEventListener("click",toggleMobileMenu);
