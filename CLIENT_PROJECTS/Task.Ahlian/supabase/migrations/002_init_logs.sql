-- Activity logs for tasks
CREATE TABLE IF NOT EXISTS logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  action TEXT NOT NULL 
    CHECK (action IN ('created', 'status_changed', 'priority_changed', 'deleted')),
  old_value JSONB,
  new_value JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE logs ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow all reads" ON logs;
CREATE POLICY "Allow all reads" ON logs FOR SELECT USING (true);
DROP POLICY IF EXISTS "Allow all inserts" ON logs;
CREATE POLICY "Allow all inserts" ON logs FOR INSERT WITH CHECK (true);

-- Indexes for audit queries
CREATE INDEX IF NOT EXISTS idx_logs_task_id ON logs(task_id);
CREATE INDEX IF NOT EXISTS idx_logs_action ON logs(action);
