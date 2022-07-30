const saveInStorage = (key, id) => {
  try {
    const stateOfLocalStorage = JSON.stringify(id);
    localStorage.setItem(key, stateOfLocalStorage);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const loadFromStorage = key => {
  try {
    const stateOfLocalStorage = localStorage.getItem(key);
    return stateOfLocalStorage === null
      ? undefined
      : JSON.parse(stateOfLocalStorage);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const addToEmptyStorage = (key, id) => {
  let idArray = [id];
  try {
    const stringOfData = JSON.stringify(idArray);
    localStorage.setItem(key, stringOfData);
  } catch (err) {
    console.log(
      'You have an (ADD TO LOCAL STORAGE) error when add your first film: ',
      err.message
    );
  }
};

const addToStorage = (key, id) => {
  let idArray = [...JSON.parse(localStorage.getItem(key))];
  console.log('idArray: ', idArray);
  console.log('localStorage.getItem(key) ', localStorage.getItem(key));
  idArray.push(id);
  try {
    const stringOfData = JSON.stringify(idArray);
    localStorage.setItem(key, stringOfData);
  } catch (err) {
    console.log(
      'You have an (ADD TO LOCAL STORAGE) err, when add film id to array: ',
      err.message
    );
  }
};

const removeFromStorage = (key, id) => {
  let idArray = [...JSON.parse(localStorage.getItem(key))];
  const itemToRemove = idArray.indexOf(id);
  idArray.splice(itemToRemove, 1);
  try {
    const stringOfData = JSON.stringify(idArray);
    localStorage.setItem(key, stringOfData);
  } catch (err) {
    console.log(
      'You have a (WRITING TO LOCAL STORAGE) error after REMOVING: ',
      err.message
    );
  }
};
export {
  saveInStorage,
  loadFromStorage,
  addToEmptyStorage,
  addToStorage,
  removeFromStorage,
};
