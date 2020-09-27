// custom hook, slightly changed from:
// https://gist.github.com/gragland/2970ae543df237a07be1dbbf810f23fe

import {useState} from 'react';

function useSessionStorage(key:any, value:any) {
//gets the parsed version of value from session storage
  const [storedValue, setStoredValue] = useState(() => {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    });

//sets the stringified version of value in session storage
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
