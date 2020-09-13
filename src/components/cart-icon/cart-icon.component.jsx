import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {
    CartIconContainer,
    CartShoppingIcon,
    ItemCountContainer
} from './cart-icon.styles';


function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <CartShoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)