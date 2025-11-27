import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <section className="hero">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}
