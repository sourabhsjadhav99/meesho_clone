// // dataSlice.js
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// // Async thunk to fetch data from an API
// export const fetchData = createAsyncThunk('data/fetchData', async () => {
//   const response = await fetch('https://dummyjson.com/products');
//   const data = await response.json();
//   return data.products;
// });

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: {
//     items: [],
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export default dataSlice.reducer;
