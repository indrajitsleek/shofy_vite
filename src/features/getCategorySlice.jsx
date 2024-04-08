import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getCategory = createAsyncThunk('categories', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const result = response.json();
    return result;
});

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        name: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [getCategory.pending]: (state) => {
            state.loading = true;
        },
        [getCategory.fulfilled]: (state, action) => {
            state.loading = false;
            state.name = action.payload;
        },
        [getCategory.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})