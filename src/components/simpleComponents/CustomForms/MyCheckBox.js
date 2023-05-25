import {useField} from "formik";
import style from './MyFormStyle.module.css'
export const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <div className={style.checkbox}>
            <label className="checkbox-input">
                <input type="checkbox" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className={style.error}>{meta.error}</div>
            ) : null}
        </div>
    );
};