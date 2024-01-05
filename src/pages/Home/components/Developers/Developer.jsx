import { DevCard } from "../../../../components";
import { developersData } from '../../../../constants';

const Developers = () => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
                <div className=" flex justify-between items-center gap-5">
                    <div data-aos="fade-down" className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                        <div className="">
                            <span className="text-[#C778DD]">#</span>developers
                        </div>
                        <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 my-12">
                    {developersData.map(({ img, langs, title, disc }) => {
                        return (
                            <>
                                <DevCard
                                    img={img}
                                    langs={langs}
                                    title={title}
                                    disc={disc}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Developers;