import React, { useState } from 'react';
import styles from './Controls.module.css';

const Controls = ({ onTextSubmit, initialText }) => {
    const [inputValue, setInputValue] = useState(initialText);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onTextSubmit(inputValue);
        }
    };

    return (
        <div className={styles.controlsContainer}>
            <input
                id="text-input"
                type="text"
                className={styles.textInput}
                placeholder="Type something and press enter..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                autoComplete="off"
            />
        </div>
    );
};

export default Controls;