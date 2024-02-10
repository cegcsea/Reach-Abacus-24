import { DevCard } from "../../../../components";
import { developersData } from '../../../../constants';
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Developers = ({ isMobile }) => {
    return (
        <>
            <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
                <div className=" flex justify-between items-center gap-5">
                    <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                        <div className="">
                            <span className="text-[#C778DD]">#</span>developers
                        </div>
                        <div className="line w-2/3 h-px bg-[#C778DD]"></div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between gap-4 my-12">
                    <Swiper
                        slidesPerView={isMobile ? 1 : 3}
                        centeredSlides={true}
                        navigation={true}
                        loop="true"
                        spaceBetween={30}
                        modules={[Navigation]}>
                        {developersData.map(({ img, title, disc }) => {
                            return (
                                <SwiperSlide>
                                    <DevCard img={img} title={title} disc={disc} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default Developers;