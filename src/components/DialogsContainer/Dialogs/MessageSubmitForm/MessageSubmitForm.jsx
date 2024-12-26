import React from "react";
import { Formik, Form, Field } from "formik";
import { maxLengthCreator, required } from "../../../../utils/validators";
import { Textarea } from "../../../../assets/FormsControl/FormsControls";

const maxLength50 = maxLengthCreator(50);

const MessageSubmitForm = (props) => {
    return (
        <Formik
            initialValues={{ newMessageBody: props.newMessageBody || "" }} // Устанавливаем начальное значение
            onSubmit={(values, { resetForm }) => {
                props.addMessage(); // Вызываем метод добавления сообщения
                resetForm(); // Очищаем поле после отправки
            }}
        >
            {({ values, handleChange, dirty, isValid }) => (
                <Form>
                    <div>
                        <Field
                            as="textarea"
                            name="newMessageBody"
                            placeholder="Введите текст сообщения"
                            value={values.newMessageBody}
                            onChange={(e) => {
                                handleChange(e);
                                props.updateNewMessageBody(e.target.value);
                            }}
                            component={Textarea}
                            validate={[required, maxLength50]}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!dirty || !isValid}>
                            Отправить
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MessageSubmitForm;