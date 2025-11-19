export type Education = {
    id: number;
    title: string;
    date: string;
    role: 'Attendee' | 'Speaker';
    description: string;
    created_at: string;
};

export type StudyLog = {
    id: number;
    title: string;
    date: string;
    category: string;
    content: string;
    created_at: string;
};

export type Resource = {
    id: number;
    title: string;
    url: string;
    description: string;
    category: string;
    created_at: string;
};
