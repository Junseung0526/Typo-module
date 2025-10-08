import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './TypographyAnimation.module.css';

const TypographyAnimation = ({ text }) => {
    const letterRefs = useRef([]);

    const STRETCH_DURATION = 0.6;
    const STRETCH_DELAY = 0.05;
    const STRETCH_SCALE = 2.5;
    const STRETCH_MARGIN = 0.15;

    useEffect(() => {
        gsap.killTweensOf(letterRefs.current);

        letterRefs.current.forEach((letter, index) => {
            if (letter) {
                gsap.set(letter, {
                    scaleY: STRETCH_SCALE,
                    marginBottom: STRETCH_MARGIN + 'em',
                });

                gsap.to(letter, {
                    scaleY: 1,
                    marginBottom: 0,
                    duration: STRETCH_DURATION,
                    ease: "elastic.out(1, 0.5)",
                    delay: index * STRETCH_DELAY,
                });
            }
        });
    }, [text]);

    const letters = text.toUpperCase().split('');

    return (
        <div className={styles.textOutput}>
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
