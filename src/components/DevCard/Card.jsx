import React from 'react';

const DevCard = ({ img, title, disc }) => {
    return (
        <>
            <div className="border mx-auto w-[90%] md:w-[48%] lg:w-[30%] border-[#ABB2BF] p-0">
                <div className="">
                    <img className=" w-full" src={img} alt="" />
                </div>
                <div className="flex flex-wrap p-2 border-y border-[#ABB2BF]">
                    <p className="p-2 text-[#ABB2BF]">{disc}</p>
                </div>
                <div className="p-4 flex flex-col gap-4">
                    <h2 className="text-[#FFFFFF] text-2xl font-medium">{title}</h2>
                    <div className="">
                        <button className=" py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                            LinkedIn {"<"}~{">"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DevCard;
