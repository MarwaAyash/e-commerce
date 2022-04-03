const sendResponse = (res, status, data, message = "") => {
  return res.status(status).json({ status, data, message });
};

const getItemById = (itemsArray, id) => {
  let item;
  for (let i = 0; i < itemsArray.length; i++) {
    if (itemsArray[i]._id === Number(id)) {
      item = itemsArray[i];
      break;
    }
  }
  //null means no item is found
  if (!item) {
    return null;
  }

  return item;
};

const getIndexById = (array, id) => {
  let index;
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id === Number(id)) {
      index = i;
      break;
    }
  }
  if (index === undefined) {
    return null;
  }
  return index;
};

module.exports = { sendResponse, getItemById, getIndexById };
