import React from 'react';
import { Field, Form, Formik } from 'formik';

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
                        />
                    </div>
                    <div>
                        <Field
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div>
                        <Field
                            name="rememberMe"
                            type="checkbox"
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