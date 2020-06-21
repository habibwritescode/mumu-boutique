import { userActionTypes } from './user.types'

export const setCurrentUser = user => ({
    // user here is the userAuth object we got from our firebase.util or null as set in our App.js
    type: userActionTypes.SET_CURRENT_USER,  // let this type be the same as the one expected by our reducer
    payload: user
})