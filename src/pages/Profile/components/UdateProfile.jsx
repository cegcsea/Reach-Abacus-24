import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../../../context/LoaderContext';
import { AuthContext } from '../../../context/AuthContext';
import { Dropdown } from '../../../components';
import { Loader } from '../../../components';

import dots from '../../../assets/Events/sidebg.png';
import { useParams } from 'react-router-dom';

function UpdateProfile() {
    const { isLoading } = useContext(LoaderContext);
    const { user, handleUpdateProfile } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);
    const [selectionyear, setSelectionyear] = useState(null);
    const [formData, setFormData] = useState({
        name: user.name, college: user.college,
        dept: user.dept, year: user.year, mobile: user.mobile
    });

    const optionsYear = [
        { label: 'First year', value: '1' },
        { label: 'Second year', value: '2' },
        { label: 'Third year', value: '3' },
        { label: 'Fourth year', value: '4' },
        { label: 'Fifth year', value: '5' },
    ];

    const handleSelectYear = (option) => {
        setSelectionyear(option)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleUpdateProfile({
            name: formData.name,
            college: formData.college,
            dept: formData.dept,
            year: parseInt(selectionyear.value),
            mobile: formData.mobile,
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
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-[#34363e] gap-5">
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

                    <Dropdown options={optionsYear} value={selectionyear} onChange={handleSelectYear} selectLabel={'Update your year'} />

                    <input type='text' name='mobile' placeholder='Mobile' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.mobile} onChange={handleChange} required />

                    <div className="self-center">
                        <button type='submit' className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                            Update {"<"}~{">"}
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

export default UpdateProfile;