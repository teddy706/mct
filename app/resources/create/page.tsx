'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function CreateResourcePage() {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from('resources')
            .insert([{ title, url, category, description }]);

        if (error) {
            alert('Error creating resource: ' + error.message);
            setLoading(false);
        } else {
            router.push('/resources');
            router.refresh();
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <h1>Add Resource</h1>
            <form onSubmit={handleSubmit} className="card">
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>URL</label>
                    <input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Category</label>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="submit" className="btn" disabled={loading} style={{ flex: 1 }}>
                        {loading ? 'Saving...' : 'Save Resource'}
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            setTitle('');
                            setUrl('');
                            setCategory('');
                            setDescription('');
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
