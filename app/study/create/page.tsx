'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

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
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <h1>Add Study Log</h1>
            <form onSubmit={handleSubmit} className="card">
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Topic</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Tags (comma separated)</label>
                    <input
                        type="text"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Next.js, React, Supabase"
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={10}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn" disabled={loading} style={{ flex: 1 }}>
                        {loading ? 'Saving...' : 'Save Log'}
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            setTopic('');
                            setContent('');
                            setDate('');
                            setTags('');
                        }}
                        style={{ flex: 1, backgroundColor: '#6c757d' }}
                        disabled={loading}
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => router.back()}
                        style={{ flex: 1, backgroundColor: '#dc3545' }}
                        disabled={loading}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
