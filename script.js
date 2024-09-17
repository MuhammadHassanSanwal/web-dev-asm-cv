const profileData = {
    profilepicture: "me.jpg",
    name: "Muhammad Hassan Naseem Sanwal",
    about: {
        english: "Professional in Flutter and Unity. Experienced in App Development, Game Development, and Web Development.",
        arabic: "مرحبا، أنا محترف في تطوير التطبيقات والألعاب والويب.",
        urdu: "میرا نام محمد حسن نسیم سانول ہے اور میں ایپ ڈویلپمنٹ، گیم ڈویلپمنٹ اور ویب ڈویلپمنٹ میں ماہر ہوں۔"
    },
    skills: {
        soft: ["Teamwork", "Communication", "Problem Solving"],
        hard: ["Web Development", "Flutter Development", "Unity 3D & 2D"]
    },
    projects: [
        { name: "EdConnect", description: "A flutter mobile application that allows tutors and students to connect with each other." },
        { name: "Connect", description: "A flutter mobile app that allows students to connect with each other." },
        { name: "Web Scraper", description: "A flutter mobile application that allows users to scrape data from Google and store it as per their preference." },
        { name: "Flappy Bird", description: "Replica of Flappy Bird in Unity 2D." },
        { name: "Brick Breaker", description: "Brick Breaker game made in Unity 3D." },
        { name: "Ball Catcher", description: "Ball Catcher game made in Unity 3D." },
        { name: "Pakistani IGI", description: "Tank and helicopter fighter game made in Unity 3D." }
    ],
    video: "intro.mp4",
    socialMediaFeed: [
        { title: "Achievement", description: "Completed Flutter and Unity training." },
        { title: "Achievement", description: "Completed 6 Semesters in BsCs in ITU." },
        { title: "Certification", description: "Professionally Breaking Bad." }
    ],
    education: ["Bachelor's in Computer Science", "IBDP", "O' Levels"],
    awards: ["Best Developer Award, 2023", "Certified Full Stack Developer"]
};

const navItems = ["About Me", "Skills", "Projects", "Video", "Social Media Feed", "Education", "Awards"];
const navList = document.getElementById("navList");
navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = item;
    a.href = `#${item.toLowerCase().replace(/\s+/g, "")}`;
    li.appendChild(a);
    navList.appendChild(li);
});

document.getElementById("about").innerHTML = `
    <img src="${profileData.profilepicture}" alt="Profile Picture" class="profile-picture">
    <h1>${profileData.name}</h1>
    <p>${profileData.about.english}</p>
    <p class="Urdu">${profileData.about.arabic}</p>
    <p class="Urdu">${profileData.about.urdu}</p>
`;

document.getElementById("skills").innerHTML = `
    <h2>Skills</h2>
    <h3>Soft Skills</h3>
    <ul>${profileData.skills.soft.map(skill => `<li>${skill}</li>`).join('')}</ul>
    <h3>Hard Skills</h3>
    <ul>${profileData.skills.hard.map(skill => `<li>${skill}</li>`).join('')}</ul>
`;

document.getElementById("projects").innerHTML = `
    <h2>Projects</h2>
    ${profileData.projects.map(project => `
        <div class="card">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `).join('')}
`;

document.getElementById("video").innerHTML = `
    <h2>My Introduction Video</h2>
    <video width="320" height="240" controls>
        <source src="${profileData.video}" type="video/mp4">
        Your browser does not support the video tag.
    </video>
`;

document.getElementById("social").innerHTML = `
    <h2>Social Media Feed</h2>
    ${profileData.socialMediaFeed.map(feedItem => `
        <div class="card">
            <p>${feedItem.title}: ${feedItem.description}</p>
        </div>
    `).join('')}
`;

document.getElementById("education").innerHTML = `
    <h2>Education</h2>
    <ul>${profileData.education.map(edu => `<li>${edu}</li>`).join('')}</ul>`;

document.getElementById("awards").innerHTML = 
    `<h2>Awards & Certifications</h2>
    <ul>${profileData.awards.map(award => `<li>${award}</li>`).join('')}</ul>`;
