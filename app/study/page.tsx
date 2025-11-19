export default function Study() {
    return (
        <>
            <section className="hero">
                <h1>Study Log</h1>
                <p>지속적인 학습 기록을 남깁니다.</p>
            </section>

            <section>
                <article className="card" style={{ marginBottom: "2rem" }}>
                    <h3>Azure AI Engineer Associate 준비 시작</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        2024-03-10 | Category: Azure AI
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                        AI-102 시험 준비를 시작했습니다. Microsoft Learn의 학습 경로를
                        따라가며 실습을 진행할 예정입니다. 주요 학습 내용은 Azure Cognitive
                        Services와 OpenAI Service입니다.
                    </p>
                </article>

                <article className="card" style={{ marginBottom: "2rem" }}>
                    <h3>Power Platform 활용 사례 연구</h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                        2024-03-05 | Category: Power Platform
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                        Power Automate를 사용하여 업무 프로세스를 자동화한 사례를
                        분석했습니다. 실제 업무에 적용할 수 있는 아이디어를 정리해보았습니다.
                    </p>
                </article>
            </section>
        </>
    );
}
