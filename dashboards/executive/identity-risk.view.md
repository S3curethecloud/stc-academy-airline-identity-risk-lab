# Executive View Contract — Identity Risk View

## Purpose
Provide a real-time executive summary of a single airline identity's current risk posture.

This view answers:
- Who is risky right now?
- How risky are they?
- Why?
- What changed?

---

## Data Source

Primary:
- RiskDNA scoring output
- Aegis-Air signals

Optional:
- Identity metadata (role, department, region)

---

## Required Fields (Binding Contract)

| Field | Source | Description |
|--------|--------|------------|
| identity_id | Identity Center | Unique user identifier |
| persona | Aegis-Air | Passenger / Agent / Analyst |
| risk_score | RiskDNA | Deterministic risk score (0–100) |
| severity | RiskDNA | LOW / MEDIUM / HIGH / CRITICAL |
| drivers | RiskDNA | List of risk contributors |
| last_activity | CloudTrail | Timestamp of last event |
| lifecycle_stage | Aegis-Air | booking / redemption / refund / etc |

---

## Sample RiskDNA Input

```json
{
  "identity_id": "agent.demo",
  "risk_score": 82,
  "severity": "HIGH",
  "drivers": [
    "After-hours refund request",
    "New device fingerprint",
    "Deviation from historical behavior"
  ],
  "lifecycle_stage": "refund",
  "last_activity": "2026-02-18T02:14:00Z"
}
