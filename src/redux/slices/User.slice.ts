import { IUserReducerState } from '@/app/account/types';
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        isAuthenticated: false,
        user: {}
    },
    reducers: {
        storeUser(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.user = { ...action.payload.user }
        }
    }
});

export const { storeUser } = UserSlice.actions
export const UserReducer = UserSlice.reducer;
