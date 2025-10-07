// *********************** JS Guide ***********************

//   00. Video Player
//   01. Carousel for Student Project Exhibition
//   02. Student Portfolio Dynamic Code
//   03. Testimonails

// ********************************************************

console.log("JS file connected");

// ------------- Video Player ------------- 

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


// ------------- Carousel for Student Project Exhibition ------------- 

const carousels = [
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #1", 
        members: [
            "Amy Armstrong",
            "Josephine Muncaster",
            "Laila Seif",
            "Zakia Sultana"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #2", 
        members: [
            "Harlowe D",
            "Juliana Gambuzza",
            "Benjamin Kettlewell",
            "Chanya Chumdee"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #3", 
        members: [
            "Sydney Bandarra",
            "Roni Soud",
            "Justine Nathalie",
            "Yi Lu"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #4", 
        members: [
            "Tapshveer Benipal",
            "Daljit Singh",
            "Pranav Pranav",
            "Tamunotubo Jackreece"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #5", 
        members: [
            "Ezekiel John Celis",
            "Simon Dasilva",
            "Diya Sanjay Patel",
            "Noah Kennedy"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #6", 
        members: [
            "Yi Cheng",
            "Mikhail Kirs",
            "Liam Kuchta",
            "Rabin Tamang"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #7", 
        members: [
            "Ngoc Nhu An Do",
            "Anh Nguyen",
            "Luciano Clementi",
            "Ajay Chakaravarthy"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #8", 
        members: [
            "Kingsley Watson",
            "Rin Morito",
            "Linh Nguyen",
            "Situ Ranjit",
            "Hannah Silva"
        ]
    },
    { 
        groupImg: { 
            mobile : "images/responsive/mobile/Project-exhibiton/group1_372.jpg",
            tablet : "images/responsive/tablet/student-exhibition/group1_505.jpg",
            desktop : "images/responsive/desktop/student-project/group1-desktop_752.jpg"
        },
        group: "Group #9", 
        members: [
            "Abigail Londini",
            "Aayush Diyali",
            "Qihong Liu",
            "Zeran Lu"
        ]
    }
];

const carouselWrap = document.querySelector("#SPECarousel");
const previousCa = document.querySelector("#previousCa");
const nextCa = document.querySelector("#nextCa");
let countCa = 0;

function displayCarousel(direction) {
    const carouselInfo = carousels[countCa];

    // Using parameter to decide which animation should apply + add it directly into the HTML!!!! 
    if (direction === "right") {
        animation = "fadeIn-right";
    } else {
        animation = "fadeIn-left";
    }

    carouselWrap.innerHTML = `
    <div class="SPEWrapper one-item sm-one-item md-one-item lg-two-items ${animation}">
        <figure>
            <img 
                sizes="(min-width: 75em) 80em, (min-width: 48em) 64em, (min-width: 25.75em) 37.5em, 100vw"
                srcset="${carouselInfo.groupImg.mobile} 372w,
                        ${carouselInfo.groupImg.tablet} 505w,
                        ${carouselInfo.groupImg.desktop} 752w"
                src="${carouselInfo.groupImg.mobile}"
                alt="${carouselInfo.group}" 
                class="SPEImg"
            >
        </figure>
        <div class="groupWrapper">
            <h3>${carouselInfo.group}</h3>
            <ul>
                ${carouselInfo.members.map(member => `<li class="listStyleLi">${member}</li>`).join("")}
            </ul>
        </div>
    </div>
  `;
}

function nextCarousel() {
  countCa++;
  if (countCa >= carousels.length) countCa = 0;
  displayCarousel("right"); 
}

function previousCarousel() {
  countCa--;
  if (countCa < 0) countCa = carousels.length - 1;
  displayCarousel("left");
}

nextCa.addEventListener("click", nextCarousel);
previousCa.addEventListener("click", previousCarousel);
displayCarousel();


// ------------- Student Portfolio Dynamic Code ------------- 
const studentList = document.querySelector("#student-list");
const students = [
    {id: 1, name: "Aayush Diyali", roles: ["Graphic","PM"], portfolio: "#"},
    {id: 2, name: "Abigail Londini", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 3, name: "Amy Armstrong", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 4, name: "Anh Nguyen", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 5, name: "Yi Lu", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 6, name: "Zakia Sultana", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 7, name: "Daljit Singh", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 8, name: "Diya Sanjay Patel", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 9, name: "Ezekiel John Celis", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 10, name: "Hannah Silva", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 11, name: "Zeran Lu", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 12, name: "Josephine Muncaster", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 13, name: "Tapshveer Benipal", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 14, name: "Justine Nathalie", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 16, name: "Kingsley Watson", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 17, name: "Laila Seif", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 18, name: "Liam Kuchta", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 19, name: "Linh Nguyen", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 20, name: "Luciano Clementi", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 21, name: "Mikhail Kirs", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 22, name: "Ngoc Nhu An Do", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 23, name: "Noah Kennedy", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 24, name: "Pranav Pranav", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 25, name: "Qihong Liu", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 26, name: "Rabin Tamang", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 27, name: "Rin Morito", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 28, name: "Roni Soud", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 29, name: "Simon Dasilva", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 30, name: "Situ Ranjit", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 31, name: "Sydney Bandarra", roles: ["Front-End","PM"], portfolio: "#"},
    {id: 32, name: "Yi Cheng", roles: ["Front-End","PM"], portfolio: "#"}
];

function renderStudents(students) {
    // Clear any existing content from the list
    studentList.innerHTML = "";

    // Loop through each student in the array
    students.forEach(student => {
        // Build a list of this student's roles
        let rolesHTML = "";
        student.roles.forEach(role => {
            rolesHTML += `<li>${role}</li>`;
        });

    // Create the HTML for one student
        const studentHTML = `
            <li class="studentListWrapper">
                <div class="studentAvatarImg"></div>
                <div>
                    <div>
                        <h3>${student.name}</h3>
                        <ul class="tags">${rolesHTML}</ul>
                    </div>
                    <a href="${student.portfolio}">View Portfolio &#8599;</a>
                </div>
            </li>
        `;

    // Add this student's HTML to the list container
    studentList.innerHTML += studentHTML;
  });
}

renderStudents(students);


// ------------- Testimonails ------------- 

const testimonials = [
    { 
        img: "images/testimonials/marco.jpg",
        name: "Marco De Luca", 
        role: "IDP Program Coordinator and Professor at Fanshawe College",
        quote: "Utilizing a diverse range of media, the Interactive Media Design students have masterfully highlighted the heroic sacrifices made by the India soldiers in World war I."
    },
    { 
        img: "images/testimonials/rob.jpg",
        name: "Rob Haaf", 
        role: "IDP Professor at Fanshawe College",
        quote: "It is always rewarding to see the innovation and passion that our students bring to Industry Night. The skills they have developed in the IDP3 program are impressive and set them up for future success."
    },
    { 
        img: "images/testimonials/jarrod.jpg",
        name: "Jarrod Osterback", 
        role: "IDP Professor at Fanshawe College",
        quote: "Industry Night is a wonderful opportunity for our students to shine. The projects they represent are a testament to their hard work and the real-world skills they've gained throughout our program."
    }
];

const testimonialWrap = document.querySelector(".testimonialsWrapper");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let count = 0;

function displayCount() {
    if (window.innerWidth >= 1200) {
        return 2; 
    } else {
        return 1; 
    }
}

function displayTestimonials(direction) {
    testimonialWrap.innerHTML = "";
    
    // Using parameter to decide which animation should apply + add it directly into the HTML!!!! 
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

        testimonialWrap.innerHTML += `
        <li class="${animation}">
            <article>
                <div class="nameWrapper">
                    <div class="testimonialAvatarImg">
                        <img src="${testimonialInfo.img}" alt="${testimonialInfo.name} Image">
                    </div>
                    <div>
                        <h3>${testimonialInfo.name}</h3>
                        <p>${testimonialInfo.role}</p>
                    </div>
                </div>
                <p class="quote">"${testimonialInfo.quote}"</p>
            </article>
        </li>`;
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
}

function previousTestimonial() {
    // Decrease count based on how many items are shown from displayCount()
    count = count - displayCount();
    // If count < 0, show last testimonials instead of going negative
    if (count < 0) {
        count = testimonials.length + count; 
    }
    displayTestimonials("left");
}

next.addEventListener("click", nextTestimonial);
previous.addEventListener("click", previousTestimonial);
window.addEventListener("resize", displayTestimonials);
displayTestimonials();