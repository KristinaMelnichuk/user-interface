import React from 'react';

export const FormControl = ({ field, form, ...props }) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export const Textarea = (props) => {
    const { field, form, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <textarea  {...field}{...restProps} />
        </FormControl>
    )
};

export const Input = (props) => {
    const { field, form, child, ...restProps } = props;
    return (
        <FormControl {...props}>
            <input  {...field}{...restProps} />
        </FormControl>
    )
};