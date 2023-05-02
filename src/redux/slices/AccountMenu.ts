import { createSlice } from "@reduxjs/toolkit";


const accountMenuSlice = createSlice({
    name: 'account_menu',
    initialState: { isOpened: false },
    reducers: {
        toggleAccountMenu(state) {
            state.isOpened = !state.isOpened;
        }
    }
});


export const { toggleAccountMenu } = accountMenuSlice.actions;
export const AccountMenuReducer = accountMenuSlice.reducer;