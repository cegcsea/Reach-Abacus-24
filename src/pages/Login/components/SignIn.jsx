import React from 'react'

function SignIn() {
    return (
        <>
            <div className='text-2xl text-center'>
                <span className='text-[#C778DD]'>&#60;</span>
                &nbsp;Login&nbsp;
                <span className='text-[#C778DD]'>&#62;</span>
            </div>
            <form className='flex flex-col gap-5' action="#">
                <input type='email' name='email' placeholder='Email' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                    style={{ width: '100%', backgroundColor: "#30343a" }} required />

                <input type='password' name='passowrd' placeholder='Password' className='p-2 outline-none border border-[#ABB2BF] text-[18px]'
                    style={{ width: '100%', backgroundColor: "#30343a" }} required />
                    
                <div className="self-center">
                    <button type='submit' className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                        Login {"<"}~{">"}
                    </button>
                </div>
            </form>
        </>
    );
}

export default SignIn;