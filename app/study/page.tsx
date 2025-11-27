import { supabase } from "@/lib/supabase";
import { StudyLog } from "@/lib/types";
import { Linkify } from "@/lib/utils";

export const revalidate = 0;

export default async function StudyPage() {
    const { data: studyLogs, error } = await supabase
        .from("study_logs")
        .select("*")
        .order("date", { ascending: false });

    if (error) {
        console.error("Error fetching study logs:", error);
    }

    return (
        <>
            <section className="hero">
                <h1>Study Log</h1>
                <p>지속적인 학습 기록을 남깁니다.</p>
            </section>

            <section>
                {studyLogs?.map((log: StudyLog) => (
                    <article key={log.id} className="card mb-8">
                        <h3>{log.topic}</h3>
                        <p className="meta-text">
                            {log.date} | Tags: {log.tags?.join(", ")}
                        </p>
                        <div className="content-body">
                            <Linkify text={log.content} />
                        </div>
                    </article>
                ))}

                {(!studyLogs || studyLogs.length === 0) && (
                    <p className="text-center">등록된 학습 기록이 없습니다.</p>
                )}
            </section>
        </>
    );
}
