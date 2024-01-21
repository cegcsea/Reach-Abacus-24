import React, {useState, useEffect} from 'react';
import dots from '../../../assets/Events/sidebg.png';

function SignUpDetails() {
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

    return (
        <div className="flex justify-center items-center py-10 sm:px-0 px-4 bg-[#34363e] h-screen gap-5">
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
            <div className="querybox flex flex-col gap-7 w-full sm:w-2/5 border border-[#ABB2BF] border-solid border-white-500 text-white p-5 sm:p-10 bg-[#282C33]">
                <div className='text-2xl text-center'>
                    <span className='text-[#C778DD]'>&#60;</span>
                    &nbsp;Sign up&nbsp;
                    <span className='text-[#C778DD]'>&#62;</span>
                </div>
                <form className='flex flex-col gap-5' action="#">
                    <input type='email' name='name' placeholder='Name' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='email' name='college' placeholder='College' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='email' name='dept' placeholder='Department' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='email' name='year' placeholder='Year' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='email' name='mobile' placeholder='Mobile' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <input type='password' name='passowrd' placeholder='Password' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                        style={{ width: '100%', backgroundColor: "#30343a" }} required />

                    <div className='flex gap-10 text-gray-400'>
                        <p>Accommodation</p>
                        <div className='flex gap-5'>
                            <div className='flex gap-3'>
                                <input type='radio' name='accomodation' id='radio-yes' />
                                <label for='radio-yes'>Yes</label>
                            </div>
                            <div className='flex gap-3'>
                                <input type='radio' name='accomodation' id='radio-no' />
                                <label for='radio-no'>No</label>
                            </div>
                        </div>
                    </div>

                    <div className="self-center">
                        <button type='submit' className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                            Register {"<"}~{">"}
                        </button>
                    </div>
                </form>
            </div>
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center rotate-180">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
        </div>)
}

export default SignUpDetails;