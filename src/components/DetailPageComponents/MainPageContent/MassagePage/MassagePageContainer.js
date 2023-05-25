import {MessagePage} from "./MessagePage";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useLocation} from "react-router-dom";
import {getProfile} from "../../../../store/reducers/profileReduser";
import {useEffect} from "react";
import {getFriendMessage} from "../../../../store/reducers/dialogsReduser";


export const MassagePageContainer = () => {

    const location = useLocation();
    const urlId = location.pathname.substring(9)
    const currentProfile = useSelector((state) => state.profileReducer.currentUser)
    const rootId = useSelector((state) => state.globalData.userRoot.id)
    const dispatch = useDispatch()



    useEffect(() => {
            dispatch(getProfile(urlId))
    }, [dispatch, urlId])

    useEffect(() => {
        dispatch(getFriendMessage(urlId))
    }, [dispatch, urlId])

    return (<>

            {
                urlId===rootId.toString()?<Navigate to={`/profile/${rootId}`} replace/>:undefined
            }
            <MessagePage dispatch={dispatch} fullName={currentProfile.fullName} photos={currentProfile.photos}
                         rootId={rootId} urlId={urlId}/>
    </>

    )
}