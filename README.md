# Dynamics 365 Client Onboarding Case Hub

## Project description

This project delivers a client-onboarding case-management process using Microsoft Dynamics 365 and the Power Platform. It gives a service team a structured way to create onboarding cases, track follow-up work, notify the service owner and monitor the workload.

The business scenario is simple: when a new client needs account setup, access support or data validation, the request must be recorded, assigned and monitored until it is completed.

## How the solution works

```text
New client onboarding request
            ↓
Dynamics 365 Customer Service case is created and prioritised
            ↓
Power Automate sends a notification to the service team
            ↓
Power Apps provides a simple view of Dataverse Case records
            ↓
Power BI monitors onboarding workload and case status
            ↓
Azure DevOps records the Epic and delivery backlog
```

## Tools used

| Tool | Purpose in this project |
| --- | --- |
| **Dynamics 365 Customer Service** | The core case-management system. I created and managed client-onboarding cases, captured the customer, priority and status, added notes, and resolved a completed case. |
| **Microsoft Dataverse** | Stores the Dynamics 365 Case records. It is the shared data layer used by Dynamics 365, Power Apps and Power Automate. |
| **Power Automate** | Automates the notification process. The `D365 Client Onboarding Case Notification` cloud flow starts when a new Case record is added in Dataverse and sends an email notification. |
| **Power Apps** | Provides a responsive Canvas app connected to the Dataverse Cases table so users can browse case records through a simple interface. |
| **Power BI** | Provides an operational dashboard using the onboarding case dataset. It shows case status, request type, service ownership and workload to support follow-up decisions. |
| **Excel** | Contains the fictional onboarding case dataset used as the Power BI reporting source. |
| **Azure DevOps** | Used to plan and document delivery. The project contains one Epic and four Issues covering case intake, automation, Power Apps and Power BI. |

## Project delivery flow

1. **Define the business need** — identify the need for a consistent process to manage client-onboarding requests.
2. **Configure case management** — create and manage onboarding cases in Dynamics 365 Customer Service.
3. **Automate follow-up** — configure a Power Automate flow triggered by a newly created Dataverse Case.
4. **Provide case visibility** — connect a Power Apps Canvas app to the Cases table.
5. **Create operational reporting** — build a Power BI dashboard from the onboarding case data.
6. **Manage delivery work** — record the project Epic and related Issues in Azure DevOps.

## My roles and responsibilities

- Translated the client-onboarding process into a structured Dynamics 365 case-management workflow.
- Created and prioritised onboarding cases, including customer, case status and follow-up activity.
- Connected a Canvas app to the Dataverse Cases table.
- Configured a Dataverse-triggered Power Automate email notification flow.
- Created a Power BI operations dashboard to report onboarding cases by status, request type and service owner.
- Created and organised the project delivery backlog in Azure DevOps.
- Produced the reporting dataset and project documentation using fictional portfolio data.

## Project impact

- Creates one consistent place to record and manage client-onboarding requests.
- Reduces the risk of missed follow-up through an automated notification step.
- Improves visibility of open and completed onboarding work through Power BI reporting.
- Demonstrates how Dynamics 365, Dataverse, Power Apps, Power Automate, Power BI and Azure DevOps work together in one service process.

## Repository contents

| File or folder | Purpose |
| --- | --- |
| `Client_Onboarding_Cases.xlsx` | Fictional onboarding case dataset used for the Power BI dashboard. |
| `docs/screenshots/` | Screenshots of the Dynamics 365, Power Apps, Power Automate, Power BI and Azure DevOps deliverables. |

## Screenshots to add

| Filename | Evidence |
| --- | --- |
| `01-azure-devops-backlog.png` | Azure DevOps Epic and Issues. |
| `02-power-bi-dashboard.png` | Client Onboarding Operations Dashboard. |
| `03-dynamics365-cases.png` | Dynamics 365 onboarding case management. |
| `04-power-apps-cases.png` | Power Apps Canvas app connected to Cases. |
| `05-power-automate-flow.png` | Dataverse-triggered notification flow. |

> All client names and data in this repository are fictional and are used solely for portfolio demonstration.
