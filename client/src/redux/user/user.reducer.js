import UserActionTypes from './user.types';

const INITIAL_STATE = {
    currentUser: null,
    error: null
}

const userReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
            return {
                ...prevState,
                currentUser: action.payload,
                error: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...prevState,
                currentUser: null,
                error: null
            }
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...prevState,
                error: action.payload
            }
        default:
            return prevState;
    }
}

export default userReducer