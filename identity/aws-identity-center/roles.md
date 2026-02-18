# Airline Identity Roles

## PassengerRole
Represents a loyalty passenger accessing airline services.

Permissions:
- Invoke Airline API endpoints
- Read-only access to personal resources

## AirlineAgentRole
Represents airline staff (e.g., flight attendant, support agent).

Permissions:
- Read PNR records
- Limited operational access
- No infrastructure modification

## AirlineSecurityAnalystRole
Represents airline security and fraud teams.

Permissions:
- Read-only access to CloudTrail
- Read-only access to RiskDNA outputs
- View STC Shield dashboards
