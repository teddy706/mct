-- Create education table
create table public.education (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  institution text not null,
  date date not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create study_logs table
create table public.study_logs (
  id uuid default gen_random_uuid() primary key,
  topic text not null,
  content text not null,
  date date not null,
  tags text[],
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create resources table
create table public.resources (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  url text not null,
  category text,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Set up Row Level Security (RLS)
-- Enable RLS for all tables
alter table public.education enable row level security;
alter table public.study_logs enable row level security;
alter table public.resources enable row level security;

-- Create policies to allow public read access
create policy "Allow public read access" on public.education for select using (true);
create policy "Allow public read access" on public.study_logs for select using (true);
create policy "Allow public read access" on public.resources for select using (true);
