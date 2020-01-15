import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (key, initialValue) => {
    const [mode, setMode] = useLocalStorage(key, initialValue); 

    useEffect(() => {
        if (mode === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [mode]);

    const toggleDarkMode = e => {
        e.preventDefault();
        
        return mode ? setMode(false) : setMode(true);
    };

    return [mode, setMode, toggleDarkMode]
};

export default useDarkMode;