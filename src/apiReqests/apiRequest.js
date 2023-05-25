import axios from "axios";

const instance = axios.create({
      //  headers: {"API-KEY": "00fc72a6-f5d9-482b-96a7-ac6954371d55"},
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true
    }
)
const instanceRegistration = axios.create({
        baseURL: 'https://social-network.samuraijs.com/',
        withCredentials: true
    }
)
export const identification = {
    authMe() {
        return instance.get(`auth/me`,)
    },

    logout() {
        return instance.delete(`auth/login`)
    },

    login(user) {
        return instance.post(`auth/login`, user)
    }
}

export const dialogsApi = {

    // start chatting, refresh your companion so that he was on top
    sendMessage(userId,) {
        return instance.put(`dialogs/${userId}`, )
    },

    // get all dialogs
    getAllDialogs() {
        return instance.get(`dialogs`,)
    },

    // get list of messages with your friend
    getFriendDialogs(userId) {
        return instance.get(`dialogs/${userId}/messages`,)
    },

    // send message to your friend
    sendFriendMessage(userId,message) {
        return instance.post(`dialogs/${userId}/messages`,{body:message})
    },

    //is your message viewed
    isMessageViewed(messageId) {
        return instance.get(`dialogs/messages/${messageId}/viewed`)
    },

    // Mark as spam
    markMessageToSpam(messageId) {
        debugger
        return instance.post(`dialogs/messages/${messageId}/spam`,messageId)
    },

    // delete only for you, not for your companion
    deleteMyMessage(messageId) {
        return instance.delete(`dialogs/messages/${messageId}`)
    },

    // restore your message LoginForm deleted and spam
    restoreMessage(messageId) {
        return instance.put(`dialogs/messages/${messageId}/restore`,messageId)
    },

    // return messages newer than date
    // date - (string) - desired date (string in date format)
    sortMessage(userId,date) {
        return instance.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
    },

    //list of new messages
    newMessage() {
        return instance.get(`dialogs/messages/new/count`)
    },

}

export const APIMyProfile = {
    setStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    setProfile(value) {
        return instance.put(`profile`, value)
    },
    setPhoto(file) {
        const formData = new FormData();
        formData.append("image", file);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
}

export const APIUsers = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data
            )
    },
    getFollow(userId) {

        return instance.post(`follow/${userId}`, {})

    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(currentUrl) {
        return instance.get(`profile/${currentUrl}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

}
export const securityApi={
    getCaptcha(){
        return instance.get(`/security/get-captcha-url`)
    },
    registration(value){

        const JoinModel =value
        return instanceRegistration.post(`Auth/Auth/TryRegister`,{JoinModel})
    },

}