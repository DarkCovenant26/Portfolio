"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { Button, ButtonProps } from "./button";

export const MagneticButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...props }, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);

        const x = useMotionValue(0);
        const y = useMotionValue(0);

        const mouseXSpring = useSpring(x, {
            stiffness: 150,
            damping: 15,
            mass: 0.1,
        });
        const mouseYSpring = useSpring(y, {
            stiffness: 150,
            damping: 15,
            mass: 0.1,
        });

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } =
                buttonRef.current!.getBoundingClientRect();

            const xVal = clientX - (left + width / 2);
            const yVal = clientY - (top + height / 2);

            x.set(xVal);
            y.set(yVal);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        return (
            <motion.div
                style={{ x: mouseXSpring, y: mouseYSpring }}
                className="inline-block"
            >
                <Button
                    ref={buttonRef} // We need the ref here for bounding rect
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    {...props}
                >
                    {children}
                </Button>
            </motion.div>
        );
    }
);

MagneticButton.displayName = "MagneticButton";
