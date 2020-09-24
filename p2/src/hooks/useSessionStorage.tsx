import {useState} from 'react';

function useSessionStorage(key:any, value:any) {

  const [storedValue, setStoredValue] = useState(() => {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    });

    const setValue = (value:any) => {
      try {
        const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        sessionStorage.setItem(key, JSON.stringify(valueToStore));

      } catch(err) {
      console.error(err);
      }
      }
    return [storedValue, setValue];

    }
export {useSessionStorage};
