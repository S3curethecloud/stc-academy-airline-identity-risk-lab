# Executive View Contract — Lifecycle Risk Timeline

## Purpose
Map airline lifecycle events to risk evolution over time.

This view answers:
- When did risk increase?
- Which lifecycle action caused it?
- Was it progressive or sudden?

---

## Data Source

Primary:
- CloudTrail events
- Airline Demo API events
- Aegis-Air signal classification
- RiskDNA historical scoring

---

## Lifecycle Stages

- Login
- Flight search
- Booking
- Check-in
- Loyalty redemption
- Refund request
- Admin override

---

## Required Timeline Fields

| Field | Source | Description |
|--------|--------|------------|
| timestamp | CloudTrail | Event time |
| event_type | API | Action performed |
| lifecycle_stage | Aegis-Air | Mapped stage |
| signal_id | Aegis-Air | Triggered signal |
| incremental_risk | RiskDNA | Risk delta |
| cumulative_risk | RiskDNA | Updated score |

---

## Sample Timeline Event

```json
{
  "timestamp": "2026-02-18T02:14:00Z",
  "event_type": "POST /refund",
  "lifecycle_stage": "refund",
  "signal_id": "after_hours_operation",
  "incremental_risk": 15,
  "cumulative_risk": 82
}
