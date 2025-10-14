import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ url, name, onClose }) => {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    const siteName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>&times;</button>
                <h2 className={styles.title}>Open {siteName}</h2>
                <p className={styles.description}>
                    You've entered a special keyword. You can open the site in a new tab.
                </p>
                <a href={url} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                    Open {siteName} in new tab
                </a>
            </div>
        </div>
    );
};

export default Modal;
