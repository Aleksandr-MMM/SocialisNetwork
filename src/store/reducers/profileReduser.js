import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {APIMyProfile, APIUsers} from "../../apiReqests/apiRequest";


export const getProfile = createAsyncThunk('getProfile/fetchUsers', async (id) => {
    const response = await APIUsers.getProfile(id)
    return response.data
})

export const setProfile = createAsyncThunk('setProfile/fetchUsers', async (value) => {
    const response = await APIMyProfile.setProfile(value)
    response.data.data = value
    return response.data
})

export const getStatus = createAsyncThunk('getStatus/fetchUser', async (id) => {
    const response = await APIUsers.getStatus(id)
    return response.data
})

export const setStatus = createAsyncThunk('SetStatus/fetchUser', async (status) => {
    const response = await APIMyProfile.setStatus(status)
    response.data.data = status
    return response.data
})

export const setUserPhoto = createAsyncThunk('setPhoto/fetchUser', async (file) => {
    const response = await APIMyProfile.setPhoto(file)
    return response.data
})


const profileReducer = createSlice({
    name: "currentProfile",
    initialState: {
        status: null,
        currentUser: {
            aboutMe: '',
            userId: '',
            lookingForAJob: null,
            lookingForAJobDescription: '',
            fullName: '',
            contacts: {
                github: '',
                vk: '',
                facebook: '',
                instagram: '',
                twitter: '',
                website: '',
                youtube: '',
                mainLink: '',
            },
            photos: {
                small: null,
                large: null
            }
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(
                getProfile.fulfilled, (state, action) => {
                    state.currentUser = action.payload

                }
            )
            .addCase(
                setProfile.fulfilled, (state, action) => {
                    if (action.payload.resultCode === 0) {
                        state.currentUser.lookingForAJob = action.payload.data.lookingForAJob
                        state.currentUser.lookingForAJobDescription = action.payload.data.lookingForAJobDescription
                        state.currentUser.fullName = action.payload.data.fullName
                        state.currentUser.contacts = action.payload.data.contacts
                    }
                }
            )
            .addCase(
                getStatus.fulfilled, (state, action) => {
                    state.status = action.payload
                }
            )
            .addCase(
                setStatus.fulfilled, (state, action) => {
                    if(action.payload.resultCode === 0){
                        state.status = action.payload.data
                    }

                }
            )
            .addCase(
                setUserPhoto.fulfilled, (state, action) => {
                    if (action.payload.resultCode === 0) {
                        state.currentUser.photos = action.payload.data.photos
                    }

                }
            )


    }
})
export default profileReducer.reducer