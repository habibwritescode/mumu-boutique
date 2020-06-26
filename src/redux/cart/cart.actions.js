import cartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
    // we are not using payload because we don't need it. We are only toggling between true or false
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});