import React, { useContext, useEffect, useState } from 'react';
import { contactsData } from '../../constants';
import PhoneCard from '../PhoneCard/Phone';
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const QueryForm = () => {
    const { handleSubmitQuery, auth, user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: "", email: "", title: "", message: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSubmitQuery({ ...formData, email: auth ? user.email : formData.email, name: auth ? user.name : formData.name });
        setFormData({
            name: "", email: "", title: "", message: ""
        });
    }

    return (
        <form className='flex flex-col space-y-4 py-10' onSubmit={handleSubmit}>
            {!auth && (
                <>
                    <input type='text' name='name' placeholder='Name' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.name} onChange={handleChange} required />
                    <input type='email' name='email' placeholder='Email' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.email} onChange={handleChange} required />
                </>
            )}
            <input type='text' name='title' placeholder='Title' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.title} onChange={handleChange} required />
            <textarea placeholder='Message' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                style={{ width: '100%', backgroundColor: "#30343a", resize: 'none' }} rows={4} cols={15} name='message'
                value={formData.message} onChange={handleChange} required></textarea>
            <div className="">
                <button type='submit' className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                    Send {"<"}~{">"}
                </button>
            </div>
        </form>
    )
}

const MediaIcons = () => {
    return (
        <div className="mediabox  text-2xl text-white flex flex-col justify-center items-center mt-4">
            <p className=''>Media</p>
            <div className="icons flex flex-wrap pt-5 text-[#ABB2BF]">
                <Link to={'https://www.instagram.com/csea_ceg/'} target='_blank'>
                    <FaInstagram size={35} className='mr-5 hover:text-pink-500 transition-all' />
                </Link>
                <Link to={'https://www.facebook.com/csea.ceg'} target='_blank'>
                    <FaFacebook size={35} className='mr-5 hover:text-blue-500 transition-all' />
                </Link>
                <Link to={'https://www.linkedin.com/company/csea-ceg/'} target='_blank'>
                    <CiLinkedin size={40} className='mr-5 hover:text-blue-800 transition-all' />
                </Link>
            </div>
        </div>
    );
}

const Footer = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <div className='footer border border-t-1 border-x-0 border-b-0 border-[#ABB2BF] pt-6 bg-[#292d33]'>
            <span id='contact'></span>
            <div className='head flex items-center pl-4 text-white text-2xl'>
                <h1>
                    <span className="text-[#C778DD] font-bold">#</span>
                    <span className="text-white">contacts</span>
                </h1>
                <div className="line"></div>
            </div>
            <div className='body p-5 flex flex-wrap w:flex-col h:full justify-center sm:items-start items-center sm:justify-between'>
                <div className="leftbox flex flex-col mb-14 justify-center items-center mt-7">
                    <div className="locationbox border border-[#ABB2BF] mb-4 h-full w-full">
                        <div className="locatehead border-y border-[#ABB2BF] p-2 text-2xl pl-7 text-white">Locate</div>
                        <div className="locatebody flex flex-col justify-center py-10 px-7">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.37518444508!2d80.23412206399604!3d13.011763417518218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52679f6aaaaaab%3A0x90dc1b9c54311d4b!2sDepartment%20Of%20Computer%20Science%20and%20Engineering!5e0!3m2!1sen!2sin!4v1659372958426!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Map" height="200" className="map"></iframe>
                            <div className='college pt-6 text-[#ABB2BF]'>
                                <div>College of Engineering</div>
                                <div>Guindy, (CEG - Anna University), <br />Chennai 600028</div>
                            </div>
                        </div>
                    </div>
                    {!isMobile && <MediaIcons />}
                </div>
                <div className='flex flex-col'>
                    <div className="phonebox border border-[#ABB2BF] h-full mb-14 p-6 mt-7">
                        <div className='phonehead text-2xl text-white pb-3'>Phone</div>
                        <div className='flex flex-col gap-3'>
                            {contactsData.map(({ name, phone }) => {
                                return (
                                    <PhoneCard
                                        name={name}
                                        phone={phone}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center md:justify-start md:items-start gap-3'>
                        <p className='text-xl text-white pb-2 md:text-justify text-center'>Collaborate with us!</p>
                        <a href='mailto:cseaceg24@gmail.com' target='_blank'>
                            <p className='bg-gray-700/60 hover:bg-gray-800/80 transition-all cursor-pointer  border border-gray-400/60 px-5 py-1 rounded-2xl w-[16rem] text-white flex justify-center items-center gap-2'>
                                <span className='text-yellow-200'><FaEnvelope /></span>
                                cseaceg24@gmail.com
                            </p>
                        </a>
                        <a href='mailto:marketing@abacus.org.in' target='_blank'>
                            <p className='bg-gray-700/60 hover:bg-gray-800/80 transition-all cursor-pointer  border border-gray-400/60 px-5 py-1 rounded-2xl w-[16rem] text-white flex justify-center items-center gap-2'>
                                <span className='text-yellow-200'><FaEnvelope /></span>
                                marketing@abacus.org.in
                            </p>
                        </a>
                    </div>
                </div>
                <div className="querybox border w-[97%] md:w-[45%] lg:w-[45%] xl:w-[30%] mt-7 border-[#ABB2BF] border-solid border-white-500 h-full text-white p-10">
                    <div className='text-2xl'>Send your Queries</div>
                    <QueryForm />
                </div>
                {isMobile && <MediaIcons />}
            </div>
            <div className='footerline flex items-center justify-center text-[#ABB2BF] p-4 bg-gray-800/70'>&copy; Copyright 2024 CSEA. All rights reserved.</div>
        </div>
    )
}

export default Footer;