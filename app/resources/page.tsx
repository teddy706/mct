export default function Resources() {
    return (
        <>
            <section className="hero">
                <h1>Resources</h1>
                <p>MCT 준비와 학습에 유용한 사이트 모음입니다.</p>
            </section>

            <section className="grid">
                <a
                    href="https://learn.microsoft.com/"
                    target="_blank"
                    className="card"
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                    <h3>Microsoft Learn</h3>
                    <p>Microsoft 기술에 대한 공식 학습 자료와 문서를 제공합니다.</p>
                </a>

                <a
                    href="https://mcp.microsoft.com/mcp"
                    target="_blank"
                    className="card"
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                    <h3>Microsoft Certification Dashboard</h3>
                    <p>자격증 시험 예약 및 취득 현황을 확인할 수 있습니다.</p>
                </a>

                <a
                    href="https://techcommunity.microsoft.com/"
                    target="_blank"
                    className="card"
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                    <h3>Microsoft Tech Community</h3>
                    <p>
                        전 세계 전문가들과 지식을 공유하고 토론할 수 있는 커뮤니티입니다.
                    </p>
                </a>

                <a
                    href="https://mctcentral.microsoft.com/"
                    target="_blank"
                    className="card"
                    style={{ textDecoration: "none", color: "inherit", display: "block" }}
                >
                    <h3>MCT Central</h3>
                    <p>MCT를 위한 공식 커뮤니티 및 리소스 센터입니다. (MCT 전용)</p>
                </a>
            </section>
        </>
    );
}
