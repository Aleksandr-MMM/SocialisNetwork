import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {identification, securityApi} from "../../apiReqests/apiRequest";

export const identifyMe = createAsyncThunk('identifyMe/fetchUser', async () => {

    const response = await identification.authMe()

    return response.data
})

export const logoutMyProfile = createAsyncThunk('logout/fetchUser', async () => {
    await identification.logout()
})

export const loginToMyProfile = createAsyncThunk('login/fetchUser', async (user) => {

    const response = await identification.login(user)

    return response.data
})

export const getCaptcha = createAsyncThunk('getCaptcha/fetchUser', async () => {
    debugger
    const response = await securityApi.getCaptcha()
    debugger
    return response.data
})
export const tryRegistration = createAsyncThunk('registration/tryRegistration', async (value) => {

    const response = await securityApi.registration(value)
    debugger
    return response
})
const globalData = createSlice({
    name: "currentUser",
    initialState: {

        tryRegistration:{
            message:null,

        },

        security:{
            errorMessages:[],
            isCaptcha:false,
            captchaUrl:null
        },

        isToggle: true,
        isLogin: null,
        userRoot: {id: null, email: null, login: null}
    },
    reducers: {
        changeToggle(state, action) {
            state.isToggle = action
        },
        changeToMyProfile(state) {
            state.anotherUserId = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(
                identifyMe.fulfilled, (state, action) => {
                    if (action.payload.resultCode === 0) {
                        state.userRoot = action.payload.data
                        state.isLogin = true;
                    }

                    else {
                        state.isLogin = false
                    }
                    state.isToggle = false
                }
            )
            .addCase(
                logoutMyProfile.fulfilled, (state) => {

                    state.isLogin = null
                    state.userRoot = {id: null, email: null, login: null}
                }
            )
            .addCase(
                loginToMyProfile.fulfilled, (state, action) => {

                    if (action.payload.resultCode === 0) {
                        state.isLogin = true
                        state.userRoot = {id: action.payload.data.userId, email: null, login: null}
                    }
                    else{
                        state.security.errorMessages=action.payload.messages
                        state.isLogin = false
                        if(action.payload.resultCode === 10){
                            debugger
                            state.security.isCaptcha = true
                        }
                    }
                }
            )
            .addCase(
                getCaptcha.fulfilled, (state,action) => {
                debugger
                state.security.captchaUrl = action.payload.url


            }
        )
            .addCase(
                tryRegistration.fulfilled, (state,action) => {

                    debugger
                    if(action.payload.status===200) {
                        if(action.payload.data.Response[0].v) {
                            state.tryRegistration.message = 'Подтверждение отправленно на электронный почту'
                        }
                        else if(action.payload.data.Response[1].v[0].message){
                            state.tryRegistration.message = action.payload.data.Response[1].v[0].message
                        }
                    }
                    else {
                        state.tryRegistration.message = 'Произошла ошибка. Попробуйте зарегестрироваться позже.'
                    }


                }
            )
    }
})

export const {changeToMyProfile} = globalData.actions
export default globalData.reducer