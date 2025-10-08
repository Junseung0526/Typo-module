import React, { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import TypographyAnimation from './components/TypographyAnimation';
import styles from './App.module.css';

function App() {
    const [text, setText] = useState('MOTION EFFECT');

    return (
        <div className={styles.appContainer}>
            <Header />
            <main className={styles.mainContent}>
                <div className={styles.controlsPanel}>
                    <Controls text={text} setText={setText} />
                </div>
                <div className={styles.displayPanel}>
                    <TypographyAnimation text={text} />
                </div>
            </main>
        </div>
    );
}

export default App;
