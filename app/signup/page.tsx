'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        const { error, data } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setMessage('회원가입 확인 이메일을 보냈습니다. 이메일을 확인해주세요.');
            setLoading(false);
            // Optional: Redirect after a delay or let user read the message
            // setTimeout(() => router.push('/login'), 3000);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: '4rem auto', padding: '2rem' }}>
            <h1>회원가입</h1>
            <form onSubmit={handleSignup} className="card">
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>이메일</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem' }}>비밀번호</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem' }}
                    />
                </div>
                {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                {message && <p style={{ color: 'green', marginBottom: '1rem' }}>{message}</p>}
                <button type="submit" className="btn" disabled={loading} style={{ width: '100%' }}>
                    {loading ? '처리중...' : '가입하기'}
                </button>
                <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <Link href="/login">이미 계정이 있으신가요? 로그인</Link>
                </div>
            </form>
        </div>
    );
}
