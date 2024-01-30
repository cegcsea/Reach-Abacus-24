import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../../../context/LoaderContext';
import { AuthContext } from '../../../context/AuthContext';

import { Loader } from '../../../components';

import dots from '../../../assets/Events/sidebg.png';
import { useParams } from 'react-router-dom';

function SignUpDetails() {
    const { email, token } = useParams();
    const { isLoading } = useContext(LoaderContext);
    const { handleAbacusRegister } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);
    const [housing, setHousing] = useState('false');
    const [formData, setFormData] = useState({
        name: "", college: "",
        dept: "", year: "", mobile: "", password: "", accomodation: 'false'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleAccomodation = (e) => setHousing(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleAbacusRegister({
            name: formData.name,
            email: email,
            token: token,
            college: formData.college,
            dept: formData.dept,
            year: parseInt(formData.year),
            mobile: formData.mobile,
            password: formData.password,
            accomodation: housing === 'true' ? true : false,
        });
    }

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

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-[#34363e] h-screen gap-5">
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
            <div className="querybox flex flex-col gap-7 w-full sm:w-2/5 border border-[#ABB2BF] border-solid border-white-500 text-white p-5 sm:p-10 bg-[#282C33]">
                <div className='text-2xl text-center'>
                    <span className='text-[#C778DD]'>&#60;</span>
                    &nbsp;Sign up&nbsp;
                    <span className='text-[#C778DD]'>&#62;</span>
                </div>
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Name' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.name} onChange={handleChange} required />

                    <input type='text' name='college' placeholder='College' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.college} onChange={handleChange} required />

                    <input type='text' name='dept' placeholder='Department' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.dept} onChange={handleChange} required />

                    <input type='text' name='year' placeholder='Year' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.year} onChange={handleChange} required />

                    <input type='text' name='mobile' placeholder='Mobile' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.mobile} onChange={handleChange} required />

                    <input type='password' name='password' placeholder='Password' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.password} onChange={handleChange} required />

                    <div className='flex gap-10 text-gray-400'>
                        <p>Accommodation</p>
                        <div className='flex gap-5'>
                            <div className='flex gap-3'>
                                <input type='radio' name='accomodation' id='radio-yes' value={'true'} checked={housing === 'true'}
                                    onChange={handleAccomodation} />
                                <label for='radio-yes'>Yes</label>
                            </div>
                            <div className='flex gap-3'>
                                <input type='radio' name='accomodation' id='radio-no' value={'false'} checked={housing === 'false'}
                                    onChange={handleAccomodation} />
                                <label for='radio-no'>No</label>
                            </div>
                        </div>
                    </div>

                    <div className="self-center">
                        <button type='submit' className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                            Register {"<"}~{">"}
                        </button>
                    </div>
                </form>
            </div>
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center rotate-180">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
        </div>
    )
}

export default SignUpDetails;