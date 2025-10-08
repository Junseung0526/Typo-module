import React, { useState } from 'react';
import Controls from './components/Controls';
import TypographyAnimation from './components/TypographyAnimation';
import styles from './App.module.css';

function App() {
    const [animatedText, setAnimatedText] = useState('PRESS ENTER');

    return (
        <div className={styles.appContainer}>
            <TypographyAnimation text={animatedText} />
            <Controls setAnimatedText={setAnimatedText} initialText={animatedText} />
        </div>
    );
}

export default App;
