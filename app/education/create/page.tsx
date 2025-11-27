'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function CreateEducationPage() {
    const [title, setTitle] = useState('');
    const [institution, setInstitution] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const { error } = await supabase
            .from('education')
            .insert([{ title, institution, date, description }]);

        if (error) {
            alert('Error creating education: ' + error.message);
            setLoading(false);
        } else {
            router.push('/education');
            router.refresh();
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
            <h1>Add Education</h1>
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
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Institution</label>
                    <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
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
                        {loading ? 'Saving...' : 'Save Education'}
                    </button>
                    <button
                        type="button"
                        className="btn"
                        onClick={() => {
                            setTitle('');
                            setInstitution('');
                            setDate('');
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
