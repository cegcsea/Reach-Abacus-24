import React from 'react';
import image from '../../../assets/Reach/placement.svg';

function Session() {
    return (
        <div>
            <div className='p-5 sm:py-8 sm:px-10 flex gap-3 flex-col'>
                <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl text-white">
                    <span className="text-[#C778DD]">/</span>
                    <span className="text-white">session</span>
                </h1>
                <h4 className="text-gray-400 text-base">Session tagline goes here</h4>
            </div>
            <div className='px-2 sm:px-20 pb-10'>
                <div className="card w-full flex sm:flex-row flex-col border border-[#ABB2BF] bg-[#292d33]">
                    <div className='w-full sm:w-2/5 p-5 border border-r-0 border-b sm:border-r sm:border-y-0 border-l-0 flex justify-center items-center'>
                        <img src={image} alt="Event Image" className='w-3/4 object-cover' />
                    </div>
                    <div className="w-full sm:w-3/5 flex flex-col justify-between">
                        <div className='text-justify'>
                            <h2 className=' text-white font-medium text-2xl border border-b border-x-0 border-t-0 p-3'>
                                <span className='text-[#C778DD]'>&#60;</span>
                                &nbsp;Placement_Session&nbsp;
                                <span className='text-[#C778DD]'>&#62;</span>
                            </h2>
                            <p className='text-[#e2e3e4] p-3 text-base'>
                                <span className='font-bold text-lg'>Skill Refinement: </span><br />
                                Participate in focused sessions on interview techniques, enhancing your confidence and readiness for placement scenarios.
                            </p>
                            <p className='text-[#e2e3e4] p-3 text-base'>
                                <span className='font-bold text-lg'>Industry Insights: </span><br />
                                Stay informed about current hiring trends and industry expectations, positioning yourself effectively during placement processes.
                            </p>
                            <p className='text-[#e2e3e4] p-3 text-base'>
                                <span className='font-bold text-lg'>Mock Interviews: </span><br />
                                Engage in simulated interview experiences, receiving valuable feedback to optimize your performance in real-world placements.
                            </p>
                        </div>
                        <button className='m-3 mb-7 w-fit border border-[#C778DD] px-4 py-2 text-white duration-150 hover:bg-[#C778DD33] sm:self-start self-center'>
                            Register {'<'}~{'>'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Session;