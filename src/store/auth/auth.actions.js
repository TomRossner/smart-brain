import { login } from "../../http/requests";
import { AUTH_ACTION_TYPES } from "./auth.types";
import { createAction } from "../utils";

export const setUser = (user) => {
    return createAction(AUTH_ACTION_TYPES.SET_USER, user);
}
export const setIsAuthenticated = (bool) => {
    return createAction(AUTH_ACTION_TYPES.SET_IS_AUTHENTICATED, bool);
}
export const fetchUserStart = () => {
    return createAction(AUTH_ACTION_TYPES.FETCH_USER_START);
}
export const fetchUserSuccess = (user) => {
    return createAction(AUTH_ACTION_TYPES.FETCH_USER_SUCCESS, user);
}
export const fetchUserFailed = (error) => {
    return createAction(AUTH_ACTION_TYPES.FETCH_USER_FAILED, error);
}
export const logout = () => {
    return createAction(AUTH_ACTION_TYPES.LOGOUT);
}



export const fetchUserAsync = (credentials) => async (dispatch) => {
    dispatch(fetchUserStart());

    try {
        const user = await login(credentials);
        dispatch(fetchUserSuccess(user));
    } catch (error) {
        dispatch(fetchUserFailed(error));
    }
} 