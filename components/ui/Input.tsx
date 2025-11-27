import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default function Input({ label, id, className = '', ...props }: InputProps) {
    return (
        <div className="form-group">
            <label htmlFor={id}>{label}</label>
            <input id={id} className={className} {...props} />
        </div>
    );
}
