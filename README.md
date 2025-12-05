# Merchant B-Notice Compliance Agent

This project is a high-fidelity frontend prototype designed to demonstrate an autonomous agentic workflow for tax compliance.

## 📜 Executive Summary

This project aims to evolve an existing tax reporting solution, originally created within JP Morgan, into a **proactive, agentic system**. The current system reacts to IRS B-Notices by applying backup withholding to high-volume merchants with obsolete W9 forms.

The strategic goal is to prototype an **"agenticized" solution** that autonomously identifies merchants with outdated W9s and facilitates the correction **before** an IRS B-Notice is issued, thereby preventing backup withholding and eliminating manual intervention for internal tax operations teams.

### 🔑 Strategic Value for Leadership
*   **Risk Mitigation:** Proactively prevents backup withholding (24% revenue impact) for high-value merchants.
*   **Operational Efficiency:** Reduces manual "B-Notice Season" workload for Tax Ops teams by automating outreach and collection.
*   **Merchant Experience:** Shifts from punitive (withholding) to supportive (proactive notifications), improving merchant retention.

---

## 🤖 Functional Overview: What the App Does

The prototype demonstrates a complete autonomous loop:

1.  **Proactive Identification (The Scanner):**
    *   The Agent continuously monitors merchant profiles.
    *   It flags accounts with W9 forms older than 3 years (the "At Risk" threshold).
2.  **Autonomous Communication (The Communicator):**
    *   The Agent automatically initiates contact with the merchant via email.
    *   It explains the compliance risk clearly and provides a secure link to fix it.
3.  **Intervention-Free Resolution (The Validator):**
    *   The merchant uses a self-service portal to update their W9.
    *   The Agent validates the data and updates the system status to "Compliant" instantly.

---

## 🏗️ Technical Architecture & Stack

### Current Status: Frontend Prototype (Mockup Mode)
This application is currently running as a **Single Page Application (SPA)** designed for rapid iteration and demonstration. It simulates the agent's logic in the browser.

*   **Frontend Framework:** [React](https://react.dev/) (v18+) - Component-based UI.
*   **Language:** [TypeScript](https://www.typescriptlang.org/) - For type-safe logic.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4) & [Shadcn/UI](https://ui.shadcn.com/) - Modern, accessible design system.
*   **State Simulation:** React Query - Simulating server interactions.
*   **Routing:** Wouter - Lightweight client-side routing.

### Future Production Architecture (Full-Stack Upgrade)
To move from prototype to production, the system is architected to scale with the following backend components:

1.  **Orchestration Engine:** **LangGraph** (or similar) to manage the multi-agent state and handoffs between scanning, communicating, and validating agents.
2.  **Backend Server:** Node.js/Express API to handle secure data processing.
3.  **Database:** PostgreSQL to persist merchant tax profiles and agent audit logs.
4.  **Integrations:**
    *   **SendGrid/Twilio:** For delivering the actual compliance emails.
    *   **AWS S3/GCS:** For secure storage of the signed PDF documents.

---

## 🎯 Target Audience

| Audience | Description | Challenge | Goal |
| :--- | :--- | :--- | :--- |
| **Primary (Merchants)** | High-volume merchants on the payments platform. | Risk of receiving IRS B-Notice and backup withholding due to obsolete W9s. | To be proactively notified and guided to update W9s easily, ensuring compliance. |
| **Secondary (Tax Ops)** | Internal team responsible for tax operations. | Manually handling reactive, labor-intensive B-Notices. | Reduce/eliminate manual workload via an automated system. |

---

## 📂 Project Structure

*   `client/src/` - All frontend source code.
    *   `components/` - Reusable UI components (buttons, cards, layout).
    *   `pages/` - Application views (Dashboard, MerchantList, etc.).
    *   `lib/` - Utilities and mock data (where the simulation logic lives).
*   `server/` - (Currently Empty/Minimal) - Placeholders for future backend logic.
*   `shared/` - Shared types and schemas between frontend and backend.
