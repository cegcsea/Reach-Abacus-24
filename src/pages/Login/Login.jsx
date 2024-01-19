import React, { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import dots from '../../assets/Events/sidebg.png';

function Login() {
    const [isLogin, setLogin] = useState(true);

    return (
        <div className="flex justify-between items-center gap-5 py-10 bg-[#34363e] h-screen">
            <div className="w-[30%] flex justify-center items-center">
                <img src={dots} alt="dots-bg" />
            </div>
            <div className="querybox flex flex-col gap-7 w-2/5 border mt-7 border-[#ABB2BF] border-solid border-white-500 text-white p-10 bg-[#282C33]">
                <div className="flex justify-center items-center gap-6">
                    <div>
                        <button type="submit" className={`py-2 px-6 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${isLogin ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setLogin(true)}>
                            Login {"<"}~{">"}
                        </button>
                    </div>
                    <div>
                        <button type="submit" className={`py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${!isLogin ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setLogin(false)}>
                            Sign up {"<"}~{">"}
                        </button>
                    </div>
                </div>
                {isLogin && <SignIn />}
                {!isLogin && <SignUp />}
            </div>
            <div className="w-[30%] flex justify-center items-center rotate-180">
                <img src={dots} alt="dots-bg" />
            </div>
        </div>
    );
}

export default Login