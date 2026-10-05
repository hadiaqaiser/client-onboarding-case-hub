# Dynamics 365 Client Onboarding Case Hub

An entry-level functional portfolio project showing an end-to-end client-onboarding case process across Microsoft Dynamics 365 and the Power Platform.

> All customer and case data in this repository is fictional and used only for portfolio demonstration.

## Business scenario

A service team needs one place to record new client-onboarding requests, assign follow-up work, notify the service owner, and monitor the case workload.

## Solution delivered

| Tool | What was built |
| --- | --- |
| **Dynamics 365 Customer Service** | Created and managed client-onboarding cases for the `Fourth Coffee` sample account, including priority, status, notes and resolution. |
| **Power Apps** | Created a responsive Canvas app connected to the Dataverse **Cases** table for browsing case records. |
| **Power Automate** | Created the `D365 Client Onboarding Case Notification` cloud flow. It triggers when a new Dataverse Case is added and sends a service notification email. |
| **Power BI** | Built the saved **Client Onboarding Service Dashboard** to analyse onboarding cases by status, case title, request type and service owner. |
| **Azure DevOps** | Created an Epic and four Issues to represent the delivery backlog: D365 Case Intake, Automated Case Notification, Power Apps Case View and Power BI Case Dashboard. |
| **Excel** | Created the fictional source dataset used for the Power BI report. |

## Key functionality

1. A service agent creates an onboarding case in Dynamics 365.
2. The Dataverse-triggered Power Automate flow notifies the service team.
3. Users can browse the Dynamics 365 Cases data through the Power Apps canvas app.
4. Power BI provides an operational view of case status, request type and ownership.
5. Azure DevOps captures the Epic and implementation backlog.

## Repository contents

| File or folder | Purpose |
| --- | --- |
| `Client_Onboarding_Cases.xlsx` | Fictional Excel source data used in Power BI. |
| `client_onboarding_cases.csv` | CSV version of the source data. |
| `azure_devops_backlog.csv` | Backlog reference data. |
| `requirements_and_uat.md` | Requirements and UAT reference notes. |
| `power_apps_and_automate_build.md` | Build reference notes for Power Apps and Power Automate. |
| `docs/screenshots/` | Evidence screenshots from the live Dynamics 365, Power Platform, Power BI and Azure DevOps builds. |

## Evidence screenshots

Add the screenshots below to `docs/screenshots/` after cloning or uploading this folder to GitHub.

| Suggested filename | Evidence |
| --- | --- |
| `01-dynamics365-cases.png` | Dynamics 365 active/resolved onboarding cases. |
| `02-power-apps-cases.png` | Canvas app connected to the Dataverse Cases table. |
| `03-power-automate-flow.png` | Dataverse trigger and Send an email (V2) flow. |
| `04-power-bi-dashboard.png` | Client Onboarding Service Dashboard. |
| `05-azure-devops-backlog.png` | Epic and four Azure DevOps Issues. |

## Skills demonstrated

- Dynamics 365 Customer Service configuration and case management
- Dataverse tables and Power Platform integration
- Power Apps Canvas app creation
- Power Automate cloud flow design
- Power BI operational reporting and dashboard design
- Azure DevOps Agile backlog management
- Requirements, UAT thinking and stakeholder-oriented process design

## Portfolio note

This project demonstrates practical, self-directed configuration experience. It should be described as a **portfolio project**, not commercial client delivery experience.
