import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { workshops, sessions } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

const Workshops = () => {
    const navaigate = useNavigate();
    const { userWorkshops, session } = useContext(AuthContext);

    const eventNames = userWorkshops.map(event => event.workshopId);
    const filteredEvents = workshops.filter(event => eventNames.includes(event.code));
    const notIncludedEvents = workshops.filter(event => !eventNames.includes(event.code));

    const registeredSession = session.some((event) => event.workshopId === 3);

    return (
        <div className='flex flex-col gap-5'>
            {filteredEvents.map(event => {
                let { title, content, image, to } = event;
                return (
                    <div className="card w-full flex md:flex-row flex-col border border-[#ABB2BF]">
                        <div className='w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center'>
                            <img src={image} alt="Event Image" className='w-full object-cover' />
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
                            <div>
                                <h2 className=' text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3'>
                                    <span className='text-[#C778DD]'>&#60;</span>
                                    &nbsp;{title}&nbsp;
                                    <span className='text-[#C778DD]'>&#62;</span>
                                </h2>
                                <p className=' text-[#e2e3e4] p-3 text-justify'>
                                    {content.slice(0, 150)}...&nbsp;<span className='text-[#ABB2BF]'>
                                        <Link to={`/workshops/${to}`}>
                                            Read More
                                        </Link>
                                    </span>
                                </p>
                                <p className='p-2 m-3 text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                                    <Link to={`/workshops/${to}`}>
                                        <span className="text-yellow-300">/*</span>
                                        &nbsp;Check your payment status!&nbsp;
                                        <span className="text-yellow-300">*/</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            {notIncludedEvents.map(event => {
                let { title, content, image, to } = event;
                return (
                    <div className="card w-full flex md:flex-row flex-col border border-[#ABB2BF]">
                        <div className='w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center'>
                            <img src={image} alt="Event Image" className='w-full object-cover' />
                        </div>
                        <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
                            <div>
                                <h2 className=' text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3'>
                                    <span className='text-[#C778DD]'>&#60;</span>
                                    &nbsp;{title}&nbsp;
                                    <span className='text-[#C778DD]'>&#62;</span>
                                </h2>
                                <p className=' text-[#e2e3e4] p-3 text-justify'>
                                    {content.slice(0, 150)}...&nbsp;<span className='text-[#ABB2BF]'>
                                        <Link to={`/workshops/${to}`}>
                                            Read More
                                        </Link>
                                    </span>
                                </p>
                                <p className='p-2 m-3 text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                                    <span className="text-red-400">/*</span>
                                    &nbsp;Not Registered for this workshop!&nbsp;
                                    <span className="text-red-400">*/</span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="card w-full flex md:flex-row flex-col border border-[#ABB2BF]">
                <div className='w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0 flex justify-center items-center'>
                    <img src={sessions[0].image} alt="Event Image" className='w-full object-cover' />
                </div>
                <div className="w-full md:w-3/5 flex flex-col justify-center items-center">
                    <div>
                        <h2 className=' text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3'>
                            <span className='text-[#C778DD]'>&#60;</span>
                            &nbsp;{sessions[0].title}&nbsp;
                            <span className='text-[#C778DD]'>&#62;</span>
                        </h2>
                        <p className=' text-[#e2e3e4] p-3 text-justify'>
                            {sessions[0].content.slice(0, 150)}...&nbsp;<span className='text-[#ABB2BF]'>
                                <Link to={`/workshops`}>
                                    Read More
                                </Link>
                            </span>
                        </p>
                        <p className='p-2 m-3 text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                            {registeredSession ? (
                                <>
                                    <span className="text-lime-400">/*</span>
                                    &nbsp;Registered for this session!&nbsp;
                                    <span className="text-lime-400">*/</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-red-400">/*</span>
                                    & nbsp;Not Registered for this session!&nbsp;
                                    <span className="text-red-400">*/</span>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end mt-5">
                <button className={`py-3 px-4 w-fit md:text-base text-xs text-white border border-blue-600 hover:bg-blue-700/40 duration-150`}
                    onClick={() => navaigate('/workshops')}>
                    Explore Workshops {"<"}~{">"}
                </button>
            </div>
        </div>
    )
}

export default Workshops;