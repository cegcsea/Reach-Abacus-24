// Add constant files here
import spon1 from '../assets/Sponsors/spon11.jpg';
import spon3 from '../assets/Sponsors/spon3.jpg';

import Code from '../assets/Devs/Code.jpg';
import naren from '../assets/Devs/naren.jpg';
import nikhil from '../assets/Devs/nikhil.jpg';
import vishwanth from '../assets/Devs/vishwanth.jpg';
import kani from '../assets/Devs/kani.jpg';
import selva from '../assets/Devs/selva.jpg';

import { events } from './events';
import { workshops } from './workshops';

export const sponsorData = [
    { image: spon1, name: 'Motorq', desc: "Abacus'24 Sponsor" },
    { image: spon3, name: 'TMB', desc: "REACH'24 Sponsor" },
];

export const developersData = [
    {
        img: naren,
        title: "Narendran G",
        disc: "Frontend Developer",
    },
    {
        img: nikhil,
        title: "Nikhil Prasanna",
        disc: "Backend Developer",
    },
    {
        img: vishwanth,
        title: "Vishwanth",
        disc: "Frontend Developer",
    },
    {
        img: kani,
        title: "Kanishkha",
        disc: "UI & UX Developer",
    },
    {
        img: selva,
        title: "Selva Rathinam",
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