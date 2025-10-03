console.log("JS file connected");

// Video Player
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

// Student Portfolio Dynamic Code
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

function renderStudents(items) {
    console.log("function working");
    // <img> src will be stored in the object and will be updated once imgs are obtained
    studentList.innerHTML = items.map(s => `
        <li class="studentListWrapper">
                    <div class="studentAvatarImg">
                        <!-- <img> -->
                    </div>
                    <div>
                        <div>
                            <h3>${s.name}</h3>
                            <ul class="tags">${(s.roles||[]).map(r => `<li>${r}</li>`).join('')}</ul>
                        </div>
                        <a href="${s.portfolio}">View Portfolio &#8599;</a>
                    </div>
                </li>    
    `).join('');
}

renderStudents(students);


// Testimonails v.1 

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

function displayTestimonial() {
    const testimonialInfo = testimonials[count];

    // Clear previous testimonial
    testimonialWrap.innerHTML = "";

    // Create testimonial
    testimonialWrap.innerHTML = `
        <li>
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
        </li>
    `;
}

function nextTestimonial() {
    count++;
    if (count >= testimonials.length) count = 0;
    displayTestimonial();
}

function previousTestimonial() {
    count--;
    if (count < 0) count = testimonials.length - 1;
    displayTestimonial();
}

next.addEventListener("click", nextTestimonial);
previous.addEventListener("click", previousTestimonial);
displayTestimonial();