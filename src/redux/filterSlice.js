import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
  selectedGenders: [],
  sortOption: 'Relevance',  // Add any other initial states as needed
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(c => c !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
    clearAllCategories: (state) => {
      state.selectedCategories = [];
      state.selectedGenders = [];
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    toggleGender: (state, action) => {
      const gender = action.payload;
      if (state.selectedGenders.includes(gender)) {
        state.selectedGenders = state.selectedGenders.filter(g => g !== gender);
      } else {
        state.selectedGenders.push(gender);
      }
    },
  },
});

export const { toggleCategory, clearAllCategories, setSortOption, toggleGender } = filterSlice.actions;

export default filterSlice.reducer;


