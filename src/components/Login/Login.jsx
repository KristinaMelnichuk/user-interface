import React from 'react';
import { Field, Form, Formik } from 'formik';
import { Input } from '../../assets/FormsControl/FormsControls';

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                login: "",
                password: "",
                rememberMe: false,
            }}
            onSubmit={(values) => {
                props.onSubmit(values)
            }}
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name="login"
                            placeholder="Login"
                            type="text"
                            component={Input}
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            placeholder="Password"
                            type="password"
                            component={Input}
                        />
                    </div>
                    <div>
                        <Field
                            name="rememberMe"
                            type="checkbox"
                            component={Input}
                        />
                        Remember me
                    </div>
                    <button type="submit">Login</button>
                </Form>
            )}
        </Formik>
    );
};

const Login = () => {
    const handleSubmit = (formData) => {
        console.log("Login Data:", formData);
        // Здесь можно обработать данные формы, например, отправить их на сервер
    };

    return (
        <div>
            <h1>Login</h1>
            {/* Передаем handleSubmit в LoginForm */}
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
};

export default Login;