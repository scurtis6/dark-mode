import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    // to retrieve an item from localStorage, call localStorage.getItem('someItem')
    // if that item doesn't exist, it will return undefined
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key
        const item = window.localStorage.getItem(key);
        // parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue];
}

