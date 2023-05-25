import {createSlice} from "@reduxjs/toolkit";

const settingsReducer = createSlice({
        name: 'settingsReducer',
        initialState: {
            usersSettings: {
                currentPage: 1,
                pageSize: 5
            }
        },
        reducers: {
            setPageSize(state, action) {

                state.usersSettings.pageSize= action.payload
            },
            setCurrentPage(state, action) {
                state.usersSettings.currentPage= action.payload
            }
        },

    }
)
export const { setPageSize,setCurrentPage } = settingsReducer.actions
export default settingsReducer.reducer