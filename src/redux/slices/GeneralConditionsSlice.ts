import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
    collapsedSider: boolean;
    screenWidth: number;
};

const initialState: InitialStateProps = {
    collapsedSider: false,
    screenWidth: window.innerWidth,
};

export const generalConditionsSlice = createSlice({
    name: 'generalCondition',
    initialState,
    reducers: {
        setCollapsedSider(state, action) {
            state.collapsedSider = action.payload;
        },
        setScreenWidth(state, action) {
            state.screenWidth = action.payload;
        },
    },
});

export const { setCollapsedSider, setScreenWidth } = generalConditionsSlice.actions;
