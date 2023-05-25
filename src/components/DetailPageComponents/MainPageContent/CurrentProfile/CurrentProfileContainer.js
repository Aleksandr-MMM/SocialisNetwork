import CurrentProfile from "./CurrentProfile";
import { useSelector} from "react-redux";
import {useEffect} from "react";
import {getProfile, getStatus} from "../../../../store/reducers/profileReduser";
import {useLocation} from "react-router-dom";

const CurrentProfileContainer = ({dispatch}) => {
    const location = useLocation();
    const urlId=location.pathname.substring(9)

    const rootId = useSelector((state) => state.globalData.userRoot.id)

    useEffect(() => {
        dispatch(getProfile(urlId))
    }, [dispatch, urlId])

    useEffect(() => {
        dispatch(getStatus(urlId))
    }, [dispatch, urlId])

    return (
        <>
            <CurrentProfile userRootId={rootId} urlId={urlId} dispatch={dispatch}/>
        </>
    )

}
export default CurrentProfileContainer
