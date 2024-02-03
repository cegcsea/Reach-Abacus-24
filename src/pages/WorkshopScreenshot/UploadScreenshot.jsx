import React, { useContext, useEffect, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import dots from '../../assets/Events/sidebg.png';
import { AuthContext } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';

function WorkshopPayment() {
    const { isLoading } = useContext(LoaderContext);
    const { handleVerifyWorkshopScreenshot } = useContext(AuthContext);
    const { transactionId } = useParams();
    const [file, setFiles] = useState(null);
    const [fileName, setFileName] = useState('Get your payment screenshot...');
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
        setFileName(event.target.files[0].name);
        setFiles(event.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('paymentScreenshot', file);
        handleVerifyWorkshopScreenshot({ formData, workshopPaymentId: transactionId });
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
                    <div>
                        <label for='screenshot' className='flex flex-row w-full justify-center items-center'>
                            <div className="py-2 px-4 text-white border border-[#98dd78] hover:bg-[#98dd7836] duration-150">
                                Upload
                            </div>
                            <p className='text-base border border-[#ABB2BF] text-gray-400 p-2'>{fileName.length > 25 ? fileName.slice(0, isMobile ? 17 : 25) + "..." : fileName}</p>
                        </label>
                        <input type='file' id='screenshot' name='paymentScreenshot' className='hidden' onChange={handleChange} />
                    </div>

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