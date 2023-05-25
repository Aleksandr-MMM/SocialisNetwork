import {Form, Formik} from "formik";
import {validationStatus} from "../../../helpers/Validation/validation";
import {MyTextArea} from "../../../components/simpleComponents/CustomForms/MyTextArea";

export const StatusForm = (props) => {
    const checkValueNull = (value) => {
        return (value === null ? '' : value)
    }

    return (
        <Formik initialValues={{
            status: checkValueNull(props.status)
        }}
                validationSchema={validationStatus}>
            <Form>
                <MyTextArea label="Status"
                            name="status"
                            type="text"
                            placeholder="Ваш статус"
                            onBlur={async (e) => {
                                if (e.currentTarget.value !== props.status) {
                                    await props.setProfileStatus(e.currentTarget.value)
                                }
                                await props.setInputStatus(false)
                            }}/>
            </Form>
        </Formik>
    )
}