-- Profiles table for team members
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT DEFAULT 'member',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team memberships (Many-to-Many tasks-to-profiles)
CREATE TABLE IF NOT EXISTS task_assignees (
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  profile_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  PRIMARY KEY (task_id, profile_id)
);

-- RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all reads" ON profiles FOR SELECT USING (true);

ALTER TABLE task_assignees ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all reads" ON task_assignees FOR SELECT USING (true);

-- Insert some mock team members for Marcus's system
INSERT INTO profiles (full_name, avatar_url, role)
VALUES 
  ('Marcus', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', 'owner'),
  ('Sarah AI', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', 'agent'),
  ('Ahlian Bot', 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahlian', 'agent');
