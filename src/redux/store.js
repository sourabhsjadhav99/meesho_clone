// import { configureStore } from '@reduxjs/toolkit';

// import dataReducer from './dataSlice';

// export const store = configureStore({
//     reducer: {

//         data: dataReducer,

//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productReducer,
  },
});

export default store;