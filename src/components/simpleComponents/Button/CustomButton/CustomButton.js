import style from "./CustomButton.module.css";


export const CustomButton = ({children,wrapper,customButtonTextAtr}) => {

    return (<button className={style.linkWrapper}
                 {...wrapper}>

            <p className={style.link} {...customButtonTextAtr}>
                {children}
            </p>
        </button>
    )
}