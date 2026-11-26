CREATE TABLE IF NOT EXISTS claims (
  id INTEGER PRIMARY KEY, user_id TEXT NOT NULL, claim_date TEXT NOT NULL,
  amount INTEGER NOT NULL CHECK(amount > 0), merchant TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('Submitted','Approved','Rejected'))
);
CREATE INDEX IF NOT EXISTS claims_user_date ON claims(user_id, claim_date);
CREATE TABLE IF NOT EXISTS claim_limits (user_id TEXT PRIMARY KEY, monthly_limit INTEGER NOT NULL CHECK(monthly_limit > 0));
INSERT OR IGNORE INTO claim_limits VALUES ('rina', 1000000), ('budi', 1000000);
