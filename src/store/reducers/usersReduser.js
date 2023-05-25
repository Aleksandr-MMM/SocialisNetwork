import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {APIUsers} from "../../apiReqests/apiRequest";

const changeUserFollowStatus=(state,action,followStatus)=>{

    const el =state.helpersToUsersData.freezeButtonToId.indexOf(action.meta.arg.id)
    state.helpersToUsersData.freezeButtonToId.splice(el,1)
    const findId=state.items.findIndex(element => element.id===action.meta.arg.id)
    state.items[findId].followed=followStatus
}

const getUsers = createSlice({
    name: "getUsers",
    initialState: {
        items: [],
        helpersToUsersData:{
            freezeButtonToId: [],
            totalCount: 1,
        },
    },
    reducers: {

        blockUser(state,action){
            // Блокируем элемент до успешного запроса на сервер
            state.helpersToUsersData.freezeButtonToId =state.helpersToUsersData.freezeButtonToId.concat(action.payload)
        }


    },
    extraReducers: builder => {
        builder
            .addCase(
                getAllUsers.fulfilled, (state, action) => {

                    // записываем   всех запрошеных  пользователей в редакс
                    state.items = action.payload.items

                    // устанавливаем колличество всех зарегестрированых пользователей
                    state.helpersToUsersData.totalCount = action.payload.totalCount
                }
            )
            .addCase(
                getFollow.pending, (state, action) => {

                })
            .addCase(
                getFollow.fulfilled, (state, action) => {
                    changeUserFollowStatus(state,action,true)
                }
            )
            .addCase(
                getUnFollow.pending, (state, action) => {

                })
            .addCase(
                getUnFollow.fulfilled, (state, action) => {
                    changeUserFollowStatus(state,action,false)
                }
            )
    }
})

export const getAllUsers = createAsyncThunk(
    'getUsers/fetchAllUsers', async ({currentPage, pageSize}) => {
        const response = await APIUsers.getUsers(currentPage, pageSize)
        return response
    })

export const getFollow = createAsyncThunk(
    'getUsers/fetchFollow', async ({id,dispatch}) => {

        dispatch(blockUser(id))
        const response = await APIUsers.getFollow(id)

        return response.payload
    })
export const getUnFollow = createAsyncThunk(
    'getUsers/fetchUnFollow', async ({id,dispatch}) => {

        dispatch(blockUser(id))
        const response = await APIUsers.deleteFollow(id)

        return response.payload
    })
export const {blockUser} = getUsers.actions
export default getUsers.reducer