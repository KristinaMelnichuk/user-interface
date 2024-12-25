import React from "react";
import { Formik, Form, Field } from "formik";
import { maxLengthCreator, required } from '../../../../../../utils/validators';
import { Textarea } from '../../../../../../assets/FormsControl/FormsControls';

const maxLength = maxLengthCreator(10);

const PostSubmitForm = (props) => {
    return (
        <Formik
            initialValues={{ newPostText: props.newPostText || "" }}
            onSubmit={(values, { resetForm }) => {
                props.addPost(); // Вызываем метод для добавления поста
                resetForm(); // Сбрасываем текст после отправки
            }}
        >
            {({ values, handleChange, isValid, dirty }) => (
                <Form >
                    <div>
                        <Field
                            as="textarea"
                            name="newPostText"
                            placeholder="Что у Вас нового?"
                            value={values.newPostText}
                            onChange={(e) => {
                                handleChange(e); // Обновляем значение в Formik
                                props.updateNewPostText(e.target.value); // Передаем изменения в props
                            }}
                            component={Textarea}
                            validate={[required, maxLength]}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            disabled={!dirty || !isValid}>
                            Опубликовать
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default PostSubmitForm;