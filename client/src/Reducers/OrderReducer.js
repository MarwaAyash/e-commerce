const initialState = {
        status: "idle",
        created_at: "",
        _id: "",
        customer_name: "",
        shipping_address: "",
        total_price: 0,
        total_quantity: 0,
        payment_information: {
        credit_card_number: "",
        expiration_date: "",
        name_on_credit_card: "",
        billing_address: "",
        },
        items: [
        {
            item_purchased_id: null,
            quantity: 0,
            price: 0,
            item: {
            name: "",
            price: "",
            body_location: "",
            category: "",
            _id: null,
            imageSrc: "...",
            numInStock: 0,
            companyId: null,
            },
        },
        ],
};
    
    export default function OrderReducer(state = initialState, action) {
        switch (action.type) {
        case "UPDATE_ORDER_NAME":
            return { ...state, customer_name: action.data };
        case "UPDATE_ORDER_SHIPPING_ADDRESS":
            return { ...state, shipping_address: action.data };
        case "UPDATE_ORDER_NAME_ON_CARD":
            return { ...state, name_on_credit_card: action.data };
        case "UPDATE_ORDER_CARD_NUMBER":
            return {
            ...state,
            payment_information: {
                ...state.payment_information,
                credit_card_number: action.data,
            },
            };
        case "UPDATE_ORDER_CARD_EXPIRATION_DATE":
            return {
            ...state,
            payment_information: {
                ...state.payment_information,
                expiration_date: action.data,
            },
            };
        case "UPDATE_ORDER_BILLING_ADDRESS":
            return {
            ...state,
            payment_information: {
                ...state.payment_information,
                billing_address: action.data,
            },
            };
        case "CREATE_ORDER":
            return {
            ...state,
            status: "idle",
            created_at: action.data.createdAt,
            _id: action.data.id,
            total_price: action.data.totalPrice,
            total_quantity: action.data.quantity,
            payment_information: { ...state.payment_information },
            items: action.data.items,
            };
        default: {
            return state;
        }
        }
}