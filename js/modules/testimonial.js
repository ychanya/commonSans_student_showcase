export function testimonial() {

    const testimonials = [
        { 
            img: "images/testimonials/marco.jpg",
            alt: "Portrait of Marco De Luca",
            name: "Marco De Luca", 
            role: "IDP Program Coordinator and Professor at Fanshawe College",
            quote: "Through live client projects, Level 4 students bring together design, development, and marketing skills to deliver fully realized, professional campaigns. Working directly with local organizations, they gain real-world experience while creating work that leaves a meaningful and lasting impact on the community."
        },
        { 
            img: "images/testimonials/rob.jpg",
            alt: "Portrait of Rob Haaf",
            name: "Rob Haaf", 
            role: "Retired IDP Professor at Fanshawe College",
            quote: "It is always rewarding to see the innovation and passion that our students bring to Industry Night. The skills they have developed in the IDP3 program are impressive and set them up for future success."
        },
        { 
            img: "images/testimonials/jarrod.jpg",
            alt: "Portrait of Jarrod Osterback",
            name: "Jarrod Osterback", 
            role: "IDP Professor at Fanshawe College",
            quote: "Industry Night is a wonderful opportunity for our students to shine. The projects they represent are a testament to their hard work and the real-world skills they've gained throughout our program."
        }
    ];

    const testimonialWrap = document.querySelector(".testimonialsWrapper");
    const previous = document.querySelector("#previous");
    const next = document.querySelector("#next");
    const trackingButtons = document.querySelectorAll(".TTButton");
    let count = 0;
    let autoPlay;

    function addActiveState() {
   
        const activeBtn = document.querySelector(`.TTButton[data-index="${count}"]`);
        if (activeBtn) {
            activeBtn.classList.add("customBtn");
        }
    }

    function showSlide(e) {
        const button = e.currentTarget;
        const index = Number(button.dataset.index); 
        count = index; 
        displayTestimonials(); 
        addActiveState();
    }

    function displayTestimonials(direction) {

        const testimonialInfo = testimonials[count];

        let animation = "";
    
        if (direction === "right") {
            animation = "fadeIn-right";
        } else {
            animation = "fadeIn-left";
        }

        testimonialWrap.innerHTML = "";

        const list = document.createElement("li");
        list.className = `${animation}`;

        const article = document.createElement("article");

        const nameWrapper = document.createElement("div");
        nameWrapper.className = "nameWrapper";

        const avatarDiv = document.createElement("div");
        avatarDiv.className = "testimonialAvatarImg";

        const image = document.createElement("img");
        image.src = testimonialInfo.img;
        image.alt = testimonialInfo.alt;
        avatarDiv.appendChild(image);

        const textWrapper = document.createElement("div");
        const header = document.createElement("h3");
        header.textContent = testimonialInfo.name;

        const paragraph = document.createElement("p");
        paragraph.textContent = testimonialInfo.role;
        textWrapper.appendChild(header);
        textWrapper.appendChild(paragraph);

        nameWrapper.appendChild(avatarDiv);
        nameWrapper.appendChild(textWrapper);

        const quote = document.createElement("p");
        quote.className = "quote";
        quote.textContent = testimonialInfo.quote;

        article.appendChild(nameWrapper);
        article.appendChild(quote);

        list.appendChild(article);

        testimonialWrap.appendChild(list);
            
        trackingButtons.forEach((btn) => {
            btn.classList.remove("customBtn");
        }); 
        addActiveState();
    }

    function nextTestimonial() {
        count++;
        if (count >= testimonials.length) count = 0; 
        displayTestimonials("right");
    }

    function previousTestimonial() {
        count--;
        if (count < 0) count = testimonials.length - 1; 
        displayTestimonials("left");
    }

    function startAutoPlay() {
        autoPlay = setInterval(nextTestimonial,4000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    next.addEventListener("click", nextTestimonial);
    previous.addEventListener("click", previousTestimonial);
    trackingButtons.forEach((button) => {button.addEventListener("click" , showSlide);});
    displayTestimonials();
    testimonialWrap.addEventListener("mouseenter", stopAutoPlay);
    testimonialWrap.addEventListener("mouseleave", startAutoPlay);
    
}