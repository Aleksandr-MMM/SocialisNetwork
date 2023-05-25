import * as Yup from "yup";
import {validationData} from "./data";

// Валидация логин формы
export const validationToLogin = Yup.object({
    password: Yup.string()
        .max(validationData.password.passwordLengthMax,
            `Длинна пароля должна быть не более ${validationData.password.passwordLengthMax} символов`)
        .required(validationData.required)
        .min(validationData.password.passwordLengthMin,
            `Длинна пароля должна быть не менее ${validationData.password.passwordLengthMin} символов`),
    email: Yup.string().email('Неверный формат Email').required(validationData.required),

})
export const validationToRegistration = Yup.object({
    Password: Yup.string()
        .required(validationData.required)
        .max(validationData.password.passwordLengthMax,
            `Длинна пароля должна быть не более ${validationData.password.passwordLengthMax} символов`)
        .min(validationData.password.passwordLengthMin,
            `Длинна пароля должна быть не менее ${validationData.password.passwordLengthMin} символов`),
    Email: Yup.string()
        .required(validationData.required)
        .email('Неверный формат Email').required(validationData.required),

    Name: Yup.string()
        .required(validationData.required)
        .max(validationData.statusLengthMax, `Длинна строки должна быть не более ${validationData.statusLengthMax} 
        символов`)
        .min(validationData.password.passwordLengthMin,
            `Длинна пароля должна быть не менее ${validationData.password.passwordLengthMin} символов`),
    AcceptOffer: Yup.bool().oneOf([true], "Вы должны принять условия пользования")


})

// Валидация POPUP
const textInputData = {
    data: Yup.string().max(validationData.statusLengthMax,
        `Длинна строки должна быть не более ${validationData.statusLengthMax} символов`)
        .required(validationData.required)
}
const textInputStatus = {
    data: Yup.string().max(validationData.statusLengthMax,
        `Длинна строки должна быть не более ${validationData.statusLengthMax} символов`)
}

/*const textInputWebsite = {
    data: Yup.string()
        .required(validationData.required)
}*/
export const validationToPopup = Yup.object({
    aboutMe: textInputData.data,
    fullName: textInputData.data,
    lookingForAJobDescription: textInputData.data,
})
export const validationStatus = Yup.object({
    status: textInputStatus.data,
})

export const validationMessage = Yup.object({
    message:textInputStatus.data
})
