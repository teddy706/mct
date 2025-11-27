'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push('/'); // Redirect to home or dashboard after login
            router.refresh();
        }
    };

    return (
        <div className="form-container">
            <h1>로그인</h1>
            <form onSubmit={handleLogin} className="card">
                <div className="form-group">
                    <label htmlFor="email">이메일</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'var(--error-color)', marginBottom: '1rem' }}>{error}</p>}
                <button type="submit" className="btn" disabled={loading} style={{ width: '100%' }}>
                    {loading ? '로그인 중...' : '로그인'}
                </button>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <a href="/signup">계정이 없으신가요? 회원가입</a>
                </div>
            </form>
        </div>
    );
}
