import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    // to retrieve an item from localStorage, call localStorage.getItem('someItem')
    // if that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key
        const item = window.localStorage.getItem(key);
        // parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        // save state
        setStoredValue(value);
        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setStoredValue];
}

export default useLocalStorage;
