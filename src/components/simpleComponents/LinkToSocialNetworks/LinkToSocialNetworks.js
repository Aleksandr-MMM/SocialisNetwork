import style from "./LinkToSocialNetworks.module.css";
import {useState} from "react";
import {getUrlContacts} from "../../../helpers/getUrlContacts/getUrlContacts";
import {useSelector} from "react-redux";

export const LinkToSocialNetworks =()=>{

    const [contactsState, hideSeeContactsState] = useState(false)
    const contacts = useSelector((state) => state.profileReducer.currentUser.contacts)
    return(<>
        {contactsState ?
            <div>
                {getUrlContacts(contacts,style.contactsLinks,hideSeeContactsState)}
            </div> :
            <div className={style.contacts} data-name='Посмотреть ссылку'>
                <p onClick={() => {
                    hideSeeContactsState(true)
                }}>Ссылка на соцсети...</p>
            </div>
        }
    </>)
}