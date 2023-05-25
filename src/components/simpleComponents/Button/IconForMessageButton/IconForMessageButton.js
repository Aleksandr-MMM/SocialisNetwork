import style from './IconForMessageButton.module.css'

export const IconForMessageButton = ({Clue,callBackFunc,icon,altText}) => {

    return (
        <span data-name={Clue} className={style.widgetEl}
              onClick={() => {
                  callBackFunc()
              }}>
                    <img src={icon} alt={altText} className={style.widgetEl}/>
                </span>
    )
}