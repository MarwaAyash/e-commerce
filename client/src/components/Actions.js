// ITEMS -----------------------------------------
// Fetch items for the main page
export const requestAllItems = () => ({
    type: "REQUEST_ALL_ITEMS",
});

export const receiveAllItems = (items) => ({
    type: "RECEIVE_ALL_ITEMS",
    items,
});

export const receiveAllItemsError = () => ({
    type: "RECEIVE_ALL_ITEMS_ERROR",
});

  // Fetch a single item for the product page (Not used yet - might be used in the future)
export const requestSingleItem = () => ({
    type: "REQUEST_SINGLE_ITEM",
});

export const receiveSingleItem = (item) => ({
    type: "RECEIVE_SINGLE_ITEM",
    item,
});

  // ACCOUNTS -----------------------------------------
  // Fetch a single account for authentication
export const requestSingleAccount = () => ({
    type: "REQUEST_SINGLE_ACCOUNT",
});

export const receiveSingleAccount = (account) => ({
    type: "RECEIVE_SINGLE_ACCOUNT",
    account,
});

export const receiveaSingleAccountError = () => ({
    type: "RECEIVE_SINGLE_ACCOUNT_ERROR",
});

export const logoutFromAccount = () => ({
    type: "SET_BACK_TO_DEFAULT",
});

  // Create account
export const updateAccountName = (data) => ({
    type: "UPDATE_ACCOUNT_NAME",
    data,
});

export const updateAccountEmail = (data) => ({
    type: "UPDATE_ACCOUNT_EMAIL",
    data,
});

export const updateAccountPassword = (data) => ({
    type: "UPDATE_ACCOUNT_PASSWORD",
    data,
});

export const updateAccountAddressLine1 = (data) => ({
    type: "UPDATE_ACCOUNT_ADDRESS_LINE_1",
    data,
});

export const updateAccountAddressLine2 = (data) => ({
    type: "UPDATE_ACCOUNT_ADDRESS_LINE_2",
    data,
});


  // filter actions in the sidebar
export const receiveSingleItemError = () => ({
    type: "RECEIVE_SINGLE_ITEM_ERROR",
});

export const filterItems = (items) => ({
    type: "FILTER_ITEMS",
    items,
});

export const showAllItems = () => ({
    type: "SHOW_ALL_ITEMS",
});

  //Cart Actions
export const requestCart = () => ({
    type: "REQUEST_CART",
});

export const receiveCart = (cart) => ({
    type: "RECEIVE_CART",
    cart,
});

export const errorRequestCart = () => ({
    type: "ERROR_REQUEST_CART",
});

export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    item,
});

export const updateOrderName = (data) => ({
    type: "UPDATE_ORDER_NAME",
    data: data,
});

export const updateOrderShippingAddress = (data) => ({
    type: "UPDATE_ORDER_SHIPPING_ADDRESS",
    data: data,
});

export const updateOrderNameOnCard = (data) => ({
    type: "UPDATE_ORDER_NAME_ON_CARD",
    data: data,
});

export const updateOrderCardNumber = (data) => ({
    type: "UPDATE_ORDER_CARD_NUMBER",
    data: data,
});

export const updateOrderCardExpirationDate = (data) => ({
    type: "UPDATE_ORDER_CARD_EXPIRATION_DATE",
    data: data,
});

export const updateOrderBillingAddress = (data) => ({
    type: "UPDATE_ORDER_BILLING_ADDRESS",
    data: data,
});

export const createOrder = (data) => ({
    type: "CREATE_ORDER",
    data: data,
});