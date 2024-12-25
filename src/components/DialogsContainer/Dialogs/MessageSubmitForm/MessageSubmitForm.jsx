import React from "react";
import { Formik, Form, Field } from "formik";

const MessageSubmitForm = (props) => {
    return (
        <Formik
            initialValues={{ newMessageBody: props.newMessageBody || "" }} // Устанавливаем начальное значение
            onSubmit={(values, { resetForm }) => {
                props.addMessage(); // Вызываем метод добавления сообщения
                resetForm(); // Очищаем поле после отправки
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <div>
                        <Field
                            as="textarea"
                            name="newMessageBody"
                            placeholder="Введите текст сообщения"
                            value={values.newMessageBody}
                            onChange = {(e) => {
                                handleChange(e);
                                props.updateNewMessageBody(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <button
                            type="submit">
                            Отправить
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MessageSubmitForm;