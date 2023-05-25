import style from './AboutWeb.module.css'
import {CopyTextInBuffer} from "./CopyTextInBuffer/CopyTextInBuffer";
import {NavLink} from "react-router-dom";
export const AboutWeb = () => {

    return (
        <div className={style.wrapper}>
            <h1>
                Добро пожаловать на этот сайт.
            </h1>
            <p className={style.pText}>
                Это мое первое React-app приложение.
            </p>
            <p className={style.pText}>
                Сайт созданн в тренировочных целях, чтобы протестировать как все работает.
            </p>
            <p className={style.pText}>
                На этом сайте я базово познакомился с React , а также затронул такие библиотеки как:
            </p>
            <ul className={style.ul} >
                <li className={style.liItems}>
                    Redux
                </li>
                <li className={style.liItems}>
                    Axios
                </li>
                <li className={style.liItems}>
                    Formik
                </li>
                <li className={style.liItems}>
                    Antd
                </li>
                <li className={style.liItems}>
                    И другие.
                </li>
            </ul>
            <p className={style.pText}>
                Прошу не судите строго дизайнерское решение.
                Моя цель не была сделать крутой дизайн на сайте.
            </p>
            <p className={style.pText}>
                Хочется сказать спасибо Димычу за его видеоУроки , благодаря ему я хоть немного научился базовым концепциям
                React приложения, рекомендую всем кто хочет разобраться и при этом не сильно ломать себе голову, посетить
                его канал на Youtube.
            </p>
            <p className={style.pText}>
                Хотя я сразу предупрежу вас , что информация там не совсем актуальная на текущий момент, но для общего
                понимания я считаю его канал , лучшим что я видел.
            </p>
            <div>
                <p className={`${style.pText} ${style.linkYoutube}`}>
                    Не могу не оставить ссылку на его канал :
                </p>
                <a href="https://www.youtube.com/@ITKAMASUTRA" className={style.linkItems}  > @ITKAMASUTRA</a>
            </div>
            <div>
                <p className={`${style.pText} ${style.linkYoutube}`}>
                    {`Для корректной работы вам необходимо `}
                </p>
                <NavLink to={'/login'} className={style.redirectToRegistration}>
                    зарегестрироваться
                </NavLink>
                <p className={`${style.pText} ${style.linkYoutube}`}>
                    {` на сайте Дмитрия :`}
                </p>
                <a href="https://social-network.samuraijs.com" className={style.linkItems} >
                    https://social-network.samuraijs.com </a>
            </div>

            <CopyTextInBuffer bufferText={'free@samuraijs.com'} label={`Или использовать тестовый логин: `}/>
            <CopyTextInBuffer bufferText={'free'} label={`И пароль: `}/>



        </div>
    )
}