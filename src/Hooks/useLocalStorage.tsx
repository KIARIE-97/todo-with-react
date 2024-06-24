import { useState} from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    // this function will be called when the component is rendered
    try {
      const item = window.localStorage.getItem(key); // get the value from local storage
      return item ? JSON.parse(item) : initialValue; // if item is not null, parse the item, else return the initial value
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

// this function will be called when the value is set
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value)); // set the value to local storage
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default useLocalStorage;