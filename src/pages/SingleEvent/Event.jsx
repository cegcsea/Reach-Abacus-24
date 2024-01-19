import React from 'react';
import Code from '../../assets/Devs/Code.jpg';

function Event() {
    return (
        <div className='px-5 flex flex-col justify-center items-center pb-10'>
            <div className="text-white font-medium mt-[68px] mb-[48px] text-[32px] self-start">
                <p>
                    <span className=" text-[#C778DD]">/</span>
                    <span>event_name</span>
                </p>
                <p className='text-base text-gray-400'>Tagline for the event goes here</p>
            </div>
            <div className='flex sm:flex-row flex-col justify-center items-center w-full gap-5'>
                <div className='w-full sm:w-2/5'>
                    <img src={Code} alt='Code' className='w-full object-contain' />
                </div>
                <div className='w-full sm:w-3/5 flex flex-col justify-between gap-5'>
                    <div className=" text-white font-medium text-[32px] flex items-center gap-2">
                        <div className="">
                            <span className="text-[#C778DD]">#</span>event
                        </div>
                        <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
                    <p className='text-white text-lg text-justify'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero assumenda nobis architecto, deserunt error ad, veniam perspiciatis molestiae magnam eum ratione quasi quae, earum voluptate sequi. Id sapiente atque quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati perferendis modi aut suscipit officiis doloribus tempore corrupti eos numquam in velit quos provident, dignissimos facere voluptates earum reprehenderit a eligendi.
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