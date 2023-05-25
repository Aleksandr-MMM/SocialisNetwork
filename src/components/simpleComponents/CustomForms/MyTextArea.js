import {useField} from "formik";
import style from './MyFormStyle.module.css'

export const MyTextArea = ({ label,textAreaAttribute,wrapperClassname,labelAttribute, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <div className={`${style.wrapper} ${wrapperClassname}`}>
            <div>
                <label className={style.label} htmlFor={props.id || props.name} {...labelAttribute}>{label}</label>
            </div>
            <textarea {...field} {...props} {...textAreaAttribute} />
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};