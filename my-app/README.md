# Athletes Table — Launch Labs Test Task

A React application that displays and filters a large dataset of athletes. Built as a frontend test assignment for **Launch Labs**.

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** — build tool and dev server
- **TanStack Query (React Query)** — data fetching, caching, and pagination
- **CSS Modules** — scoped component styling with a dark theme

## Features

- **Sortable data table** displaying 27 athlete attributes (personal info, sports stats, financials, etc.)
- **Filtering** by ID, name, sport, country, status, and gender
- **Pagination** with smooth transitions via `keepPreviousData`
- **In-memory database layer** with pre-indexed Maps for fast lookups
- **Input sanitization** for safe filtering
- **Custom dropdown** with keyboard navigation and click-outside handling
- **Status badges** with color-coded indicators (Active, Injured, Suspended, Retired)
- **Formatted values** for percentages, booleans, and currency fields

## Project Structure

```
src/
├── components/
│   ├── common/atoms/          # Shared UI primitives (PageHeader)
│   └── table/
│       ├── atoms/             # TextInput, Dropdown, PaginationButton, etc.
│       ├── molecules/         # Pagination, TableHeader, TableBody
│       ├── organisms/         # Table
│       └── wrappers/          # Filter logic wrappers (ID, Name, Options)
├── constants/                 # Column definitions and filter configs
├── db/                        # In-memory athlete database with indexing
├── helpers/                   # Input sanitization utilities
├── hooks/                     # React Query hooks (useAthletes, useFilterOptions)
├── types/                     # TypeScript interfaces and enums
├── App.tsx                    # Root component
└── main.tsx                   # Entry point
```

The component hierarchy follows **Atomic Design** principles: atoms → molecules → organisms, with wrapper components encapsulating filter logic.

## Getting Started

```bash
npm install
npm run dev
```

## Available Scripts

| Script            | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Type-check and build for production  |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |
