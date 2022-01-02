import { createSlice } from '@reduxjs/toolkit'
import { getContentsMD } from '../async/contents'

const initialState = {
    contents: '',
}

const contentsSlice = createSlice({
    name: 'contentsSlice',
    initialState: initialState,
    reducers: {
        setContents: (state, { payload }) => {
            state.contents = action.payload
        },
    },

    extraReducers: {
        [getContentsMD.fulfilled]: (state, action) => {
            state.contents = action.payload.data
        },
    },
})

//* reducer export
export const { setContents } = contentsSlice.actions

//* slice export
export default contentsSlice
