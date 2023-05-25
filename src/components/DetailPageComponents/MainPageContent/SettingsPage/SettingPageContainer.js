import {useDispatch, useSelector} from "react-redux";
import {SettingsPage} from "./SettingsPage";

export const SettingPageContainer =()=>{
    const settingsData = useSelector(state => state.settingsReducer)
    const dispatch =useDispatch()

    return(<>
        <SettingsPage dispatch={dispatch} settingsData={settingsData} />
    </>)
}
