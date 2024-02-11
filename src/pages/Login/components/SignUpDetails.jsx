import React, { useState, useEffect, useContext } from 'react';
import { LoaderContext } from '../../../context/LoaderContext';
import { AuthContext } from '../../../context/AuthContext';
import { Dropdown } from '../../../components';
import { Loader } from '../../../components';

import dots from '../../../assets/Events/sidebg.png';
import { useParams } from 'react-router-dom';

function SignUpDetails() {
    const { email, token } = useParams();
    const { isLoading } = useContext(LoaderContext);
    const { handleAbacusRegister } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);
    const [selection, setSelection] = useState(null);
    const [selectionyear, setSelectionyear] = useState(null);
    const [formData, setFormData] = useState({
        name: "", college: "", hostCollege: "",
        dept: "", year: "", mobile: "", password: "",
    });

    const optionsHostCollege = [
        { label: 'Government College of Technology, Coimbatore', value: 'Government College of Technology, Coimbatore' },
        { label: 'PSNA College of Engineering and Technology', value: 'PSNA College of Engineering and Technology' },
    ];

    const handleMobileChange = (e) => {
        const regex = /^[0-9\b]+$/;

        if (e.target.value === '' || regex.test(e.target.value)) {
            setFormData((prevFormData) => ({ ...prevFormData, mobile: e.target.value }));
        }
    }

    const optionsYear = [
        { label: 'First year', value: '1' },
        { label: 'Second year', value: '2' },
        { label: 'Third year', value: '3' },
        { label: 'Fourth year', value: '4' },
        { label: 'Fifth year', value: '5' },
    ];

    const handleSelect = (option) => {
        setSelection(option)
    }

    const handleSelectYear = (option) => {
        setSelectionyear(option)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        handleAbacusRegister({
            name: formData.name,
            email: email,
            token: token,
            college: formData.college,
            hostCollege: selection.value,
            dept: formData.dept,
            year: parseInt(selectionyear.value),
            mobile: formData.mobile,
            password: formData.password,
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

                    <Dropdown options={optionsHostCollege} value={selection} onChange={handleSelect} selectLabel="Host College" />

                    <input type='text' name='dept' placeholder='Department' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.dept} onChange={handleChange} required />

                    <Dropdown options={optionsYear} value={selectionyear} onChange={handleSelectYear} selectLabel="Year" />

                    <input type='text' name='mobile' placeholder='Mobile' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.mobile} onChange={handleMobileChange} required />

                    <input type='password' name='password' placeholder='Password' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} value={formData.password} onChange={handleChange} required />

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