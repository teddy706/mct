export default function Education() {
    return (
        <>
            <section className="hero">
                <h1>Education History</h1>
                <p>참여한 교육 및 강의 이력입니다.</p>
            </section>

            <section className="grid">
                {/* Example Entry */}
                <div className="card">
                    <h3>Azure Fundamentals (AZ-900)</h3>
                    <p>
                        <strong>Date:</strong> 2024-01-15
                    </p>
                    <p>
                        <strong>Role:</strong> Attendee
                    </p>
                    <p>Microsoft Azure의 기본 개념과 서비스에 대해 학습했습니다.</p>
                </div>

                <div className="card">
                    <h3>Microsoft 365 Fundamentals (MS-900)</h3>
                    <p>
                        <strong>Date:</strong> 2024-02-20
                    </p>
                    <p>
                        <strong>Role:</strong> Speaker
                    </p>
                    <p>사내 직원을 대상으로 M365 기초 교육을 진행했습니다.</p>
                </div>
            </section>
        </>
    );
}
