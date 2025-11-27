'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

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
        <div className="form-container-lg">
            <h1>Add Resource</h1>
            <form onSubmit={handleSubmit} className="card">
                <Input
                    id="title"
                    label="Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <Input
                    id="url"
                    label="URL"
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                />
                <Input
                    id="category"
                    label="Category"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <Textarea
                    id="description"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />
                <div className="flex-center gap-2 mt-4">
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Saving...' : 'Save Resource'}
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                            setTitle('');
                            setUrl('');
                            setCategory('');
                            setDescription('');
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
