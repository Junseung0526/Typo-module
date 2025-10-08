import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ text, setText }) => {
    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.controlsContainer}>
            <input
                id="text-input"
                type="text"
                className={styles.textInput}
                placeholder="Type something..."
                value={text}
                onChange={handleInputChange}
                autoComplete="off"
            />
        </div>
    );
};

export default Controls;