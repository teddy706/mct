'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

export default function CreateStudyLogPage() {
    const [topic, setTopic] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [tags, setTags] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const tagArray = tags.split(',').map((tag) => tag.trim()).filter((tag) => tag !== '');

        const { error } = await supabase
            .from('study_logs')
            .insert([{ topic, content, date, tags: tagArray }]);

        if (error) {
            alert('Error creating study log: ' + error.message);
            setLoading(false);
        } else {
            router.push('/study');
            router.refresh();
        }
    };

    return (
        <div className="form-container-lg">
            <h1>Add Study Log</h1>
            <form onSubmit={handleSubmit} className="card">
                <Input
                    id="topic"
                    label="Topic"
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    required
                />
                <Input
                    id="date"
                    label="Date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <Input
                    id="tags"
                    label="Tags (comma separated)"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Next.js, React, Supabase"
                />
                <Textarea
                    id="content"
                    label="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={10}
                    required
                />
                <div className="flex-center gap-2 mt-4">
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Saving...' : 'Save Log'}
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                            setTopic('');
                            setContent('');
                            setDate('');
                            setTags('');
                        }}
                        disabled={loading}
                        className="w-full"
                    >
                        Reset
                    </Button>
                    <Button
                        type="button"
                        variant="danger"
                        onClick={() => router.back()}
                        disabled={loading}
                        className="w-full"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
}
