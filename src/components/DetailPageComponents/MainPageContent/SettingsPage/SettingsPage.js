import style from './Settings.module.css'
import {SettingsForm} from "../../../../vigets/FormWidget/SettingsForm/SettingsForm";

export const SettingsPage = ({settingsData,dispatch}) => {

    return (
        <div >
            <div className={style.header}>
                Страница поиска пользователей
            </div>
            <div className={style.itemsWrapper}>

                <SettingsForm pageNumber={settingsData.usersSettings.pageSize} dispatch={dispatch}/>


            </div>


        </div>
    )
}