CREATE TABLE IF NOT EXISTS telemetry (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_type TEXT NOT NULL,
  timestamp TEXT NOT NULL,
  country TEXT,
  referrer TEXT,
  page_url TEXT,
  theme TEXT,
  session_hash TEXT,
  link_clicked TEXT,
  label TEXT,
  question TEXT,
  history_length INTEGER,
  error TEXT
);

CREATE INDEX IF NOT EXISTS idx_telemetry_event_type ON telemetry(event_type);
CREATE INDEX IF NOT EXISTS idx_telemetry_timestamp ON telemetry(timestamp);
CREATE INDEX IF NOT EXISTS idx_telemetry_session_hash ON telemetry(session_hash);
