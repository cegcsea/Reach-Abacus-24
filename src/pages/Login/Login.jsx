import React, { useState, useEffect, useContext } from "react";
import { LoaderContext } from '../../context/LoaderContext';
import { Loader } from '../../components';

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import dots from '../../assets/Events/sidebg.png';

function Login() {
    const { isLoading } = useContext(LoaderContext);
    const [isLogin, setLogin] = useState(true);
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

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="flex justify-between items-center gap-5 sm:px-0 px-4 py-10 bg-[#34363e] h-screen">
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
            <div className="querybox flex flex-col gap-7 w-full sm:w-2/5 border sm:mt-7 border-[#ABB2BF] border-solid border-white-500 text-white p-5 sm:p-10 bg-[#282C33]">
                <div className="flex justify-center items-center gap-6">
                    <div>
                        <button type="submit" className={`py-2 px-6 sm:text-base text-xs text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${isLogin ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setLogin(true)}>
                            Login {"<"}~{">"}
                        </button>
                    </div>
                    <div>
                        <button type="submit" className={`py-2 px-4 sm:text-base text-xs text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150
                            ${!isLogin ? "bg-[#C778DD33]" : "bg-transparent"}`} onClick={() => setLogin(false)}>
                            Sign up {"<"}~{">"}
                        </button>
                    </div>
                </div>
                {isLogin && <SignIn />}
                {!isLogin && <SignUp />}
            </div>
            {!isMobile && (
                <div className="w-[30%] flex justify-center items-center rotate-180">
                    <img src={dots} alt="dots-bg" />
                </div>
            )}
        </div>
    );
}

export default Login