-- Add agent task support to tasks table

-- Task type: manual or agent-generated
ALTER TABLE tasks ADD COLUMN task_type TEXT NOT NULL DEFAULT 'manual'
  CHECK (task_type IN ('manual', 'agent'));

-- Agent that generated the task
ALTER TABLE tasks ADD COLUMN agent_type TEXT
  CHECK (agent_type IN ('perplexity', 'claude-code', 'gemini', 'vercel'));

-- Unique identifier for agent execution instance (e.g., 'perplexity-1712282400')
ALTER TABLE tasks ADD COLUMN agent_id TEXT;

-- Foreign key to parent task (for task hierarchies/dependencies)
ALTER TABLE tasks ADD COLUMN parent_task_id UUID REFERENCES tasks(id) ON DELETE SET NULL;

-- Flexible storage for agent-specific context
ALTER TABLE tasks ADD COLUMN metadata JSONB DEFAULT '{}'::jsonb;

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_tasks_task_type ON tasks(task_type);
CREATE INDEX IF NOT EXISTS idx_tasks_agent_type ON tasks(agent_type);
CREATE INDEX IF NOT EXISTS idx_tasks_parent_task_id ON tasks(parent_task_id);

-- RLS policies already inherited from tasks table (no changes needed)
