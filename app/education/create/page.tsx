'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';

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
        <div className="form-container-lg">
            <h1>Add Education</h1>
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
                    id="institution"
                    label="Institution"
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
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
                <Textarea
                    id="description"
                    label="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                />
                <div className="flex-center gap-2 mt-4">
                    <Button type="submit" disabled={loading} className="w-full">
                        {loading ? 'Saving...' : 'Save Education'}
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => {
                            setTitle('');
                            setInstitution('');
                            setDate('');
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
