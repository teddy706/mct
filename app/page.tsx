import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="hero">
                <h1>Microsoft Certified Trainer를 향한 여정</h1>
                <p>기술을 배우고, 나누고, 함께 성장하는 과정을 기록합니다.</p>
                <Link href="/study" className="btn">
                    최신 학습 기록 보기
                </Link>
            </section>

            <section className="grid">
                <div className="card">
                    <h3>🎓 Education</h3>
                    <p>참여한 교육과 진행한 강의 이력을 정리합니다.</p>
                </div>
                <div className="card">
                    <h3>📝 Study Log</h3>
                    <p>Azure, M365 등 Microsoft 기술 학습 내용을 기록합니다.</p>
                </div>
                <div className="card">
                    <h3>🔗 Resources</h3>
                    <p>MCT 준비와 학습에 도움이 되는 유용한 사이트를 모았습니다.</p>
                </div>
            </section>
        </>
    );
}
