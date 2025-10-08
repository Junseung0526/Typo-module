import React, { useState } from 'react';
import Controls from './components/Controls';
import TypographyAnimation from './components/TypographyAnimation';
import Modal from './components/Modal';
import styles from './App.module.css';

function App() {
    const [animatedText, setAnimatedText] = useState('PRESS ENTER');
    const [modalContent, setModalContent] = useState({ isOpen: false, url: '', name: '' });

    const handleTextSubmit = (submittedText) => {
        const text = submittedText.toLowerCase().trim();
        const sites = {
            google: 'https://www.google.com',
            naver: 'https://www.naver.com',
            github: 'https://www.github.com'
        };

        if (sites[text]) {
            setModalContent({ isOpen: true, url: sites[text], name: text });
        } else {
            setAnimatedText(submittedText);
        }
    };

    const closeModal = () => {
        setModalContent({ isOpen: false, url: '', name: '' });
    };

    return (
        <div className={styles.appContainer}>
            <TypographyAnimation text={animatedText} />
            <Controls onTextSubmit={handleTextSubmit} initialText={animatedText} />
            {modalContent.isOpen && (
                <Modal
                    url={modalContent.url}
                    name={modalContent.name}
                    onClose={closeModal}
                />
            )}
        </div>
    );
}

export default App;