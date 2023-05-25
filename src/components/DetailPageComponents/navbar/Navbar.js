import style from './Navbar.module.css'

import {NavLink} from "react-router-dom";

const Navbar = ({currentUserId}) => {

    return (
        <nav className={`${style.wrapper}`}>
            <div>
                <NavLink to={`/profile/${currentUserId}`} className={(navData) => (navData.isActive ? 'active' : 'link')}>
                    Моя страница
                </NavLink>
            </div>
            <div>
                <NavLink to={'/dialogs'} className={(navData) => (navData.isActive ? 'active' : 'link')} >
                    Сообщения
                </NavLink>
            </div>
            <div>
                <NavLink to={'/users'} className={(navData) => (navData.isActive ? 'active' : 'link')}>
                    Найти пользователей
                </NavLink>
            </div>
            <div>
                <NavLink to={'/settings'} className={(navData) => (navData.isActive ? 'active' : 'link')}>
                    Настройки
                </NavLink>
            </div>
            <div>
                <NavLink to={'/'} className={(navData) => (navData.isActive ? 'active' : 'link')}>
                    О сайте
                </NavLink>
            </div>
        </nav>
    )
}
export default Navbar;