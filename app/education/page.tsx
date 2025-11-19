import { supabase } from "@/lib/supabase";
import { Education } from "@/lib/types";

export const revalidate = 0; // Disable caching for dynamic updates

export default async function EducationPage() {
    const { data: educationList, error } = await supabase
        .from("education")
        .select("*")
        .order("date", { ascending: false });

    if (error) {
        console.error("Error fetching education:", error);
    }

    return (
        <>
            <section className="hero">
                <h1>Education History</h1>
                <p>참여한 교육 및 강의 이력입니다.</p>
            </section>

            <section className="grid">
                {educationList?.map((edu: Education) => (
                    <div key={edu.id} className="card">
                        <h3>{edu.title}</h3>
                        <p>
                            <strong>Date:</strong> {edu.date}
                        </p>
                        <p>
                            <strong>Role:</strong> {edu.role}
                        </p>
                        <p>{edu.description}</p>
                    </div>
                ))}

                {(!educationList || educationList.length === 0) && (
                    <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
                        등록된 교육 이력이 없습니다.
                    </p>
                )}
            </section>
        </>
    );
}
