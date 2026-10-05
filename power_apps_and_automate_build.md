# Power Apps and Power Automate build sheet

## Power Apps form

Create a blank canvas app called **Client Onboarding Request**.

Add these fields:

- Customer name
- Contact email
- Request type
- Priority
- Requested completion date
- Request details

Use the case CSV as a temporary Excel data source, or create a Microsoft List with the same columns.

## Power Automate flow

Create an automated cloud flow called **New Onboarding Request Notification**.

Trigger: when a new request is created in the Microsoft List or Power Apps data source.

Actions:

1. Send acknowledgement email to the client.
2. Send a Teams or email notification to the service owner.
3. Include customer name, request type and priority.

## Power BI report

Load `client_onboarding_cases.csv` and create:

- Card: total cases
- Donut chart: cases by status
- Bar chart: cases by priority
- Table: active case title, customer, priority and owner
