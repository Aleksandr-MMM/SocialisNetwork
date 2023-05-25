import style from './../AboutWeb.module.css'
import {useState} from "react";
export const CopyTextInBuffer = ({label,bufferText}) => {


    const copyTextInBuffer=(e)=>{
        navigator.clipboard.writeText(e.target.innerText)
    }

    const COPY_TEXT = 'Скопировать'

    const [helperText,changeText] =useState(COPY_TEXT)
    return (

            <div>

                <p className={`${style.pText} ${style.linkYoutube}`}>
                    {label}
                </p>
                    <p className={`${style.pText} ${style.linkYoutube} ${style.copyText}`}
                       data-name={helperText} onClick={(e) => {
                        copyTextInBuffer(e)
                        changeText('Скопированно в буфер обмена')
                    }}>
                        {bufferText}
                    </p>

            </div>
    )
}