import style from "./StatusWidget.module.css";

export const Status=({statusStyle,status,onClickFunc,statusHelpInfo})=>{

return(
    <div className={style.wrapper}>
        <p className={statusStyle} data-name={statusHelpInfo} onClick={
            //callBackFunc
            onClickFunc
        }>
            Статус профиля: {status || status === '' ? status : 'без статуса'}
        </p>
    </div>
)
}