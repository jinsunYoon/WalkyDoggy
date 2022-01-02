import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAPI } from '../../api'

export const getContentsMD = createAsyncThunk('contentsSlice/contents', async (data, thunkAPI) => {
    try {
        const response = await getAPI(data)
        if (response) {
            console.log('통신완료', response)
            return response
        }
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})
