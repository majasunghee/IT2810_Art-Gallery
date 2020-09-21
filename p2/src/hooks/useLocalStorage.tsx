import {useState} from 'react';

function useLocalStorage(key:any, initialValue:any) {

  const [storedValue, setStoredValue] = useState(() => {
      const item = localStorage.getItem(key);
      return item ? item : initialValue;

    });

    const setValue = (value:any) => {
      try {
        const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, valueToStore);
      } catch(err) {
      console.error(err);
      }
      }
    return [storedValue, setValue];
    }


export {useLocalStorage};
