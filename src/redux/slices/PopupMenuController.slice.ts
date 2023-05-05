import { createSlice } from "@reduxjs/toolkit";
import { IPopupMenuControllerState } from "../types";

const popupMenuController = createSlice({
    name: 'popupMenuController',
    initialState: {
        navbarUserMenu: false,
        accountPageMenu: false
    } as IPopupMenuControllerState,
    reducers: {
        toggleNavbarUserMenu(state) {
            state.navbarUserMenu = !state.navbarUserMenu;



        },
        toggleAccountPageMenu(state) {
            state.accountPageMenu = !state.accountPageMenu;
            state.navbarUserMenu = false;
        }
    }
});


export const { toggleNavbarUserMenu, toggleAccountPageMenu } = popupMenuController.actions;
export const PopupMenuControllerReducer = popupMenuController.reducer;
