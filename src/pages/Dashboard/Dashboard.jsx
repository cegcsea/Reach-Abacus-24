import React, { useContext, useState } from 'react';
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';
import Events from './components/Events';
import Workshops from './components/Workshops';

function Dashboard() {
    const { isLoading } = useContext(LoaderContext);
    const [isEvents, setIsEvents] = useState(true);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-[#34363e] gap-5">
            <div className="querybox flex flex-col gap-7 w-full sm:w-3/5 border border-[#ABB2BF] border-solid border-white-500 text-white p-5 sm:p-10 bg-[#282C33]">
                <div className='text-2xl text-center'>
                    <span className='text-[#C778DD]'>&#60;</span>
                    &nbsp;Dashboard&nbsp;
                    <span className='text-[#C778DD]'>&#62;</span>
                    <p className='text-gray-400 mt-3 text-sm'>It's always good to keep track of our attrocities everyday!</p>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <div>
                        <button type="submit" className={`py-2 px-6 sm:text-base text-xs text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${isEvents ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setIsEvents(true)}>
                            Events {"<"}~{">"}
                        </button>
                    </div>
                    <div>
                        <button type="submit" className={`py-2 px-4 sm:text-base text-xs text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${!isEvents ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setIsEvents(false)}>
                            Workshops {"<"}~{">"}
                        </button>
                    </div>
                </div>
                {isEvents && <Events />}
                {!isEvents && <Workshops />}
            </div>
        </div>
    );
}

export default Dashboard;