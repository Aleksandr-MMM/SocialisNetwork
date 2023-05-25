import {UserProfileText} from "./UserProfileText";
import {useSelector} from "react-redux";

export const UserProfileTextContainer =({urlId})=>{

    const aboutMe = useSelector((state) => state.profileReducer.currentUser.aboutMe)
    const fullName = useSelector((state) => state.profileReducer.currentUser.fullName)
    const lookingForAJob = useSelector((state) => state.profileReducer.currentUser.lookingForAJob)
    const lookingForAJobDescription = useSelector((state) => state.profileReducer.currentUser.lookingForAJobDescription)

    return(
        <UserProfileText urlId={urlId} aboutMe={aboutMe} fullName={fullName} lookingForAJob={lookingForAJob}
                         lookingForAJobDescription={lookingForAJobDescription}/>
    )
}
