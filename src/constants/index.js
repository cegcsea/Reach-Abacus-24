// Add constant files here
import spon1 from '../assets/Sponsors/spon11.jpg';
import spon2 from '../assets/Sponsors/spon22.jpg';
import spon3 from '../assets/Sponsors/spon3.jpg';
import spon4 from '../assets/Sponsors/spon4.jpg';
import spon5 from '../assets/Sponsors/spon5.jpg';
import spon6 from '../assets/Sponsors/spon6.jpg';

import Code from '../assets/Devs/Code.jpg';

import { events } from './events';
import { workshops } from './workshops';

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

export { events, workshops }