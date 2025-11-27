import Link from 'next/link';

export default function AdminPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
            <h1>Admin Dashboard</h1>
            <p>Manage your content here.</p>

            <div className="grid" style={{ marginTop: '2rem' }}>
                <Link href="/education/create" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>Add Education</h3>
                    <p>Register new education or certification.</p>
                </Link>

                <Link href="/study/create" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>Add Study Log</h3>
                    <p>Write a new study log entry.</p>
                </Link>

                <Link href="/resources/create" className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3>Add Resource</h3>
                    <p>Share a new useful resource.</p>
                </Link>
            </div>
        </div>
    );
}
