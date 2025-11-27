-- Insert sample data into education table
INSERT INTO public.education (title, institution, date, description)
VALUES
('MCT Certification', 'Microsoft', '2023-12-01', 'Achieved Microsoft Certified Trainer status.'),
('Azure Solutions Architect Expert', 'Microsoft', '2023-10-15', 'Earned the expert level certification for Azure.'),
('Bachelor of Computer Science', 'Korea University', '2020-02-20', 'Major in Computer Science.');

-- Insert sample data into study_logs table
INSERT INTO public.study_logs (topic, content, date, tags)
VALUES
('Supabase Row Level Security', 'Learned how to configure RLS policies to secure data. It is important to enable RLS for all tables publically accessible.', '2023-11-25', ARRAY['Supabase', 'Database', 'Security']),
('Next.js App Router', 'Explored the new App Router features including Layouts, Server Components, and Streaming.', '2023-11-26', ARRAY['Next.js', 'React', 'Frontend']);

-- Insert sample data into resources table
INSERT INTO public.resources (title, url, category, description)
VALUES
('Supabase Docs', 'https://supabase.com/docs', 'Documentation', 'The official documentation for Supabase.'),
('Next.js Docs', 'https://nextjs.org/docs', 'Documentation', 'The official documentation for Next.js.'),
('Microsoft Learn', 'https://learn.microsoft.com', 'Learning', 'Official Microsoft learning platform.');
