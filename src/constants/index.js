// Add constant files here
import spon1 from '../assets/Sponsors/spon11.jpg';
import spon2 from '../assets/Sponsors/spon22.jpg';
import spon3 from '../assets/Sponsors/spon3.jpg';
import spon4 from '../assets/Sponsors/spon4.jpg';
import spon5 from '../assets/Sponsors/spon5.jpg';
import spon6 from '../assets/Sponsors/spon6.jpg';

import Code from '../assets/Devs/Code.jpg';

import MERN from '../assets/Reach/MERN.png';
import OSPC from '../assets/Reach/OSPC.png';
import ReverseCoding from '../assets/Reach/ReverseCoding.png';
import UIUX from '../assets/Reach/UI UX.png';
import GeekQuiz from '../assets/Reach/Geek_Quiz.png';

export const sponsorData = [
    { image: spon1, name: 'Motarq', desc: 'Title Sponsor' },
    { image: spon2, name: 'Interview cake', desc: 'Coupon Sponsor' },
    { image: spon3, name: 'Collar Jobskart', desc: 'Educational Sponsor' },
    { image: spon4, name: 'Echo 3d', desc: 'Coupon Sponsor' },
    { image: spon5, name: 'SRP Craft', desc: 'Logistics Sponsor' },
    { image: spon6, name: 'Web3 Chennai', desc: 'Workshop sponsor' },
];

export const developersData = [
    {
        img: Code,
        title: "Developer 1",
        disc: "Frontend Developer",
    },
    {
        img: Code,
        title: "Developer 2",
        disc: "Frontend Developer",
    },
    {
        img: Code,
        title: "Developer 3",
        disc: "Backend Developer",
    },
];

export const contactsData = [
    {
        name: "Person 1",
        phone: "807xx xxxxx",
    },
    {
        name: "Person 2",
        phone: "807xx xxxxx",
    },
    {
        name: "Person 3",
        phone: "807xx xxxxx",
    },
];

export const events = [
    {
        title: "Geek_Quiz",
        body: 'Engage in a captivating quiz, battling wits in math, science, and logic. Thought-provoking questions challenge analytical abilities, showcasing expertise in numbers, science, and reasoning.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "geekquiz",
        image: GeekQuiz,
        prize: "Rs.5,000"
    },
    {
        title: "OSPC",
        body: 'A programming contest where the convergence of ingenious minds tackling intricate coding conundrums! Engage in a contest where participants navigate challenges featuring complex data structures and algorithms.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "ospc",
        image: OSPC,
        prize: "Rs.5,000"
    },
    {
        title: "UI/UX_design",
        body: 'Dive into the ultimate design competition, where creativity meets functionality. Elevate user experiences, push UI boundaries, and showcase your prowess in crafting seamless, innovative designs.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "uiux",
        image: UIUX,
        prize: "Rs.5,000"
    },
    {
        title: "Reverse_Coding",
        body: 'Participants receive an executable file that takes input and produces output. Their challenge is to reverse engineer the solution by analyzing the given input-output pairs.',
        tag: "Technical Events are twinkle twinkle little star",
        to: "reversecoding",
        image: ReverseCoding,
        prize: "Rs.5,000"
    },
];

export const workshops = [
    {
        title: "MERN_Stack_Development",
        to: "mernstackdev",
        image: MERN,
        content: "Engage in hands-on learning as we guide you through creating a simple yet impactful full-stack project. Ideal for both beginners and intermediate developers, this workshop not only provides valuable insights into essential MERN concepts but also offers guidance on further learning. Discover effective strategies and resources to stay updated with evolving technologies. As a bonus, practical suggestions on hosting full stack applications will be shared, ensuring you're well-equipped to take your projects live with confidence. Join us for a day of immersive learning, collaboration, and skill-building.",
        prerequistes: "Basics of HTML, CSS & JS.",
    },
    {
        title: "Introduction_to_Machine_Learning_with_Python",
        to: "mlusingpython",
        image: MERN,
        content: "Embark on a thrilling half-day journey into the realm of machine learning with our workshop, 'Introduction to Machine Learning with Python.' Whether you're a complete beginner or have some coding experience, this workshop is designed to make machine learning accessible and exciting in just a few hours. Dive into hands-on Python coding to create your own simple yet impactful machine learning model. No fuss, no jargon – just the essentials presented in a lively and approachable manner. Join us for a half-day of learning, coding, and exploration.",
        prerequistes: "No prior machine learning experience is required. Just bring your curiosity, and let's make the most of this short but impactful ML adventure!",
    },
]