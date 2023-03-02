import { useEffect, useState } from "react";

// key = JWT token
function useLocalState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);

    return localStorageValue !== null // Check if there is any value in localStorage
      ? JSON.parse(localStorageValue) // Parse because localStorage stores string values
      : defaultValue; // If null set defaultValue
  });

  //console.log(`localStorageValue ${key} is: ${value}`);

  useEffect(() => {
    localStorage.setItem(key.JSON.stringify(value));
    // console.log(`updating local storage ${key} to: ${value}`);
  }, [key, value]);

  return [value, setValue];
}

export { useLocalState }; // allows usage globally in application
