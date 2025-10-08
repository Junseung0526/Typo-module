import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ text, setText }) => {
    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div className={styles.controlsContainer}>
            <label htmlFor="text-input" className={styles.label}>Your Text</label>
            <input
                id="text-input"
                type="text"
                className={styles.textInput}
                placeholder="Animate this..."
                value={text}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Controls;
