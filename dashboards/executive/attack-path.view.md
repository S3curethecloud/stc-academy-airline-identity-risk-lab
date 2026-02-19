# Executive View Contract — Attack / Abuse Path View

## Purpose
Visualize deterministic blast radius from an identity to sensitive airline assets.

This view answers:
- If this identity is compromised, what can be reached?
- How many hops?
- What data exposure exists?

---

## Data Source

Primary:
- IAM role relationships
- API Gateway integration mapping
- Cloud resource graph
- Aegis-Air threat scenario definitions

---

## Path Semantics

Node Types:
- Identity
- Role
- API
- Service
- Data Store
- External Exposure

Edge Types:
- assumes_role
- invokes
- reads
- writes
- escalates_to

---

## Required Fields

| Field | Source | Description |
|--------|--------|------------|
| origin_identity | Identity Center | Starting node |
| role_assumed | IAM | Effective permissions |
| api_invoked | API Gateway | Endpoint accessed |
| downstream_resource | AWS | S3 / DynamoDB / RDS |
| hop_count | Graph engine | Path depth |
| exposure_level | RiskDNA | Data classification |

---

## Sample Path Model

```json
{
  "origin_identity": "agent.demo",
  "path": [
    "AirlineAgentPermissionSet",
    "POST /refund",
    "Lambda refund-handler",
    "DynamoDB refund-records",
    "S3 archival bucket"
  ],
  "hop_count": 4,
  "exposure_level": "PII"
}
