CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  timestamp TEXT NOT NULL,
  session_hash TEXT,
  theme TEXT,
  page_url TEXT,
  section TEXT,
  resume_label TEXT,
  selected_project TEXT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  role TEXT,
  message TEXT NOT NULL,
  source TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_timestamp ON leads(timestamp);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_session_hash ON leads(session_hash);
