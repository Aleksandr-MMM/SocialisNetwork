import {useField} from "formik";


export const MySelect = ({ label,selectWrapperStyle,selectStyle, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={selectWrapperStyle}>
            <span>
                <label htmlFor={props.id || props.name}>{label}</label>
            </span>

            <select {...field} {...props} className={selectStyle}/>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};