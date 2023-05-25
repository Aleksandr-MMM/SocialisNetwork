import style from './urlStyle.module.css'
import {CustomButton} from "../../components/simpleComponents/Button/CustomButton/CustomButton";
export const getUrlContacts = (contacts,styleLinks,hideSeeContactsState) => {

    let contactsUrl = []
    const customButtonAtr={onClick:() => {hideSeeContactsState(false)},
    }

    for (let key in contacts) {
        contactsUrl.push(<div key={key} className={styleLinks}>
            <span className={style.networksName}>{key}: </span>
            <a className={style.networksUrl} data-name='Перейти по ссылке'
               key={key} href={`${contacts[key]}`}>{contacts[key]}</a>
        </div>)
    }
    contactsUrl.push(<div className={style.hideNetworks} key='1'>
        <CustomButton  wrapper={customButtonAtr} children={'Скрыть соцсети'}/>
    </div>)
    return (contactsUrl)
}