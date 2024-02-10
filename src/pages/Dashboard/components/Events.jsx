import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { events } from "../../../constants";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
    const navaigate = useNavigate();
    const { userEvents } = useContext(AuthContext);

    const eventNames = userEvents.map(event => event.eventName);

    const filteredEvents = events.filter(event => eventNames.includes(event.title));
    const notIncludedEvents = events.filter(event => !eventNames.includes(event.title));

    return (
        <div className='flex flex-col gap-5'>
            {filteredEvents.map(event => {
                let { title, body, image, to } = event;
                return (
                    <div className="card w-full flex md:flex-row flex-col border border-[#ABB2BF]">
                        <div className='w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0'>
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
                                    {body.slice(0, 150)}...&nbsp;<span className='text-[#ABB2BF]'>
                                        <Link to={`/events/${to}`}>
                                            Read More
                                        </Link>
                                    </span>
                                </p>
                                <p className='p-2 m-3 text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                                    <span className="text-lime-400">/*</span>
                                    &nbsp;Registered for this event!&nbsp;
                                    <span className="text-lime-400">*/</span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            {notIncludedEvents.map(event => {
                let { title, body, image, to } = event;
                return (
                    <div className="card w-full flex md:flex-row flex-col border border-[#ABB2BF]">
                        <div className='w-full md:w-2/5 p-5 border border-r-0 border-b md:border-r md:border-y-0 border-l-0'>
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
                                    {body.slice(0, 150)}...&nbsp;<span className='text-[#ABB2BF]'>
                                        <Link to={`/events/${to}`}>
                                            Read More
                                        </Link>
                                    </span>
                                </p>
                                <p className='p-2 m-3 text-center w-fit text-white text-sm md:text-lg font-semibold text-gray border rounded-lg border-gray-700 bg-slate-800'>
                                    <span className="text-red-400">/*</span>
                                    &nbsp;Not Registered for this event!&nbsp;
                                    <span className="text-red-400">*/</span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="w-full flex justify-end mt-5">
                <button className={`py-3 px-4 w-fit md:text-base text-xs text-white border border-blue-600 hover:bg-blue-700/40 duration-150`}
                onClick={()=>navaigate('/events')}>
                    Explore Events {"<"}~{">"}
                </button>
            </div>
        </div>
    )
}

export default Events;