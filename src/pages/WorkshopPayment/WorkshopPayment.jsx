import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import dots from '../../assets/Events/sidebg.png';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

function WorkshopPayment() {
    const { isLoading } = useContext(LoaderContext);
    const { handleVerifyWorkshopPayment } = useContext(AuthContext);
    const { id } = useParams();
    const [formData, setFormData] = useState({ transactionId: "", paymentMobile: "" });
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

    if (isLoading) {
        return <Loader />;
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleVerifyWorkshopPayment({ workshopId: parseInt(id), ...formData })
    }

    return (
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-[#34363e] h-screen gap-5">
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}

            <div className="querybox flex flex-col gap-4 w-full sm:w-2/5 border border-[#ABB2BF] border-solid border-white-500 text-white p-5 sm:p-10 bg-[#282C33]">
                <div className='text-2xl text-center'>
                    <span className='text-[#C778DD]'>&#60;</span>
                    &nbsp;Payment&nbsp;
                    <span className='text-[#C778DD]'>&#62;</span>
                </div>
                <p className='text-base text-gray-300 text-center'>It's always better to lay down the burden of loan ASAP!</p>

                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

                    <input type='text' name='transactionId' placeholder='Transaction ID' onChange={handleChange} value={formData.transactionId}
                        className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='text' name='paymentMobile' placeholder='Payment Mobile No.' onChange={handleChange} value={formData.paymentMobile}
                        className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <div className="self-center">
                        <button type='submit' className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                            Verify Payment {"<"}~{">"}
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

export default WorkshopPayment;