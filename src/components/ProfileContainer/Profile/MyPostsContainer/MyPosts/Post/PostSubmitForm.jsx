import React from "react";
import { Formik, Form, Field } from "formik";

const PostSubmitForm = (props) => {
    return (
        <Formik
            initialValues={{ newPostText: props.newPostText || "" }}
            onSubmit={(values, { resetForm }) => {
                props.addPost(); // Вызываем метод для добавления поста
                resetForm(); // Сбрасываем текст после отправки
            }}
        >
            {({ values, handleChange }) => (
                <Form>
                    <div>
                        <Field
                            as="textarea"
                            name="newPostText"
                            placeholder="Введите текст поста"
                            value={values.newPostText}
                            onChange={(e) => {
                                handleChange(e); // Обновляем значение в Formik
                                props.updateNewPostText(e.target.value); // Передаем изменения в props
                            }}
                        />
                    </div>
                    <div>
                        <button type="submit">Опубликовать</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PostSubmitForm;