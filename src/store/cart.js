const ADDITEM = 'cart/addItem';
const REMOVEITEM = 'cart/removeItem';
const INCREASEITEMCOUNT = 'cart/increaseItemCount';
const DECREASEITEMCOUNT = 'cart/decreaseItemCount';
const SETITEMCOUNT = 'cart/setItemCount';

export const addItem = (produceId) => {
    return {
        type: ADDITEM,
        produceId,
    };
};

export const removeItem = (itemId) => {
    return {
        type: REMOVEITEM,
        itemId,
    };
};

export const increaseItemCount = (itemId) => {
    return {
        type: INCREASEITEMCOUNT,
        itemId,
    };
};

export const decreaseItemCount = (itemId) => {
    return {
        type: DECREASEITEMCOUNT,
        itemId,
    };
};

export const setItemCount = (itemId, newCount) => {
    return {
        type: SETITEMCOUNT,
        itemId,
        newCount
    };
};

export default function cartReducer (state = {}, action) {
    switch (action.type) {
        case ADDITEM:
            const newState = {
                ...state,
                [action.produceId]: {
                    id: action.produceId,
                    count: 1
                }
            };
            return newState;
        case REMOVEITEM:
            const removeState = {...state};
            delete removeState[action.itemId];
            return removeState;
        case INCREASEITEMCOUNT:
            const increasedState = {...state};
            increasedState[action.itemId].count++;
            return increasedState;
        case DECREASEITEMCOUNT:
            const decreasedState = {...state};
            decreasedState[action.itemId].count--;
            return decreasedState;
        case SETITEMCOUNT:
            const setCountState = {...state};
            setCountState[action.itemId].count = action.newCount;
            return setCountState;
        default:
            return state;
    }
};