import {LinkToSocialNetworks} from "../../components/simpleComponents/LinkToSocialNetworks/LinkToSocialNetworks";
import {UserProfileTextContainer} from "../../components/simpleComponents/UserProfileText/UserProfileTextContainer";

export const UserProfileInfo = ({urlId}) => {

    return (<>
                {/*Информация о пользователях*/}
                <UserProfileTextContainer urlId={urlId} />

                {/*Ссылка на соцсети*/}
                <LinkToSocialNetworks />
        </>
    )
}
