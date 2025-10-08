import React, { useState } from 'react';
import Controls from './components/Controls';
import TypographyAnimation from './components/TypographyAnimation';
import styles from './App.module.css';

function App() {
    const [text, setText] = useState('SIMPLE');

    return (
        <div className={styles.appContainer}>
            <TypographyAnimation text={text} />
            <Controls text={text} setText={setText} />
        </div>
    );
}

export default App;