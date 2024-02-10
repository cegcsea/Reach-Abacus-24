// Add constant files here
import spon1 from '../assets/Sponsors/spon11.jpg';
import spon3 from '../assets/Sponsors/spon3.jpg';

import Code from '../assets/Devs/Code.jpg';

import { events } from './events';
import { workshops } from './workshops';

export const sponsorData = [
    { image: spon1, name: 'Motarq', desc: "Abacus'24 Sponsor" },
    { image: spon3, name: 'TMB', desc: "REACH'24 Sponsor" },
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
    {
        img: Code,
        title: "Developer 4",
        disc: "Backend Developer",
    },
    {
        img: Code,
        title: "Developer 5",
        disc: "Backend Developer",
    },
];

export const contactsData = [
    {
        name: "Sangami M",
        phone: "9942896494",
    },
    {
        name: "Ashwin Muthuraman A",
        phone: "9360523558",
    },
    {
        name: "Janavarshini",
        phone: "9498072377",
    },
];

export { events, workshops }