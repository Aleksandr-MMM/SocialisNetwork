import style from './UserProfileText.module.css'

export const UserProfileText =({aboutMe,urlId,fullName,lookingForAJob,lookingForAJobDescription})=>{


    return(
        <div >
            <div className={style.items}>
                About me: {aboutMe ? aboutMe : 'Не указанно'}
            </div>
            <div className={style.items}>
                FullName: {fullName ? fullName : 'Не указанно'}
            </div>
            <div className={style.items}>
                Работа:{lookingForAJob === null ? 'Не указанно'
                : lookingForAJob ? 'Работаю' : 'Безработный'}
            </div>
            <div className={style.items}>
                Место работы:{lookingForAJobDescription ?
                lookingForAJobDescription : 'Не указанно'}
            </div>
            <div className={style.items}>
                АЙДИ:{urlId ? urlId : 'Не указанно'}
            </div>
        </div>
    )
}
