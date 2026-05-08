CREATE TABLE public.intake_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  website TEXT,
  project_type TEXT NOT NULL,
  goals TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  integrations TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone can submit intake"
  ON public.intake_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated can read intake"
  ON public.intake_submissions FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "anyone can submit contact"
  ON public.contact_submissions FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated can read contact"
  ON public.contact_submissions FOR SELECT TO authenticated
  USING (true);