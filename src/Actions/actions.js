require('es6-promise').polyfill();
require('isomorphic-fetch');

//User Login
export function fetchUserLoginFailed(bool) {
    return {
        type: 'USER_LOGIN_FAILURE',
        hasErrored: bool
    };
}
export function fetchUserLoginLoading(bool) {
    return {
        type: 'USER_LOGIN_LOADING',
        isLoading: bool
    };
}
export function fetchUserLoginSuccess(items) {
    return {
        type: 'USER_LOGIN_SUCCESS',
        items
    };
}

export function UserLoginFetchData(url, payload,Token) {
        return (dispatch) => {
        dispatch(fetchUserLoginLoading(true));
        fetch(url, {
            method: "POST",
            body: JSON.stringify(payload),
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(fetchUserLoginLoading(false));
                return response;
            })
            .then(response => {
                return response.json();
            })
            .then((eventData) => {
                dispatch(fetchUserLoginSuccess(eventData));
            })
            .catch((err) => {
                dispatch(fetchUserLoginFailed(true))
            }
            );
    };
  
}
