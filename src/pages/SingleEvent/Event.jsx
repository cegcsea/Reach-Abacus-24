import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { events } from '../../constants';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import { AuthContext } from '../../context/AuthContext';

import { FaClipboard, FaClock } from 'react-icons/fa';
import { GiWatch } from 'react-icons/gi';
import { FaLocationDot } from 'react-icons/fa6';

const Card = ({ item, index }) => {
    return (
        <div className='w-full sm:w-1/2 flex flex-col gap-3 justify-center items-center'>
            <p className='text-4xl text-white'>{item.title}</p>
            <div className='flex flex-col text-white justify-center items-center w-full gap-3'>
                <div className='flex flex-row gap-5  w-full border-gray-900/50 border px-5 py-4 md:py-2 bg-black/40 rounded-lg shadow-md'>
                    <div className='flex justify-center items-center text-3xl'>
                        <p><FaClipboard /></p>
                    </div>
                    <div className='flex flex-row ' key={index}>
                        <p className='flex flex-col'>
                            <p className='font-novaSquare'>{item.content}</p>
                            <p className='text-sm text-white/70 font-subtitle'>What to expect?</p>
                        </p>
                    </div>
                </div>
                <div className='flex flex-row gap-5  w-full border-gray-900/50 border px-5 py-4 md:py-2 bg-black/40 rounded-lg shadow-md'>
                    <div className='flex justify-center items-center text-3xl'>
                        <p><GiWatch /></p>
                    </div>
                    <div className='flex flex-row ' key={index}>
                        <p className='flex flex-col'>
                            <p className='font-novaSquare'>{item.duration}</p>
                            <p className='text-sm text-white/70 font-subtitle'>Duration</p>
                        </p>
                    </div>
                </div>
                <div className='flex flex-row gap-5  w-full border-gray-900/50 border px-5 py-4 md:py-2 bg-black/40 rounded-lg shadow-md'>
                    <div className='flex justify-center items-center text-3xl'>
                        <p><FaLocationDot /></p>
                    </div>
                    <div className='flex flex-row ' key={index}>
                        <p className='flex flex-col'>
                            <p className='font-novaSquare'>{item.venue}</p>
                            <p className='text-sm text-white/70 font-subtitle'>Location</p>
                        </p>
                    </div>
                </div>
                <div className='flex flex-row gap-5  w-full border-gray-900/50 border px-5 py-4 md:py-2 bg-black/40 rounded-lg shadow-md'>
                    <div className='flex justify-center items-center text-3xl'>
                        <p><FaClock /></p>
                    </div>
                    <div className='flex flex-row ' key={index}>
                        <p className='flex flex-col'>
                            <p className='font-novaSquare'>{item.time}</p>
                            <p className='text-sm text-white/70 font-subtitle'>Time</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Event() {
    const { isLoading } = useContext(LoaderContext);
    const { handleEventRegister, auth, userEvents, user } = useContext(AuthContext);
    const [isDesc, setIsDesc] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();

    if (isLoading) {
        return <Loader />;
    }

    const selectedEvent = events.find((event) => event.to === id);
    const isRegistered = userEvents.some((event) => event.eventName === selectedEvent.title);

    const handleRegister = () => {
        handleEventRegister({ eventId: selectedEvent.code });
    }

    return (
        <div className='px-5 flex flex-col justify-center items-center pb-10 bg-[#34363e]'>
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px] self-start">
                <p>
                    <span className=" text-[#C778DD]">/</span>
                    <span>{selectedEvent.title}</span>
                </p>
                {/* <p className='text-base text-gray-400'>Tagline for the event goes here</p> */}
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
                    {auth && (
                        <div className='flex justify-center items-center'>
                            <button className='m-3 w-fit border border-[#d6dd78] px-4 py-2 text-white duration-150 hover:bg-[#ddd67833]'
                                onClick={() => setIsDesc(true)}>
                                Description{'<'}~{'>'}
                            </button>
                            <button className='m-3 w-[8.5rem] border border-[#d6dd78] px-4 py-2 text-white duration-150 hover:bg-[#ddd67833]'
                                onClick={() => setIsDesc(false)}>
                                Rounds{'<'}~{'>'}
                            </button>
                        </div>
                    )}
                    <div className='flex flex-col gap-5'>
                        {isDesc ? (
                            <>
                                <p className='text-white text-lg text-justify'>
                                    {selectedEvent.body}
                                </p>
                                <p className='flex text-2xl text-white gap-2'>
                                    <h3 className='font-light'>Team:</h3>
                                    <h3 className='text-yellow-400 font-base'>{selectedEvent.team}</h3>
                                </p>
                                <p className='flex text-2xl text-white gap-2'>
                                    <h3 className='font-light'>Prize Pool:</h3>
                                    <h3 className='text-yellow-400 font-base'>{selectedEvent.prize}</h3>
                                </p>
                                {auth && (
                                    <p className='flex text-2xl text-white gap-2'>
                                        <h3 className='font-light'>Date:</h3>
                                        {user.hostCollege === 'Government College of Technology, Coimbatore' ? (
                                            <h3 className='text-yellow-400 font-base'>{selectedEvent.gctDate}</h3>
                                        ) : (
                                            <h3 className='text-yellow-400 font-base'>{selectedEvent.psnaDate}</h3>
                                        )}
                                    </p>
                                )}
                            </>
                        ) : (
                            <div className='flex sm:flex-row flex-col justify-center items-center overflow-hidden gap-3'>
                                {selectedEvent.rounds.map((item, index) => (
                                    <Card item={item} index={index} />
                                ))}
                            </div>
                        )}
                    </div>

                    {(auth && !isRegistered) && (
                        <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'
                            onClick={handleRegister}>
                            Register{'<'}~{'>'}
                        </button>
                    )}
                    {!auth && (
                        <button className='m-3 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33]'
                            onClick={() => navigate('/login')}>
                            Login to Register{'<'}~{'>'}
                        </button>
                    )}
                    {isRegistered && (
                        <p className='p-2 w-full sm:w-fit flex justify-center items-center text-white text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                            <span className="text-lime-400">/*</span>
                            &nbsp;Already registered for this event!&nbsp;
                            <span className="text-lime-400">*/</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Event;