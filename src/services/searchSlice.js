const { createSlice } = require('@reduxjs/toolkit')

const searchSlice = createSlice({
  name: 'search',
  initialState: { searchVal: '' },
  reducers: {
    setSearchVal: (state, action) => {
      state.searchVal = action.payload
    },
  },
})

export const { setSearchVal } = searchSlice.actions
export default searchSlice.reducer
