# Requirements, Process and UAT

## Business problem

Client onboarding requests can be missed when they are handled through email and spreadsheets. The service team needs one place to record the request, set priority, track progress and close the case.

## Current process

Client email → team member records details manually → follow-up is tracked inconsistently → manager has limited visibility.

## Future process

Client submits request → Power Apps validates required details → Dynamics 365 creates a case → Power Automate notifies the service owner → team updates status → Power BI reports workload and status.

## Data fields

Case title; customer; contact email; request type; priority; status; service owner; created date; target date; resolution.

## Business rules

- Customer, request type and priority are required.
- High-priority requests must be assigned to a service owner.
- A case can only be resolved after a resolution note is recorded.

## UAT test

| Test | Expected result |
|---|---|
| Submit a high-priority access request | A case is created with status New or In Progress. |
| Enter required case details | Missing required fields are blocked. |
| Resolve an onboarding request | Resolution is stored and the case leaves the active list. |
| Refresh the report | Status and priority totals reflect the case data. |
