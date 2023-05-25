import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {dialogsApi} from "../../apiReqests/apiRequest";
import {formatDate} from "../../helpers/formatDate/formatDate";

export const getAllMyDialogs = createAsyncThunk('dialogsReducer/fetchMyAllDialogs', async () => {
    const response = await dialogsApi.getAllDialogs()
    return response.data
})

export const sendMyMessage = createAsyncThunk('dialogsReducer/fetchMyMessage', async (userId) => {
    const response = await dialogsApi.sendMessage(userId)
    return response.data
})

export const sendFriendMessage = createAsyncThunk('dialogsReducer/fetchFriendMessage', async ({urlId, message}) => {
    const response = await dialogsApi.sendFriendMessage(urlId, message)
    return response.data
})

export const getFriendMessage = createAsyncThunk('dialogsReducer/fetchGetFriendMessage', async (userId) => {
    const response = await dialogsApi.getFriendDialogs(userId)
    return response.data
})
// Mark as spam
export const markMessageToSpam = createAsyncThunk('dialogsReducer/markMessageToSpam', async (messageId) => {
    const response = await dialogsApi.markMessageToSpam(messageId)
    return response.data
})
// delete only for you, not for your companion
export const deleteMessage = createAsyncThunk('dialogsReducer/fetchDeleteMessage', async (messageId) => {
    const response = await dialogsApi.deleteMyMessage(messageId)
    return response.data
})
// restore your message LoginForm deleted and spam
export const restoreMessage = createAsyncThunk('dialogsReducer/fetchGetFriendMessage', async (messageId) => {
    const response = await dialogsApi.restoreMessage(messageId)
    return response.data
})
// return messages newer than date
// date - (string) - desired date (string in date format)
export const sortMessage = createAsyncThunk('dialogsReducer/fetchGetFriendMessage', async ({userId, date}) => {
    const response = await dialogsApi.sortMessage(userId,date)
    return response.data
})
//list of new messages
export const isNewMessage = createAsyncThunk('dialogsReducer/fetchIsNewMessage', async () => {
    const response = await dialogsApi.newMessage()
    return response.data
})
//is your message viewed
export const isMessageViewed = createAsyncThunk('dialogsReducer/fetchGetFriendMessage', async (messageId) => {
    const response = await dialogsApi.isMessageViewed(messageId)
    return response.data
})

const dialogsReducer = createSlice({
        name: 'dialogsReducer',
        initialState: {
            // Колличество новых сообщений
            newMessageCount:null,
            // UserProfile
            userMessage: [
                {
                    hasNewMessages: null,
                    id: null,
                    lastDialogActivityDate: null,
                    lastUserActivityDate: null,
                    newMessagesCount: null,
                    photos: {small: null, large: null},
                    userName: null
                }
            ],
            //All messages
            messages: [{
                addedAt: null,
                body: null,
                id: null,
                recipientId: null,
                senderId: null,
                senderName: null,
                translatedBody: null,
                viewed: null,
            }]
        },
        reducers: {},
        extraReducers: builder => {
            builder
                .addCase(
                    getAllMyDialogs.fulfilled, (state, action) => {
                        let data = action.payload.map(el => el = {
                            ...el,
                            lastDialogActivityDate: formatDate(new Date(el.lastDialogActivityDate)),
                            lastUserActivityDate: formatDate(new Date(el.lastUserActivityDate))
                        })
                        state.userMessage = data
                    }
                )
                .addCase(
                    sendMyMessage.fulfilled, (state, action) => {
                    }
                )
                .addCase(
                    sendFriendMessage.fulfilled, (state, action) => {
                    }
                )
                .addCase(
                    getFriendMessage.fulfilled, (state, action) => {
                        state.messages = action.payload.items
                    }
                )
                .addCase(
                    isNewMessage.fulfilled, (state, action) => {
                        state.newMessageCount = action.payload
                    }
                )

        }
    }
)
// export const {} = dialogsReducer.actions
export default dialogsReducer.reducer