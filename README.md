# PARAKH ITMS Landing (Next.js)

This project migrates the original static HTML landing page into a modular, reusable Next.js App Router codebase.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- ESLint (next/core-web-vitals)
- next/font (DM Sans, Libre Baskerville, JetBrains Mono)

## Project Structure

- `src/app` - App Router entry, global layout, global styles
- `src/components/layout` - Global layout components (top strip, nav, footer)
- `src/components/sections` - Reusable page sections
- `src/components/common` - Shared building blocks
- `src/data` - Content and section data models

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for Production

```bash
npm run lint
npm run build
npm run start
```
