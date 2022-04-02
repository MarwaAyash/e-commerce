export const addItem = (item) => ({
    type: "ADD_ITEM",
    item,
});

export const removeItem = (item) => ({
    type: "REMOVE_ITEM",
    item,
});

export const changeCartQuantityItem = (item, quantity) => ({
    type: "CHANGE_QUANTITY",
    item,
    quantity,
});

export const changeCartItemTotalPrice = (item, totalPrice) => ({
    type: "CHANGE_ITEM_PRICE_TOTAL",
    item,
    totalPrice,
});