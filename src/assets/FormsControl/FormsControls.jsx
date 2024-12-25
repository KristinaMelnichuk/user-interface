import React from 'react';

export const Textarea = ({ field, form, ...props }) => {
    return (
        <div>
            <textarea  {...field}{...props} />
        </div>
    )
};