
export const ChangeButton =({changePopup,popup,children,styleWrapper,buttonWrapper})=>{
    return(
        <div className={styleWrapper}>
            <button onClick={() => {
                changePopup(!popup)
            }
            } className={buttonWrapper} >
                {children}
            </button>
        </div>
    )
}