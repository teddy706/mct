import React from 'react';

export const Linkify = ({ text }: { text: string }) => {
    if (!text) return null;

    // Regex to find URLs (http/https, www, or github.com)
    const urlRegex = /((?:https?:\/\/|www\.|github\.com)[^\s]+)/g;

    const parts = text.split(urlRegex);

    return (
        <>
            {parts.map((part, index) => {
                if (part.match(urlRegex)) {
                    let href = part;
                    if (!part.startsWith('http')) {
                        href = 'https://' + part;
                    }
                    return (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--text-accent)', textDecoration: 'underline' }}
                        >
                            {part}
                        </a>
                    );
                }
                return part;
            })}
        </>
    );
};
