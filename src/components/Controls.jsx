import React, { useState } from 'react';
import styles from './Controls.module.css';

const Controls = ({ setAnimatedText, initialText }) => {
    const [inputValue, setInputValue] = useState(initialText);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // 폼 제출 등 기본 동작 방지
            setAnimatedText(inputValue);
        }
    };

    return (
        <div className={styles.controlsContainer}>
            <input
                id="text-input"
                type="text"
                className={styles.textInput}
                placeholder="Type something and press Enter..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
        </div>
    );
};

export default Controls;
