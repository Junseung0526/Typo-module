import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './TypographyAnimation.module.css';
import {random} from "gsap/gsap-core";

const TypographyAnimation = ({ text }) => {
    const component = useRef(null);
    const letterRefs = useRef([]);
    const isFirstRender = useRef(true);

    useLayoutEffect(() => {
        if (text.length === 0) return;

        const runEnterAnimation = () => {
            let ctx = gsap.context(() => {
                const tl = gsap.timeline();
                letterRefs.current.forEach((letter, index) => {
                    if (letter) {
                        tl.fromTo(letter, {
                            scaleY: 1.5,
                            scaleX: 1.5,
                            rotation: -15,
                            opacity: 0,
                            marginBottom: '0.15em'
                        }, {
                            scaleY: 1,
                            scaleX: 1,
                            rotation: random(-10, 10),
                            opacity: 1,
                            marginBottom: 0,
                            duration: 0.8,
                            ease: "elastic.out(1, 0.6)",
                        }, index * 0.05);
                    }
                });
            }, component);
            return () => ctx.revert();
        };

        if (isFirstRender.current) {
            isFirstRender.current = false;
            runEnterAnimation();
            return;
        }

        let exitCtx = gsap.context(() => {
            gsap.to(letterRefs.current, {
                scale: 0,
                opacity: 0,
                duration: 0.2,
                stagger: 0.03,
                ease: 'power2.in'
            });
        }, component);

        runEnterAnimation();

        return () => {
            exitCtx.revert();
        };

    }, [text]);

    if (text.length === 0) {
        return (
            <div className={styles.textOutput}>
                <span className={styles.placeholder}>Start typing...</span>
            </div>
        );
    }

    const letters = text.toUpperCase().split('');

    return (
        <div className={styles.textOutput} ref={component}>
            {letters.map((char, index) => {
                if (char === ' ') {
                    return <span key={index} className={styles.space}>&nbsp;</span>;
                }
                return (
                    <span
                        key={index}
                        ref={el => letterRefs.current[index] = el}
                        className={styles.letterBox}
                    >
                        {char}
                    </span>
                );
            })}
        </div>
    );
};

export default TypographyAnimation;