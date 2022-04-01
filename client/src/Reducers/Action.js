//Order Actions
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