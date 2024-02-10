import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SlideFromTop = ({ children, delay = 0, duration = 0.2, className }) => {
    const ref = useRef();
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={mainControls}
            variants={{
                hidden: {
                    opacity: 0,
                    y: "-20%",
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration, delay },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export { SlideFromTop }