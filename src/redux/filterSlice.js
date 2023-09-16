const { createSlice } = require("@reduxjs/toolkit");

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    changeFilter(state, action) {
      return state = action.payload;
    },
  },
});

export const {changeFilter} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;