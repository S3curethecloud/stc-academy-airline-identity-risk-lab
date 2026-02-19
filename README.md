STC Academy — Airline Identity Risk Lab
<p align="center"> <strong>Identity-Centric Risk Modeling · Deterministic Scoring · Read-Only Governance</strong> </p>
Executive Summary

This repository implements a controlled identity-risk modeling environment for airline cloud architectures.

It demonstrates how identity-originated activity propagates across service boundaries, produces measurable exposure, and can be modeled deterministically without introducing enforcement logic or operational mutation.

The lab connects:

Workforce identity (AWS Identity Center)

Scoped IAM permission models

Airline API event simulation

CloudTrail telemetry validation

Deterministic risk scoring (RiskDNA)

Blast-radius mapping (STC Shield)

Executive briefing output (STC Copilot)

The environment is intentionally read-only.

There is no enforcement layer.
There is no remediation workflow.
There is no infrastructure mutation.

The objective is architectural clarity — not control-plane automation.

Capabilities Demonstrated

Identity-first risk modeling

Airline-specific risk semantics (refund abuse, fraud patterns, insider threat)

Deterministic scoring logic (RiskDNA contracts)

Visual blast-radius propagation modeling

Structured executive-level explanation output

Zero enforcement, zero operational impact

Architectural Model
flowchart LR
    Identity[AWS Identity Center]
    API[Airline Demo API]
    Telemetry[CloudTrail Telemetry]
    RiskDNA[Deterministic Risk Engine]
    Shield[Blast Radius Visualization]
    Copilot[Executive Risk Brief]

    Identity --> API
    API --> Telemetry
    Telemetry --> RiskDNA
    RiskDNA --> Shield
    Shield --> Copilot


Architectural invariants:

All risk originates from identity activity.

All scoring is deterministic and reproducible.

All visualization layers are read-only.

No AI-generated decisions influence scoring outcomes.

Canonical Demonstration Scenario

The lab is anchored to a single reference case:

An airline agent initiates a refund request at 02:14 AM from a previously unseen device.

This produces:

After-hours behavioral signal

Elevated risk score

Modeled blast radius across refund data stores

Executive summary generation for review

The scenario functions as a baseline control case for:

Signal validation

Scoring calibration

Blast-radius integrity checks

Governance verification

Principal-level architecture interviews

Repository Structure

The repository is layered to preserve separation of responsibility:

identity/        — Identity Center configuration and role modeling
airline-api/     — Deterministic event simulation
telemetry/       — CloudTrail validation and event contracts
riskdna/         — Risk scoring logic and scoring contracts
stc-aegis-air/   — Airline semantic alignment layer
stc-shield/      — Visualization contracts (read-only)
stc-copilot/     — Executive summary structure
architecture/    — Diagrams and system documentation
compliance/      — Governance constraints and invariants
demo/            — Canonical scenario definitions
screenshots/     — Validation artifacts


Structural separation exists between:

Risk definition

Execution simulation

Visualization

Governance authority

No layer mutates another.

Design Principles

Identity-first architecture

Least privilege enforced at the IAM layer

Deterministic scoring (no probabilistic inference)

Read-only system visibility

Reproducible demonstration workflows

Explicit governance boundaries

There are no synthetic AI risk decisions.
There is no opaque scoring model.
There is no black-box inference.

Every score can be traced to explicit signal contracts.

Intended Audience

Principal Security Architects

Cloud Platform Security Leads

Airline Risk & Compliance Leadership

Identity Governance Teams

Technical Interview Panels

This repository demonstrates architectural reasoning under governance constraints.

It is not a tool showcase.
It is an architecture artifact.

Long-Term Role Within STC Ecosystem

This repository serves as:

A reference identity-risk lab for airline environments

A deterministic dataset source for STC Intelligence Core

A validation layer for blast-radius modeling

A structured executive reporting foundation

A portfolio-grade architecture demonstration

It is not a product demo.
It is not a managed service.

It is a controlled architectural environment.

Governance & Operational Constraints

No transaction blocking

No production airline integration

No PII ingestion

No automated remediation

No infrastructure mutation

Read-only scoring authority

The lab models exposure.
It does not attempt to correct it.

Closing

Security maturity begins with understanding identity-driven blast radius.

This repository models that relationship with explicit contracts, deterministic scoring, and controlled architectural boundaries.
