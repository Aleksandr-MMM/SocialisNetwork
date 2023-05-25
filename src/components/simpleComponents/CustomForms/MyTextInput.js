import {useField} from "formik";
import style from './MyFormStyle.module.css'

export const MyTextInput = ({label, addLabelAttribute, addInputAttribute, ...props}) => {

    const [field, meta] = useField(props);

    const inputStyle = meta.error ? {
        color: 'red',
        borderWidth: '2px',
        borderColor:'red'
    }
        : undefined
    return (
        <>
            <div>
                <label className={style.label} htmlFor={props.id || props.name} {...addLabelAttribute}>{label}</label>
            </div>
            <input style={inputStyle} {...field} {...addInputAttribute} {...props}/>
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </>
    );
};