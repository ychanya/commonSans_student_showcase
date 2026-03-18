export function carousel() {

    const carousels = [
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/student-exhibition/group1_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
                desktop : "images/responsive/desktop/student-exhibition/group1_752.jpg",
                alt: "Group 1 project exhibition group photo"
            },
            group: "Group #1", 
            members: [
                "Ajay Antony Raj",
                "Zakia Sultana",
                "Aayush Diyali",
                "Tapshveer Benipal",
                "Do, Ngoc Nhu An",
                "Luciano Clementi"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/student-exhibition/group2_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group2_505.jpg",
                desktop : "images/responsive/desktop/student-exhibition/group2_752.jpg",
                alt: "Group 2 project exhibition group photo"
            },
            group: "Group #2", 
            members: [
                "Jo Muncaster",
                "Linh Nguyen",
                "Situ Ranjit",
                "Rin Morito",
                "Alex Nguyen"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/student-exhibition/group3_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group3_505.jpg",
                desktop : "images/responsive/desktop/student-exhibition/group3_752.jpg",
                alt: "Group 3 project exhibition group photo"
            },
            group: "Group #3", 
            members: [
                "Mikhail Kirs",
                "Liam Kuchta",
                "Daljit Singh",
                "Rabin Tamang",
                "Pranav Jain",
                "Simon DaSilva"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/student-exhibition/group4_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group4_505.jpg",
                desktop : "images/responsive/desktop/student-exhibition/group4_752.jpg",
                alt: "Group 4 project exhibition group photo"
            },
            group: "Group #4", 
            members: [
                "Kingsley Watson",
                "Amy Armstrong",
                "Zeran Lu",
                "Justine Nathalie",
                "Ramona Lozon"
            ]
        },
        { 
            groupImg: { 
                mobile : "images/responsive/mobile/student-exhibition/group5_372.jpg",
                tablet : "images/responsive/tablet/student-exhibition/group5_505.jpg",
                desktop : "images/responsive/desktop/student-exhibition/group5_752.jpg",
                alt: "Group 5 project exhibition group photo"
            },
            group: "Group #5", 
            members: [
                "Harlowe Chetan Dhameliya",
                "Juliana Gambuzza",
                "Ben Kettlewell",
                "Hannah Melo",
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
        let animation = "";

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
    
}