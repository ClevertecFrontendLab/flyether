import { createSlice } from '@reduxjs/toolkit';

type InitialStateProps = {
    collapsedSider: boolean;
    searchValue: undefined | string;
};

const initialState: InitialStateProps = {
    collapsedSider: false,
    searchValue: undefined,
};

export const generalConditionsSlice = createSlice({
    name: 'generalCondition',
    initialState,
    reducers: {
        setCollapsedSider(state, action) {
            state.collapsedSider = action.payload;
        },

        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const { setCollapsedSider } = generalConditionsSlice.actions;
