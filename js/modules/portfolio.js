export function portfolio() {
    
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

    const filterButtons = document.querySelectorAll(".filterButton");
    
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

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) =>
            filterRole(`${e.currentTarget.id}`, e)
        );
    });

}