import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    productCount: number;
}

const initialState: CounterState = {
    productCount: 0,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProductCount: (state, action) => {
            state.productCount = state.productCount + action.payload
        },
        deleteAllProduct: (state) => {
            state.productCount = 0;
        }
    }
});

export const { addProductCount, deleteAllProduct } = productSlice.actions;
export default productSlice.reducer;