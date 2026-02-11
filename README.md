STACK GONNA USE
- Next.js 
- TypeScript
- ShadCn for Component Library
- For Theme Management we are gonna use next-themes
- For ORM we are gonna use Drizzle 
- Node-Postgres
- For Auth Better-Auth
- Justin - For State Management


LEARNINGS
- { cn } utility function used to merge classes
- Next-themes is a popular NPM package used in Next.js applications to effortlessly implement theme switching (such as light/dark mode) without flickering, even with server-side rendering.
- Object-Relational Mapping (ORM): A technique that allows developers to interact with relational databases (like SQL) using object-oriented programming (OOP) concepts (classes, objects) instead of writing raw SQL queries, simplifying data management.
- First we have to create auth.ts then run the CLI not using CLI for this project tho
- We can automatically create schema by running CLI it checks auth.ts and create schema accordingly

STEPS
- Installation 
    - ShadCn Installation
    - npm i zustand next-themes
- Creating Optional Components i.e. container under layout folder in components folder
- Created Header Component Function
- Implementing NextThemes
    - Added ThemeProvider
- Creating All Pages tht we need
- Created NotFound Page
- Building Header Component
- Building Auth Component
    - Setup All Components
    - Build Auth Layout
    - Work on Login & Register Form UI using React Hook Form and Zod
        - npm i react-hook-form zod @hookform/resolvers
        - installed form, input and label components
- Setting up our Database, working with drizzle and implementing BetterAuth Email and Password Authentication with middleware and route protection etc
    - Installing Better Auth and Drizzle Postgres
    - Setup Drizzle Config and Schema
    - Create Auth.ts and Auth Router
    - Creating Configure Part in Auth.ts
    - Create AuthClient.ts
    - Creating Db->Schema
