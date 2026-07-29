-- Run this in your Supabase SQL Editor

-- 1. Create the leads table
CREATE TABLE IF NOT EXISTS public.leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    business TEXT,
    message TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('contact', 'demo'))
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy that allows ANYONE (anonymous users) to INSERT data
CREATE POLICY "Allow anonymous inserts to leads" ON public.leads
    FOR INSERT 
    TO public, anon
    WITH CHECK (true);

-- 4. Create a policy that allows only authenticated users to SELECT (view) leads
-- (Assuming you want to view them later from a dashboard, or you can just view in Supabase interface)
CREATE POLICY "Allow authenticated users to read leads" ON public.leads
    FOR SELECT
    TO authenticated
    USING (true);
