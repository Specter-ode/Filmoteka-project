const saveInStorage = (key, value) => {
  try {
    const stateOfLocalStorage = JSON.stringify(value);
    localStorage.setItem(key, stateOfLocalStorage);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadFromStorage = key => {
  try {
    const stateOfLocalStorage = localStorage.getItem(key);
    console.log(stateOfLocalStorage);
    return stateOfLocalStorage === null
      ? undefined
      : JSON.parse(stateOfLocalStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
export { saveInStorage, loadFromStorage };

// const removeOnLocalStorage = key => {
//   try {
//     return localStorage.removeItem(key);
//   } catch (error) {
//     return null;
//   }
// };
