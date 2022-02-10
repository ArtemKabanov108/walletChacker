import { createSlice } from "@reduxjs/toolkit";
import {fetchConnectWallet, fetchDisConnectWallet} from "./asyncActionCreator";

const initialState = {
    wallet: {
        addressWallet: '',
        balance: 0
    },
    isLoading: false,
    error: '',
}

export const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchConnectWallet.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchConnectWallet.fulfilled.type]: (state, action) => {
            state.isLoading = false
            state.wallet = action.payload
            state.error = ''
        },
        [fetchConnectWallet.rejected.type]: (state, action) => {
            state.error = action.payload
        },
        [fetchDisConnectWallet.fulfilled.type]: (state, action) => {
            state.wallet = initialState.wallet
        },
    }
})
export const { error } = walletSlice.actions;
export default walletSlice.reducer;