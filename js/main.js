// *********************** JS Guide ***********************

//   00. Mobile Menu 
//   01. Video Player
//   02. Carousel for Student Project Exhibition
//   03. Student Portfolio Dynamic Code
//   04. Testimonail

// ********************************************************

console.log("JS file connected");

// ------------- Mobile Menu ------------- 

(function() {
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
})();


// ------------- Video Player ------------- 

(function() {
    const player = new Plyr("video", {
        controls: [
            "play-large", 
            "play", 
            "progress", 
            "current-time", 
            "mute", 
            "volume", 
            "settings", 
            "pip",
            "fullscreen"
        ]
    });
})();


// ------------- Carousel for Student Project Exhibition ------------- 

(function() {
    const carousels = [
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg",
                alt: "Group 1 project exhibition group photo"
            },
            group: "Group #1", 
            members: [
                "Ajay Chakaravarthy",
                "Zakia Sultana",
                "Aayush Diyali",
                "Tapshveer Benipal",
                "Ngoc Nhu An Do",
                "Luciano Clementi"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg",
                alt: "Group 2 project exhibition group photo"
            },
            group: "Group #2", 
            members: [
                "Josephine Muncaster",
                "Linh Nguyen",
                "Situ Ranjit",
                "Rin Morito",
                "Anh Nguyen"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg",
                alt: "Group 3 project exhibition group photo"
            },
            group: "Group #3", 
            members: [
                "Mikhail Kirs",
                "Liam Kuchta",
                "Daljit Singh",
                "Rabin Tamang",
                "Pranav Pranav",
                "Simon Dasilva"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg",
                alt: "Group 4 project exhibition group photo"
            },
            group: "Group #4", 
            members: [
                "Kingsley Watson",
                "Amy Armstrong",
                "Zeran Lu",
                "Justine Nathalie Ng",
                "Ramona Lozon"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg",
                alt: "Group 5 project exhibition group photo"
            },
            group: "Group #5", 
            members: [
                "Harlowe Chetan Dhameliya",
                "Juliana Gambuzza",
                "Benjamin Kettlewell",
                "Hannah Silva",
                "Chanya Chumdee"
            ]
        }
    ];

    const carouselWrap = document.querySelector("#SPECarousel");
    const previous = document.querySelector("#previousCa");
    const next = document.querySelector("#nextCa");
    const trackingButtons = document.querySelectorAll(".SPEButton");
    let count = 0;

    // tracking buttons code
    function addActiveState() {
        const activeBtn = document.querySelector(`.SPEButton[data-index="${count}"]`);
        if (activeBtn) {
            activeBtn.classList.add("customBtn");
        }
    }

    function showSlide(e) {
        const button = e.currentTarget;
        const index = Number(button.dataset.index); 
        count = index; 
        displayCarousel(); 
        addActiveState();
    }

    function displayCarousel(direction) {

        const carouselInfo = carousels[count];

        // Using parameter to decide which animation should apply + add class directly into the HTML!!!! 
        if (direction === "right") {
            animation = "fadeIn-right";
        } else {
            animation = "fadeIn-left";
        }
        
        carouselWrap.innerHTML = "";

        const wrapper = document.createElement("div");
        wrapper.className = `SPEWrapper one-item sm-one-item md-one-item lg-two-items ${animation}`;

        const figure = document.createElement("figure");
        const image = document.createElement("img");
        image.sizes = "(min-width: 75em) 80em, (min-width: 48em) 64em, (min-width: 25.75em) 37.5em, 100vw";
        image.srcset = `${carouselInfo.groupImg.mobile} 372w,
                        ${carouselInfo.groupImg.tablet} 505w,
                        ${carouselInfo.groupImg.desktop} 752w`;
        image.src = `${carouselInfo.groupImg.mobile}`;
        image.alt = `${carouselInfo.groupImg.alt}`;
        image.className = "SPEImg";
        figure.appendChild(image);

        const groupWrapper = document.createElement("div");
        groupWrapper.className = "groupWrapper";
        const header = document.createElement("h3");
        header.textContent =  carouselInfo.group;
        const ul = document.createElement("ul");
        carouselInfo.members.forEach( member => {
            const list = document.createElement("li");
            list.textContent = member;
            list.className = "listStyleLi";
            ul.appendChild(list);
        });
        groupWrapper.appendChild(header);
        groupWrapper.appendChild(ul);

        wrapper.appendChild(figure);
        wrapper.appendChild(groupWrapper);
        carouselWrap.appendChild(wrapper);

        trackingButtons.forEach((btn) => {
            btn.classList.remove("customBtn");
        }); 
        addActiveState();
    }

    function nextCarousel() {
        count++;
        if (count >= carousels.length) count = 0;
        displayCarousel("right"); 
    }

    function previousCarousel() {
        count--;
        if (count < 0) count = carousels.length - 1;
        displayCarousel("left");
    }

    next.addEventListener("click", nextCarousel);
    previous.addEventListener("click", previousCarousel);
    trackingButtons.forEach((button) => {button.addEventListener("click" , showSlide);});
    displayCarousel();

})();


// ------------- Student Portfolio Dynamic Code ------------- 

(function() {
    const studentList = document.querySelector("#student-list");
    const students = [
        {
            id: 1, 
            img: "#",
            alt: "Portait of Aayush Diyali",
            name: "Aayush Diyali", 
            roles: ["Motion"], 
            portfolio: "#"
        },
        {
            id: 2, 
            img: "#",
            alt: "Portait of Abigail Londini",
            name: "Abigail Londini", 
            roles: ["Front-End","PM"], 
            portfolio: "#"
        },
        {
            id: 3, 
            img: "#",
            alt: "Portait of Ajay Chakaravarthy",
            name: "Ajay Chakaravarthy", 
            roles: ["Back-End"], 
            portfolio: "#"
        },
        {
            id: 4, 
            img: "#",
            alt: "Portait of Amy Armstrong",
            name: "Amy Armstrong", 
            roles: ["Graphic"], 
            portfolio: "#"
        },
        {
            id: 5, 
            img: "#",
            alt: "Portait of Anh Nguyen",
            name: "Anh Nguyen", 
            roles: ["Back-End"], 
            portfolio: "#"
        },
        {
            id: 6, 
            img: "#",
            alt: "Portait of Daljit Singh",
            name: "Daljit Singh", 
            roles: ["Graphic"], 
            portfolio: "#"
        },
        {
            id: 7, 
            img: "#",
            alt: "Portait of Hannah Silva",
            name: "Hannah Silva", 
            roles: ["PM"], 
            portfolio: "#"
        },
        {
            id: 8, 
            img: "#",
            alt: "Portait of Josephine Muncaster",
            name: "Josephine Muncaster", 
            roles: ["PM"], 
            portfolio: "#"
        },
        {
            id: 9, 
            img: "#",
            alt: "Portait of Justine Nathalie Ng",
            name: "Justine Nathalie Ng", 
            roles: ["PM"], portfolio: "#"
        },
        {
            id: 10, 
            img: "#",
            alt: "Portait of Kingsley Watson",
            name: "Kingsley Watson", 
            roles: ["Motion"], 
            portfolio: "#"
        },
        {
            id: 11, 
            img: "#",
            alt: "Portait of Laila Seif",
            name: "Laila Seif", 
            roles: ["Front-End","Motion"], 
            portfolio: "#"
        },
        {
            id: 12, 
            img: "#",
            alt: "Portait of Liam Kuchta",
            name: "Liam Kuchta", 
            roles: ["Motion"], 
            portfolio: "#"
        },
        {
            id: 13, 
            img: "#",
            alt: "Portait of Linh Nguyen",
            name: "Linh Nguyen", 
            roles: ["Graphic"], 
            portfolio: "#"
        },
        {
            id: 14, 
            img: "#",
            alt: "Portait of Luciano Clementi",
            name: "Luciano Clementi", 
            roles: ["Front-End","PM"], 
            portfolio: "#"
        },
        {
            id: 15, 
            img: "#",
            alt: "Portait of Mikhail Kirs",
            name: "Mikhail Kirs", 
            roles: ["Front-End","PM"], 
            portfolio: "#"
        },
        {
            id: 16, 
            img: "#",
            alt: "Portait of Ngoc Nhu An Do",
            name: "Ngoc Nhu An Do", 
            roles: ["Back-End"], 
            portfolio: "#"
        },
        {
            id: 17, 
            img: "#",
            alt: "Portait of Pranav Pranav",
            name: "Pranav Pranav", 
            roles: ["PM"], 
            portfolio: "#"
        },
        {
            id: 18, 
            img: "#",
            alt: "Portait of Rabin Tamang",
            name: "Rabin Tamang", 
            roles: ["Front-End"], 
            portfolio: "#"
        },
        {
            id: 19, 
            img: "#",
            alt: "Portait of Ramona Lozon",
            name: "Ramona Lozon", 
            roles: ["Back-End"], 
            portfolio: "#"
        },
        {
            id: 20, 
            img: "#",
            alt: "Portait of Rin Morito",
            name: "Rin Morito", 
            roles: ["Front-End"], 
            portfolio: "#"
        },
        {
            id: 21, 
            img: "#",
            alt: "Portait of Simon Dasilva",
            name: "Simon Dasilva", 
            roles: ["Back-End"], 
            portfolio: "#"
        },
        {
            id: 22, 
            img: "#",
            alt: "Portait of Situ Ranjit",
            name: "Situ Ranjit", 
            roles: ["Motion"], 
            portfolio: "#"
        },
        {
            id: 23, 
            img: "#",
            alt: "Portait of Tapshveer Benipal",
            name: "Tapshveer Benipal", 
            roles: ["Front-End"], 
            portfolio: "#"
        },
        {
            id: 24, 
            img: "#",
            alt: "Portait of Yi Cheng",
            name: "Yi Cheng", 
            roles: ["Back-End","Graphic"], 
            portfolio: "#"
        },
        {
            id: 25, 
            img: "#",
            alt: "Portait of Yi Lu",
            name: "Yi Lu", 
            roles: ["Front-End","PM"], 
            portfolio: "#"
        },
        {
            id: 26, 
            img: "#",
            alt: "Portait of Zakia Sultana",
            name: "Zakia Sultana", 
            roles: ["PM"], 
            portfolio: "#"
        },
        {
            id: 27, 
            img: "#",
            alt: "Portait of Zeran Lu",
            name: "Zeran Lu", 
            roles: ["Front-End"], 
            portfolio: "#"
        }
    ];

    const allBtn = document.querySelector("#allBtn");
    const graphicButton = document.querySelector("#graphicBtn");
    const motionButton = document.querySelector("#motionBtn");
    const frontEnButton = document.querySelector("#frontEnBtn");
    const backEnButton = document.querySelector("#backEnBtn");
    const pmButton = document.querySelector("#pmBtn");
    const filterButtons = document.querySelectorAll('.filterButton');
    

    // function to remove active state
    function removeActiveState() {
        filterButtons.forEach((button) =>{button.classList.remove("cutomFilter")} );
    }

    // Filter student roles by using filter() method
    function filterRole(role, e) {
        if (role === "All") {
                const result = students.filter((student) => student.roles.length);
                renderStudents(result);
        } else {
            // Use includes() to check array/string, while contains() is for DOM elements (like classList)
            const result = students.filter((student) => student.roles.includes(role));
            renderStudents(result);
        }
        removeActiveState();
        e.currentTarget.classList.add("cutomFilter");
    }

    function renderStudents(students) {

        studentList.innerHTML = "";

        students.forEach( student => {

            const card = document.createElement("li");
            card.className = "studentListWrapper";

            const avatarImg = document.createElement("img");
            avatarImg.className = "studentAvatarImg";
            avatarImg.src = student.img;
            avatarImg.alt = student.alt;

            const infoDiv = document.createElement("div");
            const nameRolesDiv = document.createElement("div");

            const header = document.createElement("h3");
            header.textContent = student.name;
            const ul = document.createElement("ul");
            ul.className = "tags";
            student.roles.forEach( role => {
                const listRole = document.createElement("li");
                listRole.textContent = role;
                ul.appendChild(listRole);
            });
            nameRolesDiv.appendChild(header);
            nameRolesDiv.appendChild(ul);

            const portfolioLink = document.createElement("a");
            portfolioLink.href = student.portfolio;
            portfolioLink.innerHTML = "View Portfolio &#8599;";
            infoDiv.appendChild(nameRolesDiv);
            infoDiv.appendChild(portfolioLink);

            card.appendChild(avatarImg);
            card.appendChild(infoDiv);

            studentList.appendChild(card);
        });
    }

    renderStudents(students);

    allBtn.addEventListener("click", (e) => filterRole("All", e));
    graphicButton.addEventListener("click", (e) => filterRole("Graphic", e));
    motionButton.addEventListener("click", (e) => filterRole("Motion", e));
    frontEnButton.addEventListener("click", (e) => filterRole("Front-End", e));
    backEnButton.addEventListener("click", (e) => filterRole("Back-End", e));
    pmButton.addEventListener("click", (e) => filterRole("PM", e));

})();


// ------------- Testimonail ------------- 

(function(){
    const testimonials = [
        { 
            img: "images/testimonials/marco.jpg",
            alt: "Portrait of Marco De Luca",
            name: "Marco De Luca", 
            role: "IDP Program Coordinator and Professor at Fanshawe College",
            quote: "Utilizing a diverse range of media, the Interactive Media Design students have masterfully highlighted the heroic sacrifices made by the India soldiers in World war I."
        },
        { 
            img: "images/testimonials/rob.jpg",
            alt: "Portrait of Rob Haaf",
            name: "Rob Haaf", 
            role: "IDP Professor at Fanshawe College",
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

    function displayCount() {
        if (window.innerWidth >= 1200) {
            return 2; 
        } else {
            return 1; 
        }
    }

    function addActiveState() {
        // Remove active styles from all tracking buttons first 
        trackingButtons.forEach((btn) => {
            btn.classList.remove("customBtn");
        }); 

        const activeBtn = document.querySelector(`.TTButton[data-index="${count}"]`);

        // Add active style to the button that matches the current slide
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
        testimonialWrap.innerHTML = "";
    
        // Using parameter to decide which animation should apply + add class directly into the HTML!!!! 
        if (direction === "right") {
            animation = "fadeIn-right";
        } else {
            animation = "fadeIn-left";
        }

        for (let i = 0; i < displayCount(); i++) {
            let position = count + i;

            // If position goes past the last testimonial, start again from the first one
            if (position >= testimonials.length) {
                position = position - testimonials.length;
            } else {
                position = position;
            }

            const testimonialInfo = testimonials[position];

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
        }
    }

    function nextTestimonial() {
        // Increase count based on how many items are shown from displayCount() 
        count = count + displayCount();
        // If count goes over the last testimonial, get back to the first one!!
        if (count >= testimonials.length) {
            count = count - testimonials.length;
        }
        displayTestimonials("right");
        addActiveState();
    }

    function previousTestimonial() {
        // Decrease count based on how many items are shown from displayCount()
        count = count - displayCount();
        // If count < 0, show last testimonials instead of going negative
        if (count < 0) {
            count = testimonials.length + count; 
        }
        displayTestimonials("left");
        addActiveState();
    }

    next.addEventListener("click", nextTestimonial);
    previous.addEventListener("click", previousTestimonial);
    window.addEventListener("resize", displayTestimonials);
    trackingButtons.forEach((button) => {button.addEventListener("click" , showSlide);});
    displayTestimonials();
    addActiveState();
})();