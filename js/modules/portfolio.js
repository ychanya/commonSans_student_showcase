export function portfolio() {
    
    const students = [
        {
            id: 1, 
            img: "images/students-profile/AayushDiyali.jpg",
            alt: "Portait of Aayush Diyali",
            name: "Aayush Diyali", 
            roles: ["Motion", "Graphic"], 
            portfolio: "https://aayushdiyali.ca/"
        },
        {
            id: 2, 
            img: "images/students-profile/AbigailLondini.jpg",
            alt: "Portait of Abigail Londini",
            name: "Abigail Londini", 
            roles: ["Generalist"], 
            portfolio: "http://abigaillondini.ca/"
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
            img: "images/students-profile/AmyArmstrong.jpg",
            alt: "Portait of Amy Armstrong",
            name: "Amy Armstrong", 
            roles: ["Graphic","Brand Designer"], 
            portfolio: "https://armstrng.com/index.html"
        },
        {
            id: 5, 
            img: "#",
            alt: "Portait of Alex Nguyen",
            name: "Alex Nguyen", 
            roles: ["Graphic","Motion","Front-End"], 
            portfolio: "https://jhustalex.ca/index.php"
        },
        {
            id: 6, 
            img: "images/students-profile/DaljitSingh.jpg",
            alt: "Portait of Daljit Singh",
            name: "Daljit Singh", 
            roles: ["Graphic"], 
            portfolio: "https://daljitsinghcreations.com/"
        },
        {
            id: 7, 
            img: "images/students-profile/HannahMelo.jpg",
            alt: "Portait of Hannah Melo",
            name: "Hannah Melo", 
            roles: ["Motion"], 
            portfolio: "http://hannahmelomd.ca/"
        },
        {
            id: 8, 
            img: "images/students-profile/JoMuncaster.jpg",
            alt: "Portait of Jo Muncaster",
            name: "Jo Muncaster", 
            roles: ["Graphic","Motion","Web Designer"], 
            portfolio: "https://www.jomuncaster.design/"
        },
        {
            id: 9, 
            img: "images/students-profile/.jpg",
            alt: "Portait of Justine Nathalie",
            name: "Justine Nathalie", 
            roles: ["Graphic","Motion"], 
            portfolio: "https://jnathaliedesigns.com/"
        },
        {
            id: 10, 
            img: "#",
            alt: "Portait of Kingsley Watson",
            name: "Kingsley Watson", 
            roles: ["Graphic","Motion"], 
            portfolio: "https://kingsley-watson.ca/"
        },
        {
            id: 11, 
            img: "images/students-profile/LailaSeif.jpg",
            alt: "Portait of Laila Seif",
            name: "Laila Seif", 
            roles: ["Graphic","UI designer"], 
            portfolio: "http://lailaseif.ca/"
        },
        {
            id: 12, 
            img: "images/students-profile/LiamKuchta.jpg",
            alt: "Portait of Liam Kuchta",
            name: "Liam Kuchta", 
            roles: ["Graphic","Motion"], 
            portfolio: "https://liamkuchta.ca/"
        },
        {
            id: 13, 
            img: "images/students-profile/LinhNguyen.jpg",
            alt: "Portait of Linh Nguyen",
            name: "Linh Nguyen", 
            roles: ["Graphic","Front-End","Motion"], 
            portfolio: "https://linhnguyenportfolio.com/"
        },
        {
            id: 14, 
            img: "images/students-profile/LucianoClementi.jpg",
            alt: "Portait of Luciano Clementi",
            name: "Luciano Clementi", 
            roles: ["Motion","Front-End","Video Editor"], 
            portfolio: "https://lucianoclementi.com/"
        },
        {
            id: 15, 
            img: "images/students-profile/MikhailKris.jpg",
            alt: "Portait of Mikhail Kirs",
            name: "Mikhail Kirs", 
            roles: ["Front-End"], 
            portfolio: "https://michaelkirsweb.ca/"
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
            img: "images/students-profile/PranavJain.jpg",
            alt: "Portait of Pranav Jain",
            name: "Pranav Jain", 
            roles: ["Front-End","Graphic","PM"], 
            portfolio: "https://notpranavjain.ca/"
        },
        {
            id: 18, 
            img: "#",
            alt: "Portait of Rabin Tamang",
            name: "Rabin Tamang", 
            roles: ["Front-End"], 
            portfolio: "https://rabintamang.ca/"
        },
        {
            id: 19, 
            img: "#",
            alt: "Portait of Ramona Lozon",
            name: "Ramona Lozon", 
            roles: ["Back-End","Front-End"], 
            portfolio: "https://ramonalozon.ca/"
        },
        {
            id: 20, 
            img: "images/students-profile/RinMorito.jpg",
            alt: "Portait of Rin Morito",
            name: "Rin Morito", 
            roles: ["Front-End","Graphic","Motion"], 
            portfolio: "https://rinmorito.com/"
        },
        {
            id: 21, 
            img: "images/students-profile/SimonDasilva.jpg",
            alt: "Portait of Simon Dasilva",
            name: "Simon Dasilva", 
            roles: ["Front-End"], 
            portfolio: "https://simon-dasilva.ca/"
        },
        {
            id: 22, 
            img: "images/students-profile/SituRanjit.jpg",
            alt: "Portait of Situ Ranjit",
            name: "Situ Ranjit", 
            roles: ["Front-End","Graphic"], 
            portfolio: "https://www.situranjit.com/"
        },
        {
            id: 23, 
            img: "images/students-profile/avatar.jpg",
            alt: "Portait of Tapshveer Benipal",
            name: "Tapshveer Benipal", 
            roles: ["Front-End"], 
            portfolio: "https://tapshveerb.ca/"
        },
        {
            id: 24, 
            img: "images/students-profile/avatar.jpg",
            alt: "Portait of Yi Cheng",
            name: "Yi Cheng", 
            roles: ["Graphic","Front-End"], 
            portfolio: "https://y1cng118.mywhc.ca/"
        },
        {
            id: 25, 
            img: "images/students-profile/avatar.jpg",
            alt: "Portait of Yi Lu",
            name: "Yi Lu", 
            roles: ["Graphic"], 
            portfolio: "https://yiluportfolio.ca/"
        },
        {
            id: 26, 
            img: "images/students-profile/ZakiaSultana.jpg",
            alt: "Portait of Zakia Sultana",
            name: "Zakia Sultana", 
            roles: ["Front-End","Back-End"], 
            portfolio: "https://zakiasultana.ca/"
        },
        {
            id: 27, 
            img: "images/students-profile/ZeranLu.jpg",
            alt: "Portait of Zeran Lu",
            name: "Zeran Lu", 
            roles: ["Front-End"], 
            portfolio: "https://zeranlu.ca/"
        }
    ];
    const studentList = document.querySelector("#student-list");
    const filterButtons = document.querySelectorAll(".filterButton");
    const defaultBtn = document.querySelector("#All");
    
    function removeActiveState(selectedBtn) {
        filterButtons.forEach((filterBtn) => {
            if(filterBtn.id !== selectedBtn.id) {
                filterBtn.classList.remove("cutomFilter");
            }
        })
    }

    // Filter student roles by using filter() method
    function filterRole(selectedBtn) {

        const role = selectedBtn.id;

        if (role === "All") {
            renderStudents(students);
        } else {
            // Use includes() to check array/string, while contains() is for DOM elements (like classList)
            const result = students.filter((student) => student.roles.includes(role));
            renderStudents(result);
        }

        selectedBtn.classList.add("cutomFilter");
        removeActiveState(selectedBtn);
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
            portfolioLink.target = "_blank";
            portfolioLink.innerHTML = "View Portfolio &#8599;";
            infoDiv.appendChild(nameRolesDiv);
            infoDiv.appendChild(portfolioLink);

            card.appendChild(avatarImg);
            card.appendChild(infoDiv);

            studentList.appendChild(card);
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", () =>
            filterRole(button)
        );
    });

    filterRole(defaultBtn);
}