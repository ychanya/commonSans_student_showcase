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
    {id: 1, name: "Isabella Marie Taylor", roles: ["Graphic","PM"], portfolio: "#"},
    {id: 2, name: "Ling Zhao", roles: ["Front-End","PM"], portfolio: "#"}
];

function renderStudents(items) {
    studentList.innerHTML = items.map(s => `
        <li>
            <article>
                <h4>${s.name}</h4>
                <ul>${(s.roles||[]).map(r => `<li>${r}</li>`).join('')}</ul>
            </article>
        </li>    
    `).join('');
}

renderStudents(students);