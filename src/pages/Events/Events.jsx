import React, { useContext, useEffect, useState } from 'react';
import { events } from '../../constants';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import { useNavigate } from 'react-router-dom';

import dots from '../../assets/Events/sidebg.png';

function Events() {
    const { isLoading } = useContext(LoaderContext);
    const navigate = useNavigate();
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

    return (
        <div className='px-5 flex flex-col justify-center items-center pb-10 bg-[#34363e]'>
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px] self-start">
                <span className=" text-[#C778DD]">/</span>
                <span>events</span>
            </div>
            <div className="cards flex justify-center gap-10">
                <div className='w-full sm:w-4/5 flex flex-col gap-10'>
                    {events.map(event => {
                        let { title, body, image, to } = event;
                        return (
                            <div className="card w-full flex sm:flex-row flex-col border border-[#ABB2BF]">
                                <div className='w-full sm:w-2/5 p-5 border border-r-0 border-b sm:border-r sm:border-y-0 border-l-0'>
                                    <img src={image} alt="Event Image" className='w-full object-cover' />
                                </div>
                                <div className="w-full sm:w-3/5 flex flex-col justify-between">
                                    <div>
                                        <h2 className=' text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3'>
                                            <span className='text-[#C778DD]'>&#60;</span>
                                            &nbsp;{title}&nbsp;
                                            <span className='text-[#C778DD]'>&#62;</span>
                                        </h2>
                                        <p className=' text-[#e2e3e4] p-3'>
                                            {body.slice(0, 280)}...&nbsp;
                                            <span className='text-[#ABB2BF] cursor-pointer' onClick={() => navigate(`/events/${to}`)}>Read More</span>
                                        </p>
                                    </div>
                                    <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'
                                        onClick={() => navigate(`/events/${to}`)}>
                                        Read More {'<'}~{'>'}
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {!isMobile && (
                    <div className='w-1/5'>
                        <img src={dots} alt='BG' />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Events;