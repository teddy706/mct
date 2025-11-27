import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger';
}

export default function Button({
    children,
    className = '',
    variant = 'primary',
    style,
    ...props
}: ButtonProps) {
    let variantStyles = {};

    if (variant === 'secondary') {
        variantStyles = { backgroundColor: '#6c757d' };
    } else if (variant === 'danger') {
        variantStyles = { backgroundColor: '#dc3545' };
    }

    return (
        <button
            className={`btn ${className}`}
            style={{ ...variantStyles, ...style }}
            {...props}
        >
            {children}
        </button>
    );
}
