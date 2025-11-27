import { supabase } from "@/lib/supabase";
import { Resource } from "@/lib/types";

export const revalidate = 0;

export default async function ResourcesPage() {
    const { data: resources, error } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching resources:", error);
    }

    return (
        <>
            <section className="hero">
                <h1>Resources</h1>
                <p>MCT 준비와 학습에 유용한 사이트 모음입니다.</p>
            </section>

            <section className="grid">
                {resources?.map((res: Resource) => (
                    <a
                        key={res.id}
                        href={res.url}
                        target="_blank"
                        className="card card-link"
                    >
                        <h3>{res.title}</h3>
                        <p>{res.description}</p>
                        <span className="tag">
                            #{res.category}
                        </span>
                    </a>
                ))}

                {(!resources || resources.length === 0) && (
                    <p className="text-center col-span-full">
                        등록된 리소스가 없습니다.
                    </p>
                )}
            </section>
        </>
    );
}
