# Merchant B-Notice Compliance Agent

This project is a high-fidelity frontend prototype designed to demonstrate an autonomous agentic workflow for tax compliance.

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
