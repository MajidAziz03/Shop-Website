import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface USER_STATE {
    isLoading: boolean;
    user: {
        id: number;
        token: string;
    }
    isError: boolean;
}

const initialState: USER_STATE = {
    isLoading: false,
    user: {
        id: 0,
        token: ""
    },
    isError: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userSuccess : (state, action: PayloadAction<USER_STATE>) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        userFetching : (state) => {
            state.isLoading = true;
        },
        userFailure : (state) => {
            state.isError = true;
        },
        userLogout : (state) => {
            state.user = {};
        }
    },
})

export const {isFetching , userSuccess, userFailure,userLogout, userFetching} = userSlice.actions

export default userSlice.reducer