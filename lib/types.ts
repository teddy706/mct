export interface Education {
    id: string;
    title: string;
    institution: string;
    date: string;
    description: string | null;
    created_at: string;
}

export interface StudyLog {
    id: string;
    topic: string;
    content: string;
    date: string;
    tags: string[] | null;
    created_at: string;
}

export interface Resource {
    id: string;
    title: string;
    url: string;
    category: string | null;
    description: string | null;
    created_at: string;
}
