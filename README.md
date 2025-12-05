# Merchant B-Notice Compliance Agent

This project is a high-fidelity frontend prototype designed to demonstrate an autonomous agentic workflow for tax compliance.

## 📜 Creative Brief

> **"Fix the problem... without any intervention."**

### 1. Executive Summary
This project aims to evolve an existing tax reporting solution, originally created within JP Morgan, into a **proactive, agentic system**. The current system reacts to IRS B-Notices by applying backup withholding to high-volume merchants with obsolete W9 forms. 

The strategic goal is to prototype an **"agenticized" solution** that autonomously identifies merchants with outdated W9s and facilitates the correction **before** an IRS B-Notice is issued, thereby preventing backup withholding and eliminating manual intervention for internal tax operations teams.

### 2. Strategic Recommendations
The core strategy is to shift the solution from a **reactive** to a **proactive, autonomous model**. The prototype demonstrates the following agentic capabilities:

*   **Proactive Identification:** An agent that continuously monitors merchant profiles to detect obsolete or missing W9 forms before they are flagged by the IRS.
*   **Autonomous Communication:** An agent that automatically initiates contact with identified merchants, clearly explaining the issue and the steps required to update their W9 form.
*   **Intervention-Free Resolution:** A workflow where the agent facilitates the W9 update process seamlessly. The ultimate goal is to guide the merchant through an automated portal or update the information directly.

### 3. Audience Analysis
| Audience | Description | Challenge | Goal |
| :--- | :--- | :--- | :--- |
| **Primary (Merchants)** | High-volume merchants on the payments platform. | Risk of receiving IRS B-Notice and backup withholding due to obsolete W9s. | To be proactively notified and guided to update W9s easily, ensuring compliance. |
| **Secondary (Tax Ops)** | Internal team responsible for tax operations. | Manually handling reactive, labor-intensive B-Notices. | Reduce/eliminate manual workload via an automated system. |

### 4. Success Framework
Success is measured by the ability to execute a complete, proactive resolution cycle **without human intervention**.

*   **Primary Success Metric:** The agent successfully identifies, notifies, and facilitates the correction of an obsolete W9 before a B-Notice is issued.
*   **KPI:** A 100% autonomous workflow, from detection to resolution, for a test case.
*   **Qualitative Goal:** An elegant, efficient design that functions without requiring manual oversight.

---

## 🏗️ Current Tech Stack (Frontend Prototype)

This application is currently running as a **Single Page Application (SPA)** using the following modern web technologies:

*   **Framework:** [React](https://react.dev/) (v18+) - Component-based UI library.
*   **Build Tool:** [Vite](https://vitejs.dev/) - Extremely fast frontend tooling.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better code quality and developer experience.
*   **Styling:** 
    *   [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework.
    *   [Shadcn/UI](https://ui.shadcn.com/) - Re-usable components built using Radix UI and Tailwind.
*   **Routing:** [Wouter](https://github.com/molefrog/wouter) - Minimalist router for React.
*   **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons.
*   **Charts:** [Recharts](https://recharts.org/) - Composable charting library for React.
*   **State Management:** React Query (TanStack Query) - For managing server state (mocked in this prototype).
*   **Forms:** React Hook Form + Zod - For form validation and handling.

## 🚀 Full-Stack Upgrade Path

If you choose to "Upgrade to Full Stack," the application architecture would expand to include a real backend and database:

1.  **Backend Server:** Node.js with [Express](https://expressjs.com/).
    *   Handles API requests.
    *   Manages authentication (Passport.js).
    *   Runs the actual "Agent" logic (CRON jobs, email sending, risk analysis).
2.  **Database:** [PostgreSQL](https://www.postgresql.org/).
    *   Stores real merchant data, tax profiles, and audit logs.
    *   Managed via [Drizzle ORM](https://orm.drizzle.team/) for type-safe database queries.
3.  **Authentication:** Session-based auth to secure the dashboard and merchant portal.
4.  **External Integrations:**
    *   Email Service (SendGrid/Mailgun) for sending real outreach emails.
    *   Storage (S3/GCS) for storing uploaded W9 PDF documents.

## 📂 Project Structure

*   `client/src/` - All frontend source code.
    *   `components/` - Reusable UI components (buttons, cards, layout).
    *   `pages/` - Application views (Dashboard, MerchantList, etc.).
    *   `lib/` - Utilities and mock data.
*   `server/` - (Currently Empty/Minimal) - Placeholders for future backend logic.
*   `shared/` - Shared types and schemas between frontend and backend.
