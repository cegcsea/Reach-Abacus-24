import React from 'react';
import { workshops } from '../../../constants';
import { Link } from 'react-router-dom';

function Content() {
    return (
        <div className='flex md:flex-row flex-col justify-center items-center gap-8 pb-10'>
            {workshops.map((workshop, index) => (
                <div className="border border-[#ABB2BF] md:w-1/2 lg:w-1/3 w-full flex-wrap" key={index}>
                    <div className="p-2">
                        <h2 className=" font-semibold text-slate-300 text-center">
                            <span className="text-[#C778DD]">#</span>
                            <span className="text-white text-xs">{workshop.title}</span>
                        </h2>
                    </div>
                    <Link to={workshop.to}>
                        <div className="flex gap-2 hover:bg-slate-800 transition-all cursor-pointer h-[15rem] border-t border-[#ABB2BF] flex-col justify-center items-center p-6 text-[#ABB2BF]">
                            <img src={workshop.image} alt={`Workshop`} className='w-full object-cover' />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Content;