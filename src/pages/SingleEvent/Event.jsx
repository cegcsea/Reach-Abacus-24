import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { events } from '../../constants';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

function Event() {
    const { isLoading } = useContext(LoaderContext);
    const { id } = useParams();
    
    if (isLoading) {
        return <Loader />;
    }
    
    const selectedEvent = events.find((event) => event.to === id);

    return (
        <div className='px-5 flex flex-col justify-center items-center pb-10 bg-[#34363e]'>
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px] self-start">
                <p>
                    <span className=" text-[#C778DD]">/</span>
                    <span>{selectedEvent.title}</span>
                </p>
                <p className='text-base text-gray-400'>Tagline for the event goes here</p>
            </div>
            <div className='flex sm:flex-row flex-col justify-center items-center w-full gap-5'>
                <div className='w-full sm:w-2/5 flex justify-center items-center'>
                    <img src={selectedEvent.image} alt='Code' className='w-full sm:w-3/4 object-contain rounded-[50%]' />
                </div>
                <div className='w-full sm:w-3/5 flex flex-col justify-between gap-5'>
                    <div className=" text-white font-medium text-[32px] flex items-center gap-2">
                        <div className="">
                            <span className="text-[#C778DD]">#</span>event
                        </div>
                        <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
                    <p className='text-white text-lg text-justify'>
                        {selectedEvent.body}
                    </p>
                    <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'>
                        Register {'<'}~{'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Event;