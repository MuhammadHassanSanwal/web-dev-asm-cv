// JavaScript Object with CV Data
const cvData = {
    name: "Muhammad Hassan Naseem Sanwal",
    title: "Flutter Developer | Unity Game Developer | Web Developer",
    introButton: "Hire Me",
    about: {
        description: "Passionate developer with expertise in Flutter, Unity, and web development. I specialize in creating highly responsive mobile apps and immersive game environments with sleek, modern designs and optimized performance.",
        aboutDescUrdu: [
            "مرحبا، أنا محترف في تطوير التطبيقات والألعاب والويب",
            "میرا نام محمد حسن نسیم سانوال ہے اور میں ایپ ڈویلپمنٹ، گیم ڈویلپمنٹ اور ویب ڈویلپمنٹ میں ماہر ہوں"
        ]
    },
    skills: [
        {
            name: "Flutter",
            description: "Developing robust and high-performing mobile apps."
        },
        {
            name: "Unity",
            description: "Building 3D adventure games with dynamic environments."
        },
        {
            name: "Web Development",
            description: "Creating modern, SEO-optimized websites."
        }
    ],
    projects: [
        {
            name: "EdConnect",
            description: "A flutter mobile application that allows tutors and students to connect with each other."
        },
        {
            name: "Connect",
            description: "A flutter mobile app that allows students to connect with each other."
        },
        {
            name: "Web Scraper",
            description: "A flutter mobile application that allows user to scrap data from Google and store it as per their preference."
        },
        {
            name: "Flappy Bird",
            description: "Replica of Flappy Bird in Unity 2D."
        },
        {
            name: "Brick Breaker",
            description: "Brick Breaker game made in Unity 3D."
        },
        {
            name: "Ball Catcher",
            description: "Ball Catcher game made in Unity 3D."
        },
        {
            name: "Pakistani IGI",
            description: "Tank and helicopter fighter game made in Unity 3D."
        }
    ],
    education: [
        "Bachelor's in Computer Science",
        "IBDP",
        "O' Levels"
    ],
    video: {
        source: "intro.mp4",
        text: "Your browser does not support the video tag."
    },
    contact: {
        email: "muhammadhassansanwal@gmail.com",
        github: "github.com/MuhammadHassanSanwal"
    }
};

// Populate HTML with JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Intro Section
    const introSection = document.getElementById('intro');
    introSection.innerHTML = `
        <h1>${cvData.name}</h1>
        <p>${cvData.title}</p>
        <a href="#contact" class="btn-glow">${cvData.introButton}</a>
    `;

    // About Section
    const aboutSection = document.getElementById('about-section');
    aboutSection.innerHTML = `
        <h2>About Me</h2>
        <div class="profile-section">
            <img src="me.jpg" alt="Profile Picture" class="profile-pic">
            <p class="about-desc">${cvData.about.description}</p>
            ${cvData.about.aboutDescUrdu.map(desc => `<p class="about-desc-urdu">${desc}</p>`).join('')}
        </div>
    `;

    // Skills Section
    const skillsSection = document.getElementById('skills-section');
    skillsSection.innerHTML = `
        <h2>Skills</h2>
        <div class="skills-grid">
            ${cvData.skills.map(skill => `
                <div class="skill-card glass-card">
                    <h3>${skill.name}</h3>
                    <p>${skill.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Projects Section
    const projectsSection = document.getElementById('projects-section');
    projectsSection.innerHTML = `
        <h2>Projects</h2>
        <div class="project-list">
            ${cvData.projects.map(project => `
                <div class="project-card glass-card">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Education Section
    const educationSection = document.getElementById('education-section');
    educationSection.innerHTML = `
        <h2>Education</h2>
        <ul class="education-list">
            ${cvData.education.map(edu => `<li>${edu}</li>`).join('')}
        </ul>
    `;

    // Video Section
    const videoSection = document.getElementById('video-section');
    videoSection.innerHTML = `
        <h2>My Video</h2>
        <video controls class="video-presentation">
            <source src="${cvData.video.source}" type="video/mp4">
            ${cvData.video.text}
        </video>
    `;

    // Contact Section
    const contactSection = document.getElementById('contact-section');
    contactSection.innerHTML = `
        <h2>Contact Me</h2>
        <p>Email: ${cvData.contact.email}</p>
        <p>GitHub: ${cvData.contact.github}</p>
    `;
});
