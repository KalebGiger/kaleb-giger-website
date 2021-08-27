
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

export function FadeInWhenVisible(props) {

    const { children, duration } = props;

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible"); //"visible"
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            // transition={{ duration: 0.5 }}
            initial="hidden"
            variants={{
                visible: { opacity: 1, y: 0, transition: { duration: duration ? duration : 1 } },
                hidden: { opacity: 0, y: 100 }
            }}
        >
            {children}
        </motion.div>
    );
}